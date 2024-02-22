
import "./sidebar.css";
import { RiDashboard3Line } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OrdersTab from "../OrdersTab";



const orderMenuItems = [
  {
      id:1,
      displayText: "Pending",
      value: "Pending",
  },
  {
      id:2,
      displayText: "Accepted",
      value: "Accepted",
  },
  {
      id:3,
      displayText: "AWB Created",
      value: "AWB Created",
  },
  {
      id:4,
      displayText: "Redy to Ship",
      value: "Redy to Ship",
  },
  {
      id:5,
      displayText: "Shipped",
      value: "Shipped",
  },
  {
      id:6,
      displayText: "Completed",
      value: "Completed",
  },
  {
      id:7,
      displayText: "Cancelled",
      value: "Cancelled",
  },
]

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  
  return (
    <div className="d-flex">
      <div
        className="d-flex flex-column flex-shrink-0  bg-body-tertiary sidebar"
        style={{ width: "180px" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item "
            onClick={() => {
              setSelectedTab("Dashboard");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Dashboard" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <RiDashboard3Line className="me-2" />
              Dashboard
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Inventory");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Inventory" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              <IoPricetagOutline  className="me-2" />
              Inventory
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Orders");
            }}
          >
            <a href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Orders" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <CgMenuBoxed className="me-2" />
              Orders
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Shopping");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Shopping" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <MdOutlineLocalShipping className="me-2" />
              Shopping
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("Channel");
            }}
          >
            <a
              href={orderMenuItems.value}
              className={`nav-link text-black ${
                selectedTab === "Channel" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              <IoShareSocialOutline className="me-2" />
              Channel
            </a>
          </li>
        </ul>
      </div>

      {selectedTab === "Orders" ? (
        <div>
         <OrdersTab orderMenuItems={orderMenuItems}/>
        </div>
      ) : <h1>you didn't given any data</h1>}
    </div>
  );
};

export default Sidebar;





















/* import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

import "./index.css";

const iconMap = {
  AiOutlineDashboard,
  MdOutlineInventory2,
  CiViewTimeline,
  MdOutlineLocalShipping,
  IoShareSocialOutline,
};

const sideBarOption = [
  {
    id: 1,
    displayText: "Dashboard",
    displayIcon: "AiOutlineDashboard",
    value: "Dashboard",
  },
  {
    id: 2,
    displayText: "Inventory",
    displayIcon: "MdOutlineInventory2",
    value: "Inventory",
  },
  {
    id: 3,
    displayText: "Orders",
    displayIcon: "CiViewTimeline",
    value: "Orders",
  },
  {
    id: 4,
    displayText: "Shipping",
    displayIcon: "MdOutlineLocalShipping",
    value: "Shipping",
  },
  {
    id: 5,
    displayText: "Channel",
    displayIcon: "IoShareSocialOutline",
    value: "Channel",
  },
];

const Sidebar = () => {
  return (
    <ul className="sidebar-items">
      {sideBarOption.map((each) => {
        const IconComponent = iconMap[each.displayIcon];
        return (
          <li className="item" key={each.id}>
            <p>
              <span><IconComponent /></span> {each.displayText}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;*/