import React from 'react'

import { ChartComponent ,SplineAreaSeries , SeriesCollectionDirective , SeriesDirective , Inject , DateTime , Legend , Tooltip } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries , areaPrimaryXAxis , areaPrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

import { Header } from '../../components'

const Area = () => {

  const { windowWidth,iniwindowWidth, activeMenu,currentMode } = useStateContext();

  return (

    <div className=' m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ' style={currentMode==='Light'?{}:{opacity :  `0.90 `}}> 
     { activeMenu ? (<> 

    <Header category='Area' title='Inflation Rate In Percentage' />

    <div className='w-full'>

   <ChartComponent id='area-chart'           width={iniwindowWidth}  height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{border: {width:0}}} tooltip={{enable: true}} style={currentMode==='Light'?{}:{opacity :  `0.90 `}} >

      <Inject services={[ SplineAreaSeries,DateTime , Legend ]} />

      <SeriesCollectionDirective>

        {areaCustomSeries.map((item , index) => (<SeriesDirective key={index} {...item} />))}

      </SeriesCollectionDirective>

   </ChartComponent>
   </div>
   </>) : (<> 
    <Header category='Area' title='Inflation Rate In Percentage' />

    <div className='w-full'>

   <ChartComponent id='area-chart'           width={windowWidth >= 914  ?'130%' :'100%' }  height='420px' primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{border: {width:0}}} tooltip={{enable: true}} style={currentMode==='Light'?{}:{opacity :  `0.90 `}} >

      <Inject services={[ SplineAreaSeries,DateTime , Legend ]} />

      <SeriesCollectionDirective>

        {areaCustomSeries.map((item , index) => (<SeriesDirective key={index} {...item} />))}

      </SeriesCollectionDirective>

   </ChartComponent>
   </div>

   </>) }

</div>
  )
}

export default Area