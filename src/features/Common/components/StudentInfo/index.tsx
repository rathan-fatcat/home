import { Component } from 'react';
import Select from 'react-select';
import StudentListItems from './StudentListItems';
import Image from 'next/image';
import styles from './index.module.css';

const studentOptions = [
  { value: 'students', label: 'Students' },
  { value: 'staff', label: 'Staff' },
];

const branchOptions = [
  { value: 'cse', label: 'CSE' },
  { value: 'ece', label: 'ECE' },
  { value: 'eee', label: 'EEE' },
];

const examTypeOptions = [
  { value: 'sem', label: 'SEM' },
  { value: 'mid', label: 'MID' },
];

const percentageOptions = [
  { value: '60', label: '60%' },
  { value: '70', label: '70%' },
  { value: '8', label: '80%' },
  { value: '90', label: '90%' },
];

const studentInfo = [
  {
    id: 110011,
    name: 'Kiran Sharma',
    course: 'Computer Engineering',
    contact: 9925461357,
    attendance: 90,
    grade: 'A',
  },
  {
    id: 110012,
    name: 'Rahul',
    course: 'Mechanical',
    contact: 9925461357,
    attendance: 65,
    grade: 'D',
  },
  {
    id: 110013,
    name: 'Ravi kumar',
    course: 'Information Technology',
    contact: 9925461357,
    attendance: 55,
    grade: 'F',
  },
  {
    id: 110014,
    name: 'Pavan Kumar',
    course: 'Electrical Engineering',
    contact: 9925461357,
    attendance: 80,
    grade: 'B',
  },
  {
    id: 110015,
    name: 'Vinod',
    course: 'Electronics Engineering',
    contact: 9925461357,
    attendance: 85,
    grade: 'B+',
  },
  {
    id: 110016,
    name: 'Raghav',
    course: 'Mechanical Engineering',
    contact: 9925461357,
    attendance: 90,
    grade: 'A+',
  },
];

const sendOptions = [
  { value: 'msg', label: 'MESSAGE' },
  { value: 'mail', label: 'MAIL' },
  { value: 'mail,msg', label: 'MAIL, MESSAGE' },
];

const toOptions = [
  { value: 'parent', label: 'PARENT' },
  { value: 'student', label: 'STUDENT' },
  { value: 'advisor', label: 'ADVISOR' },
  { value: 'all', label: 'ALL' },
];

class StudentInfo extends Component {
  state = { isOpened: false };

  closeBtn = () => {
    this.setState({ isOpened: false });
  };

  openBtn = () => {
    this.setState({ isOpened: true });
  };

