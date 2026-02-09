import { companies } from "../../assets/mocks/companies";
import HomePageStats from "../../components/HomePageStats/HomePageStats";
import Layout from "../../components/Layout/Layout";
import { LineChart } from '@mui/x-charts/LineChart';

export function HomePage() {
  const dates = Array.from({ length: 10 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (9 - i));
    return d;
  });

  return (
    <Layout>
      <HomePageStats c={companies[0].stats}/>
      <p className="title">Orders over time</p>
      <div className="chart">
        <LineChart
          style={{ marginLeft: -80}}
          colors={['#FFEE56df']}
          xAxis={[
            {
              data: dates,
              scaleType: 'time',
              valueFormatter: (date) => `${date.getDate().toString()}/${date.getMonth() + 1}/${date.getFullYear().toString()}`,
              min: dates[0],
              max: dates[dates.length - 1],
              tickNumber: dates.length,
            },

          ]}

          series={[
            {
              data: [43, 48, 52, 55, 57, 61, 64, 68, 72, 77],
              area: true,
              label: 'Orders',
              labelMarkType: 'circle',
            },
          ]}

          height={300}
        />
      </div>
      <p className="title">Profit over time</p>
      <div className="chart">
        <LineChart
          style={{ marginLeft: -80}}
          colors={['#A5C822df']}
          xAxis={[
            {
              tickLabelStyle: {backgroundColor: 'red'},
              data: dates,
              scaleType: 'time',
              valueFormatter: (date) => `${date.getDate().toString()}/${date.getMonth() + 1}/${date.getFullYear().toString()}`,
              min: dates[0],
              max: dates[dates.length - 1],
              tickNumber: dates.length
            },
          ]}
          series={[
            {
              data: [724, 758, 814, 880, 927, 1032, 1091, 1147, 1198, 1264],
              valueFormatter: (v) => `$${v}`,
              area: true,
              label: 'Profits',
              labelMarkType: 'circle',

            },
          ]}
          height={300}
        />
      </div>

    </Layout>
  )
}
