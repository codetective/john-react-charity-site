import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./bootstrap.min.css";
import "./App.css";
import "./bootstrap.bundle.min.js";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Board from './components/Board'
import FouroFour from './components/404'
import FounderBio from './components/FounderBio'
import History from './components/History'
import Statements from './components/Statements'
import ByeLaws from './components/ByeLaws'
import Education from './components/Education'
import Donate from './components/Donate'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/history">
            <History/>
          </Route>
          <Route exact path="/statements">
            <Statements/>
          </Route>
          <Route exact path="/board">
            <Board/>
          </Route>
          <Route exact path="/founderbio">
            <FounderBio/>
          </Route>
          <Route exact path="/bye-laws">
            <ByeLaws/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route exact path="/donate">
            <Donate/>
          </Route>
          <Route path="*" exact={true} component={FouroFour}/>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
