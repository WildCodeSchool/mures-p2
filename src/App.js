
import { React, useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import DisplayScan from "./components/Scan/DisplayScan";
import DisplayCode from "./components/api/DisplayCode";
import Home from "./components/home/Home";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [product, setProduct] = useState("");
  const getOpenFoodFact = async () => {
    // Send the request
    await axios
      .get(`https://fr.openfoodfacts.org/api/v2/product/3274080001005`)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.product);
      });
  };

  useEffect(() => {
    getOpenFoodFact();
    
  }, []);


  return (
    <div className="App">
      <Header />
      <Home />
      <Router>
        <div className="nav-btn">
          <button className="buttonmenu">
            <Link to="/">Home</Link>
          </button>
          <button className="buttonmenu">
            <Link to="/DisplayScan">Je scanne</Link>
          </button>
          <button>
            <Link to="/DisplayCode">Fiche Produit</Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/DisplayScan">
            <DisplayScan product={product} setProduct={setProduct}/>
          </Route>
          <Route path="/DisplayCode">
            <DisplayCode product={product} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
