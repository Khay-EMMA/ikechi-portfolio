import React from "react";
import { ThemeContext } from "../context/ThemeContext";
class Booklist extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>The way of the kings</li>
                <li style={{ background: theme.ui }}>The name of the wind</li>
                <li style={{ background: theme.ui }}>The final empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default Booklist;
