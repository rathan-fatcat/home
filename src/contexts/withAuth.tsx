import { NextPage } from 'next';
import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be 'Authenticated' in order to render the provided component.
 * If the user isn't 'Authenticated', forward to the given URL.
 */
export default function withAuth<P>(
  WrappedComponent: NextPage<P>,
  location = '/login'
): NextPage<P> {
  return withAuthRedirect({
    expectedAuth: true,
    WrappedComponent,
    location,
  });
}

/**
 * Require the user to be 'Unauthenticated' in order to render the provided component.
 * If the user is 'Unauthenticated', forward to the given URL.
 */
export function redirectAfterAuth<P>(
  WrappedComponent: NextPage<P>,
  location = '/'
): NextPage<P> {
  return withAuthRedirect({
    expectedAuth: false,
    WrappedComponent,
    location,
  });
}
