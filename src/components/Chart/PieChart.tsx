import React, { useEffect, useRef } from 'react';
import {Chart} from '@antv/g2';

interface PieChartProps {
  data: Record<any, any>[]
  encode: Record<any, any>
}
const PieChart = ({data, encode}:PieChartProps) => {

  const chartContainer = useRef(null);

  useEffect(() => {
    if(!data.length){
      return
    }

    const sum = data.reduce((acc, it)=>acc+it.vaccinated,0)

    //@ts-ignore
    const chart = new Chart({container: chartContainer.current})

    //@ts-ignore
    chart.coordinate({ type: 'theta', innerRadius: 0.6 })
      .options({ width:500, height: 400})
      .interval()
      .transform({ type: 'stackY' })
      .data(data)
      .encode(encode)
      .style('stroke', 'white')
      .style('inset', 0.1)
      .style('radius', 10)
      .scale('color', {
        palette: 'spectral',
        //@ts-ignore
        offset: (t) => t * 0.8 + 0.1,
      })
      .label({ text: 'age', fontSize: 10, fontWeight: 'bold' })
      // .label({
      //   position: 'outside',
      //   text: 'vaccinated',
      // })
      .label({
        position: 'outside',
        //@ts-ignore
        text: (data) => `${(data.vaccinated/sum*100).toFixed(1)}%`,
      })
      .animate('enter', { type: 'waveIn' })
      .legend(false);

    chart.render()

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div ref={chartContainer} />;
};

export default PieChart