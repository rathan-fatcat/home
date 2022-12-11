import NavBar from 'features/layouts/NavBar';
import SideBar from 'features/layouts/SideBar';
import StudentInfo from 'features/Common/components/StudentInfo';
import Report from 'features/Common/components/Report';

const Info = () => (
  <div className="overflow-x-hidden">
    <NavBar />
    <div className="flex flex-row w-full">
      <div className="fixed mt-20">
        <SideBar />
      </div>
      <div className="lg:ml-44 xl:ml-52 mt-20 w-full overflow-x-hidden mb-10">
        <StudentInfo />
      </div>
    </div>
  </div>
);

export default Info;
