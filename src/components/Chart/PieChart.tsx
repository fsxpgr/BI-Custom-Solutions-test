import React, { useEffect, useRef } from 'react';
import {Chart} from '@antv/g2';

const PieChart = ({data, encode}) => {

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
      .interval()
      .transform({ type: 'stackY' })
      .data(data)
      .encode(encode)
      .style('stroke', 'white')
      .style('inset', 0.1)
      .style('radius', 10)
      .scale('color', {
        palette: 'spectral',
        offset: (t) => t * 0.8 + 0.1,
      })
      .label({ text: 'age', fontSize: 10, fontWeight: 'bold' })
      // .label({
      //   position: 'outside',
      //   text: 'vaccinated',
      // })
      .label({
        position: 'outside',
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