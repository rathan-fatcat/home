import { NextPageWithLayout } from 'features/layouts';
import withDefaultLayout from 'features/layouts/components/DefaultLayout';
import CounterPage from './components/CounterPage';

const CounterContainer: NextPageWithLayout = (props) => {
  return <CounterPage />;
};

export default withDefaultLayout(CounterContainer);
