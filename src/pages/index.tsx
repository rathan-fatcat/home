import NavBar from 'features/layouts/NavBar';
import SideBar from 'features/layouts/SideBar';
import DashboardCards from 'features/Common/components/DashboardCards';
import DashboardBarGraph from 'features/Common/components/DashboardBarGraph';
import IndividualBargraph from 'features/Common/components/IndividualBargraph';
import DashboardPeriodWiseBar from 'features/Common/components/DashboardPeriodWiseBar';
import IndividualStackedChart from 'features/Common/components/IndividualStackedChart';
import LineChart from 'features/Common/components/LineChart';
import StackedChart from 'features/Common/components/StackedChart';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="flex flex-row w-full">
        <div className="fixed mt-20">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-20 mb-10">
              <DashboardCards />
            </div>
            <DashboardPeriodWiseBar />
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-20 mb-10">
              <DashboardCards />
            </div>
            <LineChart />
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-5 mb-10">
              <DashboardCards />
            </div>
            <IndividualBargraph />
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-5 mb-10">
              <DashboardCards />
            </div>
            <DashboardBarGraph />
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-5 mb-10">
              <DashboardCards />
            </div>
            <StackedChart />
          </div>
          <div className="w-full overflow-x-hidden">
            <div className="lg:ml-44 xl:ml-52 mt-5 mb-10">
              <DashboardCards />
            </div>
            <IndividualStackedChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
