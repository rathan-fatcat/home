import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting');
import Image from 'next/image';

const options: Highcharts.Options = {
  chart: {
    type: 'column',
  },

  title: {
    text: 'ATTENDANCE BREAKDOWN ANALYSIS',
    align: 'left',
    style: {
      color: '#606981',
      fontSize: '14px',
      fontWeight: '900',
    },
  },

  xAxis: {
    categories: ['ECE', 'EEE'],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: '',
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
    column: {
      stacking: 'normal',
    },
    series: {
      pointWidth: 20,
      borderWidth: 0,
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
      fontFamily: 'Merriweather Sans',
      fontSize: '14px',
    },
  },

  credits: {
    enabled: false,
  },
  series: [
    {
      name: '<45%',
      type: 'column',
      data: [25, 14],
      stack: '3',
      color: '#855CF8',
    },
    {
      name: '<65%',
      type: 'column',
      data: [18, 15],
      stack: '3',
      color: '#B6DAF9',
    },
    {
      name: '<75%',
      data: [23, 22],
      type: 'column',
      stack: '3',
      color: '#F86E7F',
    },
    {
      name: '>75%',
      type: 'column',
      data: [27, 10],
      stack: '3',
      color: '#FFA54F',
    },
  ],
};

const IndividualStackedChart = (props: HighchartsReact.Props) => {
  return (
    <div className="w-full mt-10 lg:ml-52 flex flex-row justify-between items-start bg-[#ffffff] drop-shadow-md mb-5 ml-2">
      <div className="w-full lg:w-6/12 pb-5">
        <HighchartsReact highcharts={Highcharts} options={options} {...props} />
        <a className="flex flex-row text-blue-600 font-medium cursor-pointer mb-4 ml-10 underline">
          See Trends
        </a>
      </div>
      <div className="hidden md:flex flex-col justify-center items-start ml-auto md:w-6/12">
        <span className="flex">
          <select className="text-blue-600 border-none text-xs lg:text-sm">
            <option>2021-2022</option>
            <option>2022-2023</option>
          </select>
          <select className="text-blue-600 border-none text-sm">
            <option>ECE</option>
            <option>CSE</option>
          </select>
          <select className="text-blue-600 border-none text-xs lg:text-sm">
            <option>All Semester</option>
            <option>1st sem</option>
          </select>
          <select className="text-blue-600 border-none text-xs lg:text-sm">
            <option>{`<65%`}</option>
            <option>70%</option>
          </select>
        </span>

        <span className="self-center mr-30 lg:mr-36 mt-20 lg:mt-10">
          <h1 className="font-Lato-Regular text-[#37464F] text-center font-bold lg:text-4xl mt-5">
            3000
          </h1>
          <p className="font-['Lato-Regular'] text-center text-xs md:text-sm mt-2 lg:font-bold text-xs lg:text-base text-[#606981]">
            {`TOTAL STUDENTS <65%`}
          </p>

          <h1 className="font-Lato-Regular text-center font-bold lg:text-4xl text-[#37464F] mt-10">
            100%
          </h1>
          <p className="font-['Lato-Regular'] text-center text-xs md:text-sm mt-2 text-center lg:font-bold text-xs lg:text-base text-[#606981]">
            {`TOTAL PERCENTAGE <65%`}
          </p>
          <a className="flex flex-row justify-center items-center text-center text-blue-600 lg:font-bold cursor-pointer mt-3">
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
        </span>
      </div>
    </div>
  );
};

export default IndividualStackedChart;
