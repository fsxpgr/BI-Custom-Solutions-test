import React, { useEffect, useRef } from 'react';
import {Chart} from '@antv/g2';

const LineChart = ({data, encode}) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if(!data.length){
      return
    }

    //@ts-ignore
    const chart = new Chart({ container: chartContainer.current })
      .options({
        type: 'line',
      })
      .data(data)
      .encode(encode);

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, encode]);

  return <div ref={chartContainer} />;
};


export default LineChart