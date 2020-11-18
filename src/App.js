import "./App.css";
import React from "react";
import Header from "./Header.js";
import Recomendation from "./Recomendation.js";
import Sidebar from "./Sidebar.js";
import Searchnow from "./Searchnow.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchterm">
            <div id="side_reco">
              <Sidebar />
              <Searchnow />
            </div>
          </Route>
          <Route path="/">
            <div id="side_reco">
              <Sidebar />
              <Recomendation />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
