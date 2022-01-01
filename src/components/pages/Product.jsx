import React from 'react'
import { Button } from "../../components/elements/Button";

const Product = () => {
  return (
    <>
    <div className="container-fluid p-0 m-0">
    <section className="heroSection productHero">
{/*       
      <video autoPlay loop muted>
        <source src={require("./World.mp4")} type="video/mp4" />
      </video> */}

      <div className="overlay">
        <p className="mainHeading">welcome to Github Repository</p>
        <p className="subHeading">what are you waiting for?</p>
        <div className="buttonContainer">
          <Button btnStyle="btnOutlined">Get Started</Button>
          <Button btnStyle="btnPrimary">Watch Trailer</Button>
        </div>
      </div>
    </section>
  </div>
  </>
  )
}

export default Product
