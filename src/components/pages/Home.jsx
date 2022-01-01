import React, { useLocation } from "react"; 
import { Button } from "../../components/elements/Button";
import Card from "../elements/Card";
import { cardData } from "../../components/elements/CardData";
import Footer from "../../components/elements/Footer";
const Home = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <section className="heroSection">
          <video autoPlay loop muted>
            <source src={require("./World.mp4")} type="video/mp4" />
          </video>

          <div className="overlay">
            <p className="mainHeading">welcome to Github Repository</p>
            <p className="subHeading">what are you waiting for?</p>
            <div className="buttonContainer">
              <Button btnStyle="btnOutlined">Get Started</Button>
              <Button btnStyle="btnPrimary">Watch Trailer</Button>
            </div>
          </div>
        </section>

        <section className="cardSection">
          <h1 className="text-center mt-5">
            Check out these APIC destinations
          </h1>
          <div className="container">
            <div className="row mt-3 pb-5">
              <div className="col-10 mx-auto">
                <div className="row">
                  {cardData.map((currentEle) => {
                    return (
                      <Card
                        class={currentEle.class}
                        key={currentEle.id}
                        label={currentEle.label}
                        para={currentEle.para}
                        image={require(`../../assets/image/${currentEle.image}.jpg`)}
                        heading={currentEle.heading}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </section>

      </div>
      <Footer/>
    </>
  );
};

export default Home;
