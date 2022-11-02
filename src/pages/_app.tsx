import '../styles/globals.scss';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../app/store';
import { NextPageWithLayout } from 'features/layouts';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
