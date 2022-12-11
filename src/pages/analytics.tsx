import NavBar from 'features/layouts/NavBar';
import SideBar from 'features/layouts/SideBar';
import PieChart from 'features/Common/components/PieChart';
import BarGraph from 'features/Common/components/BarGraph';
import Report from 'features/Common/components/Report';
import AttendanceAnalysis from 'features/Common/components/AttendanceAnalysis';

const Analytics = () => (
  <div className="overflow-x-hidden">
    <NavBar />
    <div className="flex flex-row w-full">
      <div className="fixed mt-20">
        <SideBar />
      </div>
      <div className="lg:ml-44 xl:ml-48 flex flex-col items-center mt-20 w-full overflow-x-hidden mb-10">
        <AttendanceAnalysis />
        <PieChart />
        <BarGraph />
        <Report />
      </div>
    </div>
  </div>
);

export default Analytics;
