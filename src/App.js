import React from "react";
// import Navbar from "./componentContext/Navbar";
// import Booklist from "./componentContext/BookList";
// import ThemeContextProvider from "./context/ThemeContext";
// import ThemeToggle from "./componentContext/ThemeToggle";
// import AuthContextProvider from "./context/AuthContext";
import Home from "./View/Home";
import Work from "./View/Work";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/works" component={Work} />
      </Switch>
    </div>
  );
}

export default App;
