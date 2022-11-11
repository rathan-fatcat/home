import { NextPageWithLayout } from 'features/layouts';
import withDefaultLayout from 'features/layouts/components/DefaultLayout';
import NavBar from 'features/layouts/NavBar';
import SideBar from 'features/layouts/SideBar';

const CounterContainer: NextPageWithLayout = (props) => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <SideBar />
    </div>
  );
};

export default withDefaultLayout(CounterContainer);
