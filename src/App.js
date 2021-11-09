
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
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/DisplayScan">
            <DisplayScan />
          </Route>
          <Route path="/product/:id" component={DisplayCode} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
