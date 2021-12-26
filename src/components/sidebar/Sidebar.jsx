import React,{useState} from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
 
const closeSideBar = ()=>{
 
 }
  return (
    <>
      <div className={`sideBarContainer ${props.class}`}>
         

        <div className="sideMenu">
         

          <NavLink className="sideNavlink" to="/about"   onClick={props.closeEvent}>
            About
          </NavLink>

          <NavLink
            className="sideNavlink"
            to="/services"
        
            onClick={props.closeEvent}
          >
            Services
          </NavLink>

          <NavLink
            className="sideNavlink"
            to="/products"
            onClick={props.closeEvent}
          >
            Products
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
