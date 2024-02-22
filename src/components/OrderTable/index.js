import { CgEnter } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";
import { LuPrinter } from "react-icons/lu";
import { LuRefreshCw } from "react-icons/lu";

import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { TbArrowsMoveVertical } from "react-icons/tb";
import { AiFillFilter } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import "./index.css"



const orderDetails = [
    {
        orderNo : "#TKN20203754",
        channel: <IoBagCheck className="bag"/>,
        orderDate: "2022-05-04",
        city: "Lucknow",
        customerName: "Abhishek Dixit",
        orderValue: 0.00,
        status: "pending",
    },
    {
        orderNo : "#TKN20203753",
        channel: <IoBagCheck className="bag"/>,
        orderDate: "2022-05-04",
        city: "Lucknow",
        customerName: "Abhishek Dixit",
        orderValue: 0.00,
        status: "pending",
    },
    {
        orderNo : "#TKN20203752",
        channel: <IoBagCheck className="bag"/>,
        orderDate: "2022-05-04",
        city: "Lucknow",
        customerName: "Abhishek Dixit",
        orderValue: 0.00,
        status: "pending",
    },

]

const OrderTable = () =>{
    return(
        <div className="main-container">
            <div className="d-flex justify-content-between">
            <div className="first-container">
                <div className="three-op-container">
                    <CgEnter style={{ transform: "rotate(180deg)" }} />
                    <span>Import Orders</span>
                </div>

                <div className="three-op-container">
                    <AiOutlineSend />
                    <span>Accept</span>
                </div>
                <div className="three-op-container">
                    <LuPrinter />
                    <select className="select-tab">
                         <option value="1">Print</option>

                         <option value="2">Copy</option>
                         <option value="3">Share</option>
                    </select>
                </div>
            </div>
            <button type="button" className="btn btn-primary">
                <LuRefreshCw />
                Refresh
            </button>
            </div>
            
                <table>
                    <thead>
                        <tr>
                            <th scope="tabler"> </th>
                            <th scope="tabler"><input type="checkbox"/> </th>
                            <th scope="tabler"> Channel <TbArrowsMoveVertical />
          <AiFillFilter /></th>
                            <th scope="tabler">Order No <TbArrowsMoveVertical className="ms-5" />
          <GoSearch /></th>
                            <th scope="tabler">Order Date <TbArrowsMoveVertical className="ms-3" />
          <GoSearch /></th>
                            <th scope="tabler">City <TbArrowsMoveVertical className="ms-3" /></th>
                            <th scope="tabler">Customer Name <GoSearch className="ms-5"  /></th>
                            <th scope="tabler">Order Value <TbArrowsMoveVertical className="ms-3"  /></th>
                            <th scope="tabler">Status <TbArrowsMoveVertical className="ms-3"  /></th>
                            <th scope="tabler">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetails.map(each => (
                            <tr>
                                <th>+</th>
                                <th><input type="checkbox" /></th>
                                <th>{each.channel}</th>
                                <th className="orderno">{each.orderNo}</th>
                                <th>{each.orderDate}</th>
                                <th>{each.city}</th>
                                <th>{each.customerName}</th>
                                <th>{each.orderValue}</th>
                                <th><div className="status">{each.status}</div></th>
                                <th>
                                    <select>
                                        <option>Actions</option>
                                        <option>Other</option>
                                    </select>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="d-flex justify-content-end">
        <div className="box d-flex justify-content-center align-items-center">
          <FaLessThan />
        </div>
        <div className="box d-flex justify-content-center align-items-center">
          <span>1</span>
        </div>
        <div className="box d-flex justify-content-center align-items-center">
          <FaGreaterThan />
        </div>
        <select>
          <option value="2">20/pages</option>
        </select>
      </div>
            </div>
        
    )
}
export default OrderTable;


/* 

import { LiaFileImportSolid } from "react-icons/lia";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { MdLocalPrintshop } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
<div className="order-details">
<div className="tebal-header">
                    <ul className="header-button-items">
                        <li className="header-button">
                            <button><span><LiaFileImportSolid/></span>Import Oreders</button>
                        </li>
                        <li className="header-button">
                            <button><span><RiArrowRightDoubleFill/></span>Accept</button>
                        </li>
                        <li className="header-button">
                            <button><span><MdLocalPrintshop/></span>Print</button>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary">
                        <LuRefreshCw/>Refresh
                    </button>
                </div>
                </div>
*/