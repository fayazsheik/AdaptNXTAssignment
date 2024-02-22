import "./header.css";
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { TfiBell } from "react-icons/tfi";
import { MdGTranslate } from "react-icons/md";
const Header = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 header-container">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="header-image">
          <img src="https://drive.google.com/file/d/1h-KiKopl4jom0Q9JVKCWUDsHJadj5YKu/view?usp=sharing" alt="img" />
        </span>
        <span className="header-menu-icon">
          <AiOutlineMenuFold className="header-icons" />
        </span>
      </a>
      <ul className="header-nav">
        <li className="m-3">
          <a href="#" className="nav-link active" aria-current="page">
            <MdOutlineDarkMode className="header-icons" />
          </a>
        </li>
        <li className="m-3">
          <a href="#" className="nav-link">
            <TfiBell className="header-icons" />
          </a>
        </li>
        <li className="m-3">
          <a href="#" className="nav-link">
            <MdGTranslate className="header-icons" />
          </a>
        </li>
        <li className="m-3">
          <a href="#" className="nav-link">
            <img src="https://drive.google.com/file/d/1h-KiKopl4jom0Q9JVKCWUDsHJadj5YKu/view?usp=sharing" alt="img"/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;




/*import { AiOutlineMenuFold } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLanguage } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import './index.css'

const Header = (props) =>{
    const {menuClicked} = props
    const toggleSidebar = () =>{
        menuClicked()
    }
    return(
        <nav className="header-nav">
            <div className="menu">
                <AiOutlineMenuFold className="menu-icon" onClick={toggleSidebar}/>
            </div>
            <div className="right-menu">
                <CiDark className="icon"/>
                <IoIosNotificationsOutline className="icon"/>
                <FaLanguage className="icon"/>
                <CgProfile className="icon"/>
            </div>
        </nav>
    )
}

export default Header;*/