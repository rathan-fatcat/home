import styles from './index.module.css';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Image from 'next/image';
require('highcharts/modules/exporting');

const options1: Highcharts.Options = {
  title: {
    margin: 0,
    text: 'STUDENTS - 5000 TOTAL',
    align: 'left',
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
    },
  },

  colors: ['#FCA551', '#8D77F3', '#F6416C'],

  legend: {
    floating: true,
    x: -30,
    y: -115,
    symbolRadius: 0,
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemMarginTop: 15,
    itemStyle: {
      fontSize: '10px',
      color: 'gray',
    },
  },

  credits: {
    enabled: false,
  },
  chart: {
    type: 'pie',
    backgroundColor: '',
  },

  plotOptions: {
    pie: {
      center: [50, 40],
      allowPointSelect: true,
      size: 85,
      cursor: 'pointer',
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },

  series: [
    {
      type: 'pie',
      name: 'Students',
      innerSize: '60%',
      data: [
        ['4000 - Male', 4000],
        ['500 - Female', 500],
        ['500 - Absent', 500],
      ],
    },
  ],
};

const options2: Highcharts.Options = {
  title: {
    margin: 0,
    text: 'TEACHERS - 60 TOTAL',
    align: 'left',
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },

  colors: ['#FCA551', '#8D77F3', '#F6416C'],

  legend: {
    floating: true,
    x: -30,
    y: -115,
    symbolRadius: 0,
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemMarginTop: 15,
    itemStyle: {
      fontSize: '10px',
      color: 'gray',
    },
  },

  credits: {
    enabled: false,
  },
  chart: {
    type: 'pie',
    backgroundColor: '',
  },

  plotOptions: {
    pie: {
      center: [50, 40],
      allowPointSelect: true,
      size: 85,
      cursor: 'pointer',
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },

  series: [
    {
      type: 'pie',
      name: 'Students',
      innerSize: '60%',
      data: [
        ['4000 - Male', 4000],
        ['500 - Female', 500],
        ['500 - Absent', 500],
      ],
    },
  ],
};

const options3: Highcharts.Options = {
  title: {
    margin: 0,
    text: 'OTHER STAFF - 450 TOTAL',
    align: 'left',
    style: {
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },

  colors: ['#FCA551', '#8D77F3', '#F6416C'],

  legend: {
    floating: true,
    x: -30,
    y: -115,
    symbolRadius: 0,
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemMarginTop: 15,
    itemStyle: {
      fontSize: '10px',
      color: 'gray',
    },
  },

  credits: {
    enabled: false,
  },
  chart: {
    type: 'pie',
    backgroundColor: '',
  },

  plotOptions: {
    pie: {
      center: [50, 40],
      allowPointSelect: true,
      size: 85,
      cursor: 'pointer',
      borderWidth: 0,
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },

  series: [
    {
      type: 'pie',
      name: 'Students',
      innerSize: '60%',
      data: [
        ['4000 - Male', 4000],
        ['500 - Female', 500],
        ['500 - Absent', 500],
      ],
    },
  ],
};

const PieChart = (props: HighchartsReact.Props) => {
  return (
    <div className={styles['pie-align']}>
      <div className="w-full px-1 py-2 mb-2 h-44 lg:h-40 rounded-xl md:w-72 bg-[#f6f5ff]">
        <HighchartsReact
          highcharts={Highcharts}
          options={options1}
          {...props}
        />
      </div>
      <div className="w-full px-1 py-2 mb-2 h-44 lg:h-40 rounded-xl md:w-72 bg-[#f1f8fe]">
        <HighchartsReact
          highcharts={Highcharts}
          options={options2}
          {...props}
        />
      </div>
      <div className="w-full px-1 py-2 mb-2 h-44 lg:h-40 rounded-xl md:w-72 bg-[#fff7ee]">
        <HighchartsReact
          highcharts={Highcharts}
          options={options3}
          {...props}
        />
      </div>
    </div>
  );
};

export default PieChart;
