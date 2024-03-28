import React ,{memo}from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider'
import { BiBorderRadius } from 'react-icons/bi';


const Stacked = ({width , height }) => {

  const {currentMode} = useStateContext();
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{background  :  'white'}}
      style={currentMode==='Light'?{}:{opacity :  `0.90 `,borderRadius :  `5% `}}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      
      <SeriesCollectionDirective>
        
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      
      </SeriesCollectionDirective>

    </ChartComponent>
  )
}

export default Stacked