  render() {
    const { isOpened } = this.state;
    return (
      <>
        <div className={isOpened ? styles['overlay'] : 'w-2/4'}>
          <div className={isOpened ? 'm-6 mt-10' : 'hidden'}>
            <h1 className="text-[#606981] font-bold font-Lato-normal text-base">
              Action
            </h1>
            <div className="bg-[#F5F8FC] p-5 mt-10">
              <span className="flex flex-row justify-between">
                <p className="font-Lato-normal font-bold text-[#6C6C6C] mb-5">
                  <span className="mr-3 bg-blue-600 text-white px-2 py-0.5 rounded-3xl font-normal">
                    1
                  </span>
                  Internal marks
                </p>
                <a
                  href="javascript:void(0)"
                  className={
                    isOpened
                      ? 'flex flex-row justify-center items-center bg-[#456BF1] rounded-3xl w-6 h-6 p-1'
                      : 'hidden'
                  }
                  onClick={this.closeBtn}
                >
                  <Image
                    src="/homepage/close.svg"
                    alt="close"
                    width={20}
                    height={10}
                  />
                </a>
              </span>
              <div className="flex flex-col md:flex-row text-[#8F949F] font-['Merriweather-Sans'] text-base font-semibold">
                <span className="flex flex-col md:w-2/5 mb-5">
                  <label className="mb-3"> Send</label>
                  <Select options={sendOptions} />
                </span>
                <span className="flex flex-col md:w-2/5 md:ml-6">
                  <label className="mb-3">To Whom?</label>
                  <Select options={toOptions} />
                </span>
              </div>
              <div className="mt-10 flex flex-col md:flex-row text-[#8F949F] font-['Merriweather-Sans'] text-base font-semibold">
                <span className="flex flex-col md:w-2/5 mb-5">
                  <label className="mb-3"> Default message</label>
                  <textarea
                    rows={2}
                    className="border-0 font-['Merriweather-Sans'] text-sm font-normal text-[#606981]"
                  >
                    Student Roll Num Xxxxxxxxx is Absent For Today
                  </textarea>
                </span>
                <span className="flex flex-col md:w-2/5 md:ml-6">
                  <label className="mb-3">Custom message</label>
                  <textarea rows={2} className="border-0"></textarea>
                </span>
              </div>
            </div>
          </div>
          <button
            className={
              isOpened
                ? `font-Lato-normal self-end text-white bg-[#456BF1] rounded-2xl text-sm font-bold px-14 py-1.5 mr-5 mt-4`
                : 'hidden'
            }
            type="button"
          >
            Send
          </button>
        </div>
        <div className="w-full mt-5">
          <div className="flex flex-row justify-between flex-wrap text-[#636363] bg-[#F8F8F8] mb-5 p-5">
            <span className="w-2/5 md:w-1/5 mt-1 mr-1 flex flex-col">
              <label className="mb-2 text-[#606981] font-Lato-normal text-sm">
                Label 1
              </label>
              <Select options={studentOptions} />
            </span>
            <span className="w-2/5 md:w-1/5 mt-1 mr-1 flex flex-col">
              <label className="mb-2 text-[#606981] font-Lato-normal text-sm">
                Label 2
              </label>
              <Select options={branchOptions} />
            </span>
            <span className="w-2/5 md:w-1/5 mt-1 mr-1 flex flex-col">
              <label className="mb-2 text-[#606981] font-Lato-normal text-sm">
                Label 3
              </label>
              <Select options={examTypeOptions} />
            </span>
            <span className="w-2/5 md:w-1/5 mt-1 mr-1 flex flex-col">
              <label className="mb-2 text-[#606981] font-Lato-normal text-sm">
                Label 4
              </label>
              <Select options={percentageOptions} />
            </span>
          </div>
          <div className="px-5">
            <h1 className="font-['Merriweather-Sans'] font-normal text-xl text-[#636363]">
              {`Students with < 60% attendance`}
            </h1>
            <div className="border-2 border-solid border-[#B8C4E7] rounded-lg mt-5 p-4">
              <div className="flex flex-row justify-between items-center">
                <span className="hidden md:flex flex-row justify-between items-center w-1/12">
                  <input type="checkbox" />
                  <Image
                    src="/homepage/reload.svg"
                    alt="reload"
                    width={16}
                    height={10}
                  />
                  <Image
                    src="/homepage/dots.svg"
                    alt="dots"
                    width={4}
                    height={4}
                  />
                </span>
                <span className="text-sm flex flex-row items-center bg-[#F4F9FF] py-1 px-4 rounded-2xl text-[#456BF1]">
                  <button
                    type="button"
                    className="flex flex-row items-center mr-5 font-['Merriweather-Sans'] font-semibold"
                  >
                    <Image
                      className="mr-2"
                      src="/homepage/download.svg"
                      alt="download"
                      width={18}
                      height={10}
                    />
                    Download
                  </button>
                  <Image
                    className="mr-5"
                    src="/homepage/line.svg"
                    alt="line"
                    width={1}
                    height={1}
                  />
                  <button
                    onClick={this.openBtn}
                    type="button"
                    className="flex flex-row items-center font-['Merriweather-Sans'] font-semibold"
                  >
                    <Image
                      className="mr-2"
                      src="/homepage/bell.svg"
                      alt="bell"
                      width={16}
                      height={10}
                    />
                    Send Message
                  </button>
                </span>
              </div>

              <div className="font-Lato-normal font-bold text-base flex flex-row justify-between text-[#8F949F] mt-10 mb-5">
                <p className="w-1/6 text-xs md:text-base flex flex-row justify-start">
                  Student ID
                </p>
                <p className="w-1/6 text-xs md:text-base flex flex-row justify-start ml-2">
                  Name
                </p>
                <p className="w-1/6 text-xs md:text-base flex flex-row justify-start">
                  Course
                </p>
                <p className="w-1/6 text-xs md:text-base hidden md:flex flex-row justify-center">
                  Contact Info
                </p>
                <p className="w-1/6 text-xs md:text-base flex flex-row justify-center">
                  Attendance %
                </p>
                <p className="w-1/6 text-xs md:text-base flex hidden md:flex flex-row justify-center">
                  Academic grade
                </p>
              </div>
              <ul className="list-none mb-1">
                {studentInfo.map((item) => (
                  <StudentListItems key={item.id} eachItem={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StudentInfo;
