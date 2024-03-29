import React, { useEffect, useRef } from 'react';
import {Chart} from '@antv/g2';

interface LineChartProps {
  data: Record<any, any>[]
  encode: Record<any, any>
}
const LineChart = ({data, encode}:LineChartProps) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if(!data.length){
      return
    }

    //@ts-ignore
    const chart = new Chart({ container: chartContainer.current })
      .options({
        type: 'line',
        width:500, height: 400,
      })
      .transform([{ type: 'sortX', by: 'x' }])
      .data(data)
      .encode(encode)
      .encode('color', 'rgb(55,154,140)')

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data, encode]);

  return <div ref={chartContainer} />;
};


export default LineChart