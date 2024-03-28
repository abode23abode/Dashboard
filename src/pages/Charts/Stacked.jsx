import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = () => {

  const { windowWidth,iniwindowWidth, activeMenu,currentMode } = useStateContext();
return(
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl" style={currentMode==='Light'?{}:{opacity :  `0.90 `}}>
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
    
    { activeMenu ? <StackedChart width={iniwindowWidth}/>:<StackedChart width={windowWidth >= 914  ?'130%' :'100%' }/>} 
      
    </div>
  </div>
);
}
export default Stacked;