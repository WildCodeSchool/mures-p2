
import { React, useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import ProductScan from "./components/ProductScan/ProductScan";
import Home from "./components/home/Home";
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

      </Router>
      <Footer />
    </div>
  );
}

export default App;
