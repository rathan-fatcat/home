import Image from 'next/image';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting');

const options: Highcharts.Options = {
  chart: {
    type: 'spline',
    height: 320,
  },
  title: {
    text: 'STUDENT ATTENDANCE',
    margin: 50,
    align: 'left',
    style: {
      fontWeight: '900',
      color: '#606981',
      fontFamily: 'Lato-regular',
      fontSize: '14px',
    },
  },
  subtitle: {
    useHTML: true,
    text: 'Daily graph',
    align: 'left',
    style: {
      fontFamily: 'Lato-regular',
      transform: 'translate(0, 10px)',
      color: '#8F949F',
      fontSize: '14px',
      display: 'flex',
    },
  },
  xAxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  yAxis: {
    title: {
      text: '',
    },
    labels: {
      formatter: function () {
        return this.value + '%';
      },
    },
  },

  credits: {
    enabled: false,
  },

  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      showInLegend: false,
      data: [0, 70, 60, 50, 80, 60, 60],
      type: 'spline',
    },
  ],
};

const DashboardCards = (props: HighchartsReact.Props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center ml-2">
      <div className="w-full lg:w-1/2 mr-3">
        <div className="flex flex-row justify-between pt-4 w-full md:ml-2 md:mr-4 lg:m-0">
          <div className="rounded-xl bg-[#F6F5FF] shadow-black p-2 lg:p-4 lg:pr-5 mr-1 lg:mr-0 w-1/2 lg:w-[20vw]">
            <h1 className="text-sm font-medium lg:font-bold text-[#606981]">
              STUDENTS
            </h1>
            <h1 className="mt-6 text-3xl lg:text-5xl font-semibold text-[#37464F] font-['Lato-regular']">
              4.2K
              <span className="ml-3 text-xs lg:text-sm text-[#8F949F] text-sm font-normal">
                Present of 5K
              </span>
            </h1>
            <p className="font-['Lato-regular'] text-[#27AE7A] flex flex-row items-center mt-1 text-xs lg:text-sm">
              <Image
                className="bg-[#BDEFB8] p-1 rounded-3xl mr-2"
                src="/homepage/arrowup.svg"
                width={20}
                height={20}
                alt="arrow"
              />
              6.75% Today
            </p>
          </div>
          <div className="rounded-xl bg-[#F1F8FE] shadow-black p-2 lg:p-4 lg:pr-5 mr-1 lg:mr-0 w-1/2 lg:w-[20vw]">
            <h1 className="text-sm font-medium lg:font-bold text-[#606981]">
              TEACHERS
            </h1>
            <h1 className="mt-6 text-3xl lg:text-5xl font-semibold text-[#37464F] font-['Lato-regular']">
              90
              <span className="ml-3 text-xs lg:text-[#8F949F] text-sm font-normal">
                Present of 120
              </span>
            </h1>
            <p className="font-['Lato-regular'] text-[#E35050] text-xs lg:text-sm flex flex-row items-center mt-1">
              <Image
                className="bg-[#FDD3D3] p-1 rounded-3xl mr-2"
                src="/homepage/arrowdown.svg"
                width={20}
                height={20}
                alt="arrow"
              />
              2.85% Today
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-4 w-full md:ml-2 md:mr-4 lg:m-0">
          <div className="rounded-xl bg-[#FFF7EE] shadow-black p-2 lg:p-4 lg:pr-5 mr-1 lg:mr-0 w-1/2 lg:w-[20vw]">
            <h1 className="text-sm font-medium lg:font-bold text-[#606981]">
              STAFF
            </h1>
            <h1 className="mt-6 text-3xl lg:text-5xl font-semibold text-[#37464F] font-['Lato-regular']">
              300
              <span className="ml-3 text-xs lg:text-[#8F949F] text-sm font-normal">
                Present of 450
              </span>
            </h1>
            <p className="font-['Lato-regular'] text-xs lg:text-sm text-[#E35050] flex flex-row items-center mt-1">
              <Image
                className="bg-[#FDD3D3] p-1 rounded-3xl mr-2"
                src="/homepage/arrowdown.svg"
                width={20}
                height={20}
                alt="arrow"
              />
              3.45% Today
            </p>
          </div>
          <div className="rounded-xl bg-[#FCEAF8] shadow-black p-2 lg:p-4 lg:pr-5 mr-1 lg:mr-0 w-1/2 lg:w-[20vw]">
            <h1 className="text-xs lg:text-sm font-medium lg:font-bold text-[#606981]">
              ATTENDANCE PERFORMANCE
            </h1>
            <span className="flex flex-row">
              <h1 className="mt-6 text-3xl lg:text-5xl font-semibold text-[#37464F] font-['Lato-regular']">
                245
              </h1>
              <p className="ml-3 text-[#8F949F] text-xs lg:text-sm font-normal self-end">
                {`Students have <65% attendance`}
              </p>
            </span>
            <span className="flex flex-row justify-between mt-1">
              <p className="font-['Lato-regular'] text-xs lg:text-sm text-[#37464F]">
                Total : <span className="text-[#27AE7A]">20%</span>
              </p>
              <p className="font-['Lato-regular'] text-xs lg:text-sm text-[#27AE7A] flex flex-row items-center">
                <Image
                  className="bg-[#BDEFB8] p-1 rounded-3xl mr-2"
                  src="/homepage/arrowup.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                6.75% Today
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 pt-2 shadow-sm">
        <HighchartsReact highcharts={Highcharts} options={options} {...props} />
      </div>
    </div>
  );
};

export default DashboardCards;
