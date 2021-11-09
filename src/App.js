
import { React, useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import axios from "axios";
import DisplayScan from "./components/Scan/DisplayScan";
import DisplayCode from "./components/api/DisplayCode";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact"

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
      <Router>
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
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
