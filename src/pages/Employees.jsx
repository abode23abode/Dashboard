import React from 'react'

import { GridComponent , ColumnDirective , ColumnsDirective  , Page , Search , Edit , Inject ,Toolbar } from '@syncfusion/ej2-react-grids'

import { employeesData, contextMenuItems , employeesGrid } from '../data/dummy'

import { Header } from '../components'

import { useStateContext } from '../contexts/ContextProvider'


const Employees = () => {

  const {currentColor,currentMode}=useStateContext();


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl' style={currentMode==='Light'?{}:{opacity :  `0.90 `}}>
    
      <Header category = "Page" title = "Employees" />

      <GridComponent  dataSource={employeesData} allowPaging  allowSorting  toolbar={['Search']} width='auto'>

        <ColumnsDirective>

          {employeesGrid.map((item , index) => (<ColumnDirective key={index} {...item} />))}

        </ColumnsDirective>
          
          <Inject services={[Page , Search , Toolbar]} />
      
      </GridComponent>

    </div>
  )
}

export default Employees