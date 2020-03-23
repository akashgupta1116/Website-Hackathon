import React from 'react';
import './App.css';
import Home from './components/Home.js'
import About from './components/About.js'
import ReachUs from './components/ReachUs.js'
import Portfolio from './components/Portfolio.js'
import Team from './components/Team.js'
import News from './components/News.js'
import { HashRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/about"} exact component={About} />}
        <Route path={"/reach-us"} exact component={ReachUs} />}
        <Route path={"/portfolio"} exact component={Portfolio} />}
        <Route path={"/team"} exact component={Team} />}
        <Route path={"/news"} exact component={News} />}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
