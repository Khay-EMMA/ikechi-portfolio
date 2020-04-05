import React from "react";
import "./App.css";
import Home from "./View/Home";
import Footer from "./View/Footer";
import { Switch, Route } from "react-router-dom";
//import RightNav from "./View/RightNav";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      {/* <RightNav /> */}
      <Footer />
    </div>
  );
}

export default App;
