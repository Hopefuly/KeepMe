import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import KeepMe from "./KeepMe";
import Count from "./Count";
import NoMatch from "./NoMatch";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/KeepMe" component={KeepMe} />
          <Route path="/Count" component={Count} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
