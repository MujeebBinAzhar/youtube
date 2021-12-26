import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Error from "./components/Error";
import Nav from "./components/navbar/Nav";
import Product from "./components/Product";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Router>
        <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/products" element={<Product />} />
          <Route path="/services" element={ <Services />} />

          <Route path="/about" element={ <About />} />      
           

        </Routes>
      </Router>
    </div>
  );
}

export default App;
