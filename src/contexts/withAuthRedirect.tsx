import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { useAuth } from './Auth';
import { isBrowser } from 'utils/helpers';

function DefaultLoadingFallback(): ReactElement {
  return <p>Loading...</p>;
}

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for or
 * the component to be rendered.
 * @param location The location to redirect to.
 */
export default function withAuthRedirect<CP = Record<string, any>, IP = CP>({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  location,
}: {
  WrappedComponent: NextPage<CP, IP>;
  LoadingComponent?: NextPage;
  expectedAuth: boolean;
  location: string;
}): NextPage<CP, IP> {
  const WithAuthRedirectWrapper: NextPage<CP, IP> = (props) => {
    const router = useRouter();
    const { loading, isAuthenticated } = useAuth();

    if (loading) {
      return <LoadingComponent />;
    }

    if (
      router.pathname !== 'redirect' &&
      isBrowser() &&
      expectedAuth !== isAuthenticated
    ) {
      const { query } = router;
      router.replace(
        {
          pathname: location,
          query: query,
        },
        undefined,
        { shallow: true }
      );
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
