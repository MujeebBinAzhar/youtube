import React from "react";
import { NavLink, Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
    <div  className={`${props.class} pb-3`}>
      <div className="card minHeight">
        <Link to={{ 
          pathname:'/about',
          state: {
            name: 'mujeeb'
          }
         }}>
        <div className="cardHeading">
          <div className="Image">
          <img src={props.image}   alt="Image" />
          </div>
         
          <div className="label">
            <p>{props.label}</p>
          </div>
        </div>
        </Link>
        <div className="card-body">
          <h5 className="cardTitle">{props.heading}</h5>
          <p className="text-justify">{props.para}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;
