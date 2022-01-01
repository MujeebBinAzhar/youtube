import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../elements/Button";
import Sidebar from "../sidebar/Sidebar";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
     setClick(false)
    }
  });
  const handleClick = () => setClick(!click);


  const closeSideBar = ()=>{
    setClick(false)
  }
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/"  activeclassname="active" onClick={closeSideBar}>
          <h1 className="m-0">Logo</h1>
        </NavLink>
        <div className="bars" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="navMenu">
          <NavLink className="navlink" to="/about" activeclassname="active">
            About
          </NavLink>

          <NavLink className="navlink" to="/services" activeclassname="active">
            Services
          </NavLink>

          <NavLink className="navlink" to="/products" activeclassname="active">
            Products
          </NavLink>
          <NavLink className="navlink" to="/error" activeclassname="active">
            Events
          </NavLink>
        </div>

        <div className="navBtn">
          <NavLink to='/signup' className='btnMobile'>
          {button && <Button btnStyle="btnOutlined" visit='/signup' >SIGN UP</Button>}
          </NavLink>
       
        </div>
      </nav>

      {click ? <Sidebar class="transition" closeEvent={closeSideBar} /> : <Sidebar closeEvent={closeSideBar}  />}
    </>
  );
};

export default Nav;
