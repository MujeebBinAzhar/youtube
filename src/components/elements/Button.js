import React from 'react';
import { Link } from 'react-router-dom';

const STYLES =['btnPrimary','btnSecondary','btnOutlined'];
const SIZES=['medium','small','large'];

export const Button=({
  children,
  type,
  onClick,
  btnStyle,
  btnSize
})=>{
  const checkBtnStyle=STYLES.includes(btnStyle)?btnStyle:STYLES[0];
  const checkBtnSize=SIZES.includes(btnSize)?btnSize:SIZES[0];

  return(
   <Link to="/signUp" className='btnMobile'>
    <button className={`button ${checkBtnSize} ${checkBtnStyle}`} onClick={onClick} type={type}>
      {children}
    </button>
    </Link>  
  )

}