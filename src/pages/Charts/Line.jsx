import React from 'react'

import { Header , LineChart  } from '../../components'

import { useStateContext } from '../../contexts/ContextProvider'


const Line = () => {

  const { windowWidth,iniwindowWidth, activeMenu,currentMode ,currentColor } = useStateContext();


  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl ' style={currentMode==='Light'?{}:{opacity :  `0.90 `}}> 
    
      <Header category='Chart' title='Inflation Rate' />

      <div className='w-full'>

      { activeMenu ? <LineChart width={iniwindowWidth}/>:<LineChart width={windowWidth >= 914  ?'120%' :'100%' }/>} 

      </div>

    </div>
  )
}

export default Line