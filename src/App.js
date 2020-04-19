import React from "react";
import "./App.css";
import Home from "./View/Home";
import Work from "./View/Work";
import { Switch, Route } from "react-router-dom";
//import RightNav from "./View/RightNav";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Work} />
      </Switch>
    </div>
  );
}

export default App;
