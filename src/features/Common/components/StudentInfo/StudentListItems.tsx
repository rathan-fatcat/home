import { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

const sampleData = {
  id: 1,
  name: '',
  course: '',
  contact: '',
  attendance: 0,
  grade: '',
};

interface props {
  state: any;
  eachItem: any;
}

class StudentListItems extends Component<props> {
  state = { isActive: false, data: sampleData };

  componentDidMount() {
    const { eachItem } = this.props;
    this.setState({ data: eachItem });
  }

  listItemClicked = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    const { data, isActive } = this.state;
    return (
      <li className="font['Merriweather-Sans'] font-semibold text-base flex flex-col w-full">
        <div
          className={`${
            data.id % 2 == 0 && 'bg-[#F5F8FC]'
          } flex flex-row justify-between items-center text-[#606981] mb-8 p-2`}
        >
          <p className="w-1/6 text-xs md:text-base flex flex-row justify-start items-center">
            <input className="hidden md:flex mr-2" type="checkbox" />
            {data.id}
          </p>
          <p className="w-1/6 text-xs md:text-base flex flex-row justify-start items-center">
            <Image
              className="hidden md:flex rounded-xl mr-2"
              src="/homepage/profile.png"
              alt="dp"
              width={20}
              height={15}
            />
            {data.name}
          </p>
          <p className="w-1/6 text-xs md:text-base flex flex-row justify-start items-center">
            {data.course}
          </p>
          <p className="w-1/6 text-xs md:text-base hidden md:flex flex-row justify-center items-center ml-5">
            {data.contact}
            <Image
              className="rounded-xl ml-2 bg-[#E2E9FF] p-1"
              src="/homepage/contact.svg"
              alt="contact"
              width={20}
              height={15}
            />
          </p>
          <p
            onClick={this.listItemClicked}
            className={`${
              data.attendance >= 80 ? 'text-[#27AE7A]' : 'text-[#FF6666]'
            } cursor-pointer w-1/6 text-xs md:text-base flex flex-row justify-center items-center`}
          >
            {data.attendance}%
          </p>
          <p
            className={`${
              data.attendance >= 80 ? 'text-[#27AE7A]' : 'text-[#FF6666]'
            } w-1/6 text-xs md:text-base hidden md:flex flex-row justify-center items-center`}
          >
            {data.grade}
          </p>
        </div>
        <div
          className={`${
            isActive ? '' : 'hidden'
          } flex justify-evenly items-center pb-8 bg-[#ffffff]`}
        >
          <Calendar className="hidden md:inline" />

          <div className="text-center">
            <h1 className="font-Lato-normal font-semibold text-3xl md:font-bold md:text-5xl text-[#27AE7A]">
              75.32%
            </h1>
            <p className="font-Lato-normal md:font-bold text-sm text-[#606981]">
              TOTAL ATTENDANCE PERCENTAGE
            </p>
          </div>
          <div className="text-center">
            <h1 className="font-Lato-normal font-semibold text-3xl md:font-bold md:text-5xl text-[#37464F]">
              235/500
            </h1>
            <p className="font-Lato-normal md:font-bold text-sm text-[#606981]">
              CLASSES ATTENDED
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default StudentListItems;
