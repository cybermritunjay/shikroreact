import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { $,jQuery } from 'jquery';
import "./App.css";
import "./assets/TIIcon.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Authrizedistributer from "./components/Authrizedistributer";
import About from "./components/About";
import Contact from "./components/Contact";
import Tcertificate from "./components/Tcertificate";

class App extends Component {
  componentDidMount(){
    window.addEventListener('scroll', function(){
      var scrollTop = window.scrollY + 1;
      if (scrollTop > 50) {
        document.getElementById("mainMenu").classList.add("menu_fixed", "animated", "fadeInDown");
      } else {
        document.getElementById("mainMenu").classList.remove("menu_fixed", "animated", "fadeInDown");
      }
    })
    
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/authrizedistributer">
            <Authrizedistributer />
          </Route>
          <Route exact path="/certificate">
            <Tcertificate />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </div>
    );
  }
}

export default App;