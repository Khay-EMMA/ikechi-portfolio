import React from "react";
import Navbar from "./componentContext/Navbar";
import Booklist from "./componentContext/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./componentContext/ThemeToggle";
//import Home from "./View/Home";
//import Work from "./View/Work"
//import { Switch, Route } from "react-router-dom";
//import RightNav from "./View/RightNav";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
