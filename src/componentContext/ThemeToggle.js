import React from "react";
import { ThemeContext } from "../context/ThemeContext";
class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          return <button onClick={toggleTheme}>Toggle Theme</button>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeToggle;
