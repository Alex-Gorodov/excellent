import { LineChart } from '@mui/x-charts/LineChart';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useState } from 'react';

interface ChartProps {
  title: string;
  label: string;
  timeRange: Date[];
  data: number[];
  colors: string[];
}

export function Chart({title, timeRange, data, label, colors}: ChartProps) {
  const isMobile = useWindowSize().width < 520;
  const [activeBtn, setActiveBtn] = useState<'1 week' | '2 weeks' | 'month' | 'year'>('1 week');

  const getDaysBack = () => {
    switch (activeBtn) {
      case '1 week': return 7;
      case '2 weeks': return 14;
      case 'month': return 30;
      case 'year': return 365;
      default: return 7;
    }
  };

  const fullData = timeRange.map((_, i) => {
    const diff = timeRange.length - data.length;
    if (i < diff) return data[0];
    return data[i - diff];
  });

  const daysToShow = getDaysBack();
  const endIndex = timeRange.length;
  const startIndex = Math.max(0, endIndex - daysToShow);

  const visibleDates = timeRange.slice(startIndex, endIndex);
  const visibleData = fullData.slice(startIndex, endIndex);

  return (
    <div className="chart">

        <div className="chart__top">
          <p className="chart__title title">{title}</p>
          <div className="chart___buttons">
            <button className={`chart__button ${activeBtn === '1 week' ? 'chart__button--active' : ''}`} onClick={() => setActiveBtn('1 week')}>1 week</button>
            <button className={`chart__button ${activeBtn === '2 weeks' ? 'chart__button--active' : ''}`} onClick={() => setActiveBtn('2 weeks')}>2 weeks</button>
            <button className={`chart__button ${activeBtn === 'month' ? 'chart__button--active' : ''}`} onClick={() => setActiveBtn('month')}>1 month</button>
            <button className={`chart__button ${activeBtn === 'year' ? 'chart__button--active' : ''}`} onClick={() => setActiveBtn('year')}>1 year</button>
          </div>
        </div>
        <div className="chart__graph">
          <LineChart
            colors={colors}
            xAxis={[
              {
                tickLabelStyle: {backgroundColor: 'red'},
                data: visibleDates,
                scaleType: 'time',
                valueFormatter: (date) => `${date.getDate().toString()}/${date.getMonth() + 1}${!isMobile ? '/' + date.getFullYear().toString() : ''}`,
                min: visibleDates[0],
                max: visibleDates[visibleDates.length - 1],
                tickNumber: visibleDates.length
              },
            ]}
            series={[
              {
                data: visibleData,
                valueFormatter: (v) => `$${v}`,
                area: true,
                label: label,
                labelMarkType: 'circle',

              },
            ]}
            height={300}
          />
        </div>
      </div>
  )
}
