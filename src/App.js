
import { React, useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import ProductScan from "./components/ProductScan/ProductScan";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Resultproduct from "./components/api/Resultproduct";
import DisplayCode from "./components/api/DisplayCode";

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

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ProductScan">
              <ProductScan product={product} setProduct={setProduct}/>
            </Route>
            <Route path="/ProductScan">
              <ProductScan product={product} />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Resultproduct">
              <Resultproduct />
            </Route>
            <Route path="/product/:id" component={DisplayCode} />
          </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
