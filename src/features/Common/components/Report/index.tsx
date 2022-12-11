import Image from 'next/image';
import Select from 'react-select';

const regulationOptions = [
  { value: '2k22', label: '2k22' },
  { value: '2k21', label: '2k21' },
  { value: '2k20', label: '2k20' },
  { value: '2k19', label: '2k19' },
];

const educationOptions = [
  { value: 'UG', label: 'UG' },
  { value: 'PG', label: 'PG' },
];

const branchOptions = [
  { value: 'CSE', label: 'CSE' },
  { value: 'ECE', label: 'ECE' },
  { value: 'MEC', label: 'MEC' },
  { value: 'EEE', label: 'EEE' },
];

const semOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
];

const secOptions = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
];

const timeOptions = [
  { value: '1', label: '1 Month' },
  { value: '2', label: '2 Months' },
  { value: '3', label: '3 Months' },
  { value: '4', label: '4 Months' },
];

const attendanceOptions = [
  { value: '60', label: '<60%' },
  { value: '70', label: '70%' },
  { value: '80', label: '80%' },
  { value: '90', label: '90%' },
];

const subOptions = [
  { value: 'python', label: 'Python' },
  { value: 'maths', label: 'Maths' },
  { value: 'english', label: 'English' },
];

const Report = () => {
  return (
    <div className="ml-12 mt-8 w-full mb-5">
      <h1 className="font-Lato-normal font-bold text-xl text-[#606981]">
        Add filters for your report
      </h1>
      <div className="bg-[#F5F8FC] p:2 md:p-5 pb-10 md:mr-10 mt-4">
        <p className="font-Lato-normal font-bold text-[#6C6C6C]">
          <span className="mr-3 bg-blue-600 text-white px-2 py-0.5 rounded-3xl font-normal">
            1
          </span>
          Internal marks
        </p>
        <div className="font-['Merriweather-Sans'] font-normal text-base flex flex-row justify-between text-[#6C6C6C] mt-5">
          <span className="flex flex-col md:w-1/4">
            <label className="mb-3">Regulation</label>
            <Select options={regulationOptions} />
          </span>
          <span className="flex flex-col md:w-1/4">
            <label className="mb-3">Education</label>
            <Select options={educationOptions} />
          </span>
          <span className="flex flex-col md:w-1/4">
            <label className="mb-3">Branch</label>
            <Select options={branchOptions} />
          </span>
        </div>
        <div className="font-['Merriweather-Sans'] font-normal text-base flex flex-row justify-between text-[#6C6C6C] mt-10">
          <span className="flex flex-col w-1/5 md:w-1/5">
            <label className="mb-3">Semester</label>
            <Select options={semOptions} />
          </span>
          <span className="flex flex-col w-1/5 md:w-1/5">
            <label className="mb-3">Section</label>
            <Select options={secOptions} />
          </span>
          <span className="flex flex-col w-1/5 md:w-1/5">
            <label className="mb-3">Time</label>
            <Select options={timeOptions} />
          </span>
          <span className="flex flex-col w-2/5 md:w-1/5">
            <label className="mb-3">From</label>
            <input type="date" className="border-none h-10" />
          </span>
        </div>
        <div className="font-['Merriweather-Sans'] font-normal text-base flex flex-row justify-between text-[#6C6C6C] mt-10">
          <span className="flex flex-col w-28 md:w-1/5">
            <label className="mb-3">Attendance percentage</label>
            <Select options={attendanceOptions} />
          </span>

          <span className="flex flex-col w-28 md:w-1/5">
            <label className="mb-3">Subject</label>
            <Select options={subOptions} />
          </span>
          <span className="flex flex-col w-36 md:w-1/5">
            <label className="mb-3">To</label>
            <input type="date" className="border-none h-10" />
          </span>
        </div>
        <a className="flex mt-16 cursor-pointer text-[#456BF1] font-medium">
          <Image
            src="/homepage/filter.svg"
            height={8}
            width={20}
            alt="filter"
          />
          Add Another Filter
        </a>
      </div>
      <div className="flex flex-row justify-end mr-16 mt-5">
        <button
          className="text-white bg-[#456BF1] rounded-xl text-sm font-medium px-5 py-1.5 mt-5"
          type="button"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Report;
