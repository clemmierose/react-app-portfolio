//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta
            name="description"
            content="Clemmie Kwiatkowska Fullstack Developer"
          />
          <meta name="author" content="Clemmie Kwiatkowska" />
          <title>Clemmie Kwiatkowska - Portfolio </title>
        </Helmet>
        <div id="wrapper">
          <Navbar />
          <Home />
          <Projects />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
