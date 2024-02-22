import {RxCross1} from 'react-icons/rx'
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from 'react';
import OrderTable from '../OrderTable';
import './index.css'
const OrdersTab=({orderMenuItems})=>{

  const [selectedItem, setSelectedItem] = useState("Pending");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (

    <>
      <div>
        
        <div className="orders-settings">
          <div className="orders-heading-container">
            Orders
            <span className="m-1"><RxCross1 /></span>
          </div>
          <IoSettingsOutline className="me-3 mt-1" />
        </div>
        <div className='options-container'>
          <ul className='options-ul'>
            {orderMenuItems.map((item) => (
              <li  key={item.id} onClick={()=> handleItemClick(item)} 
                style={{
                cursor: 'pointer',
                color: selectedItem && selectedItem.id === item.id ? 'rgb(46, 46, 243)' : 'black',
                      }}
                className={selectedItem && selectedItem.id === item.id ? 'bottom-border': 'option'}
               >
                  <p>{item.displayText}</p>
              </li>
                    ))}
          </ul>
        </div>
        {selectedItem.id === 1 ? <OrderTable/> : <center className='no-data'>No Data Of {selectedItem.displayText}</center>}
      </div>
</>

    
    
  );

  
}
export default OrdersTab





  
