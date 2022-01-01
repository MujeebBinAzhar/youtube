import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [mail, setMail] = useState("");

  const Display = (event) => {
    event.preventDefault();
    alert("form submitted ");
    setMail("");
  };

  const inputEvent = (event) => {
    setMail(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="container-fluid py-5 m-0 footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto d-flex flex-column align-items-center">
            <p className="footerTxt">
              Subscribe to join the adventure newsletter to receive our best
              vacation deals
            </p>

            <form action="" onSubmit={Display}>
              <input
                type="email"
                className="form-control myField"
                placeholder="xyz@gmail.com"
                name="fname"
                onChange={inputEvent}
                value={mail}
              />

              <button className="customBtn  mt-3" type="submit">
                Click Me
              </button>
            </form>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-6 col-md-3  footerSection">
            <h5 className="footerHeading">About Us</h5>
            <ul>
              <li>
                <NavLink to="/error">How it Works</NavLink>
              </li>

              <li>
                <NavLink to="/error">Testimonials</NavLink>
              </li>

              <li>
                <NavLink to="/error">Careers</NavLink>
              </li>

              <li>
                <NavLink to="/error">Investors</NavLink>
              </li>

              <li>
                <NavLink to="/error">Terms of Service</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3  footerSection">
            <h5 className="footerHeading">Contact Us</h5>
            <ul>
              <li>
                <NavLink to="/error">Contact</NavLink>
              </li>

              <li>
                <NavLink to="/error">Support</NavLink>
              </li>

              <li>
                <NavLink to="/error">Destinations</NavLink>
              </li>

              <li>
                <NavLink to="/error">Sponserships</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3  footerSection">
            <h5 className="footerHeading">Videos</h5>
            <ul>
              <li>
                <NavLink to="/error">Submit Video</NavLink>
              </li>

              <li>
                <NavLink to="/error">Ambassadors</NavLink>
              </li>

              <li>
                <NavLink to="/error">Agency</NavLink>
              </li>

              <li>
                <NavLink to="/error">Influencdr</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3  footerSection">
            <h5 className="footerHeading">Media</h5>
            <ul>
              <li>
                <NavLink to="/error">Instagram</NavLink>
              </li>

              <li>
                <NavLink to="/error">Facebook</NavLink>
              </li>

              <li>
                <NavLink to="/error">Youtube</NavLink>
              </li>

              <li>
                <NavLink to="/error">Twitter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
