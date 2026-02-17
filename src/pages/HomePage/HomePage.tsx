import { companies } from "../../assets/mocks/companies";
import HomePageStats from "../../components/HomePageStats/HomePageStats";
import Layout from "../../components/Layout/Layout";
import { Chart } from "../../components/Chart/Chart";

export function HomePage() {
  const dates = Array.from({ length: 365 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (364 - i));
    return d;
  });

  return (
    <Layout>
      <section className="section">
        <HomePageStats c={companies[0].stats}/>
        <Chart title={'Orders over time'} label={'Orders'} colors={['#FFEE56f0']} timeRange={dates} data={[6, 8, 10, 14, 19, 24, 29, 33, 38, 43, 48, 52, 55, 57, 61, 64, 68, 72, 77]}/>
        <Chart title={'Profit over time'} label={'Profit'} colors={['#A5C822f0']} timeRange={dates} data={[67, 96, 161, 241, 322, 402, 483, 563, 644, 724, 758, 814, 880, 927, 1032, 1091, 1147, 1198, 1264]}/>
      </section>
    </Layout>
  )
}


