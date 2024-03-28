import React from 'react'

import { GridComponent  , ColumnsDirective , ColumnDirective , Page , Selection , Inject , Edit , Toolbar , Sort , Filter} from '@syncfusion/ej2-react-grids/src'

import { customersData , customersGrid } from '../data/dummy'

import { Header } from '../components'

import { useStateContext } from '../contexts/ContextProvider'


const Customers = () => {

  const {currentColor,currentMode}=useStateContext();


  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl' style={currentMode==='Light'?{}:{opacity :  `0.90 `}}>
    
      <Header category = "Page" title = "Customers" />

      <GridComponent  dataSource={customersData} allowPaging  allowSorting  toolbar={['Delete']} editSettings={{allowDeleting : true , allowEditing: true}} width='auto'>

        <ColumnsDirective>

          {customersGrid.map((item , index) => (<ColumnDirective key={index} {...item} />))}

        </ColumnsDirective>
          
          <Inject services={[Page  , Toolbar , Selection , Edit , Sort , Filter ]} />
      
      </GridComponent>

    </div>
  )
}

export default Customers