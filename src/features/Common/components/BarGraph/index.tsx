import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting');
import Image from 'next/image';

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'PERIOD WISE ATTENDANCE BREAKDOWN ANALYSIS',
    align: 'left',
    style: {
      color: '#606981',
      fontSize: '14px',
      fontWeight: '900',
    },
  },

  xAxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
    labels: {
      overflow: 'justify',
      formatter: function () {
        return this.value + '%';
      },
    },
  },
  tooltip: {
    valueSuffix: '%',
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
    series: {
      borderRadius: 4,
    },
  },

  legend: {
    y: 20,
    align: 'right',
    verticalAlign: 'bottom',
    layout: 'horizontal',
    symbolRadius: 0,
    itemStyle: {
      color: '#8F949F',
      fontWeight: 'normal',
    },
  },

  credits: {
    enabled: false,
  },
  series: [
    {
      data: [19, 32, 43, 21, 61, 31],
      type: 'column',
      name: '1st Sem',
      color: '#456BF1',
    },
    {
      data: [10, 23, 53, 28, 40, 10],
      type: 'column',
      name: '3rd Sem',
      color: '#9FB2F6',
    },
    {
      data: [11, 22, 43, 62, 13, 21],
      type: 'column',
      name: '5th Sem',
      color: '#D9E0FF',
    },
    {
      data: [10, 23, 53, 28, 40, 10],
      type: 'column',
      name: '7th Sem',
      color: '#B9B8FF',
    },
    {
      data: [11, 22, 43, 62, 13, 21],
      type: 'column',
      name: '2nd Sem',
      color: '#FDD3D3',
    },
    {
      data: [19, 32, 43, 21, 61, 31],
      type: 'column',
      name: '4th Sem',
      color: '#8E82FF',
    },
    {
      data: [11, 22, 43, 62, 13, 21],
      type: 'column',
      name: '6th Sem',
      color: '#D881C3',
    },
  ],
};

const BarGraph = (props: HighchartsReact.Props) => {
  return (
    <div className="w-full m-10 mt-10 lg:ml-20 flex flex-row bg-[#ffffff] drop-shadow-md">
      <div className="w-screen">
        <HighchartsReact highcharts={Highcharts} options={options} {...props} />
        <a className="flex flex-row text-blue-600 font-medium cursor-pointer mb-4 ml-10 underline">
          See Trends
        </a>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center w-4/12 md:w-6/12">
        <span className="flex">
          <select className="text-blue-600 border-none lg:mr-2 text-xs lg:text-sm">
            <option>Daily</option>
            <option>Weekly</option>
          </select>
          <select className="text-blue-600 border-none text-sm">
            <option>ECE</option>
            <option>CSE</option>
          </select>
        </span>
        <h1 className="font-Lato-normal text-[#37464F] font-black lg:text-3xl mt-5">
          325
        </h1>
        <p className="font-Lato-normal text-xs md:text-sm mt-2 text-center lg:font-bold text-xs lg:text-base text-[#606981]">
          LATE COMMERS
        </p>

        <h1 className="font-Lato-normal font-black lg:text-3xl text-[#37464F] mt-10">
          10
        </h1>
        <p className="font-Lato-normal text-xs md:text-sm mt-2 text-center lg:font-bold text-xs lg:text-base text-[#606981]">
          STUDENTS ARE <br /> CONTINUOUSLY LATE <br />
          SINCE PAST 1 WEEK
        </p>
        <a className="flex flex-row items-center text-blue-600 lg:font-bold cursor-pointer mt-3">
          View List
          <span>
            <Image
              src="/homepage/arrow.svg"
              alt="arrow"
              height={30}
              width={20}
              className="ml-2"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default BarGraph;
