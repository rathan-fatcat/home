import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const { redirect_url, ...restQuery } = router.query;
    router.replace({
      pathname:
        typeof redirect_url == 'string' && redirect_url ? redirect_url : '/',
      query: restQuery,
    });
  }, [router.isReady]);

  return (
    <div style={{ whiteSpace: 'pre-line' }} className="p-2 gordita">
      <p>Redirecting, Please wait...</p>
    </div>
  );
};

export default RedirectPage;
