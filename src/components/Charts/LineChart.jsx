import React from 'react'

import { ChartComponent ,LineSeries , SeriesCollectionDirective , SeriesDirective , Inject , DateTime , Legend , Tooltip } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = ({width}) => {

  const {currentMode} = useStateContext();

  return (
   <ChartComponent id='line-chart' width={width} height='420px' primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{border: {width:0}}} tooltip={{enable: true}} style={currentMode==='Light'?{}:{opacity :  `0.90 ` , borderRadius: `1%`}} >

      <Inject services={[LineSeries , DateTime , Legend , Tooltip]} />

      <SeriesCollectionDirective>

        {lineCustomSeries.map((item , index) => (<SeriesDirective key={index} {...item} />))}

      </SeriesCollectionDirective>

   </ChartComponent>
  )
}

export default LineChart