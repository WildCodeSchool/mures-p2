
import { React, useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import ProductScan from "./components/ProductScan/ProductScan";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Resultproduct from "./components/api/Resultproduct";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [product, setProduct] = useState("");
  const initialState = "";
  const getOpenFoodFact = async () => {
    // Send the request
    await axios
      .get(`https://fr.openfoodfacts.org/api/v2/product/3274080001005`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.product);
      });
  };



  return (
    <div className="App">
      <Header />
      <Router>
<<<<<<< HEAD
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/DisplayScan">
              <DisplayScan />
            </Route>
            <Route path="/DisplayCode">
              <DisplayCode product={product} />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Resultproduct">
              <Resultproduct />
            </Route>
          </Switch>
=======

        <div className="nav-btn">
          <button className="buttonmenu">
            <Link to="/">Home</Link>
          </button>
          <button className="buttonmenu">
            <Link to="/ProductScan">Je scanne</Link>
          </button>

        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ProductScan">
            <ProductScan product={product} setProduct={setProduct}/>
          </Route>
        </Switch>

>>>>>>> e33f8e3cfb34f99621ad8d22c2f13890073002ff
      </Router>
      <Footer />
    </div>
  );
}

export default App;
