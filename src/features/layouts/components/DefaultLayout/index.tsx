/**
 * the code below explains how to configure layouts in the project.
 * following code is for the default layout of the project.
 */
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from 'features/layouts';

/**
 * Layout function which adds Navbar and footer
 * @param props.children is the page
 * @defines layout of the page
 * @returns page with used layout components
 */
function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

/**
 * @param page is the page which will be wrapped with this layout
 * @returns the a page with above layout
 */
export function DefaultLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

/**
 * this is layout provider helper function
 * @param Component is the component in which getLayout fn
 * @returns the a page with the assigned layout
 */
function withDefaultLayout(Component: NextPageWithLayout): NextPageWithLayout {
  Component.getLayout = DefaultLayout;
  return Component;
}

export default withDefaultLayout;
