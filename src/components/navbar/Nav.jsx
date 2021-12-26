import React,{useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import './navBar.scss'

 

const Nav = () => {

  const [click, setClick] = useState(false);
  const [button,setButton]=useState(true);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav>
        <NavLink className='navlink' to="/" exact activeClassName='active'>
          <h1 className="m-0">Logo</h1>
        </NavLink>
        <div className='bars' onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className='navMenu'>

          <NavLink  className='navlink' to="/about" activeClassName='active' >
            About
          </NavLink>

          <NavLink className='navlink' to="/services" activeClassName='active' >
            Services
          </NavLink>

          <NavLink className='navlink' to="/products" activeClassName='active'>
            Products
          </NavLink>
        </div>

        <div className='navBtn'>
        {button && <Button btnStyle='btnOutlined'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Nav;
