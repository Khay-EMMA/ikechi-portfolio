import React from "react";
import "./RightNav.css";

class RightNav extends React.Component {
  render() {
    return (
      <div className="righttextcontainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="23"
          viewBox="0 0 54 23"
        >
          <text
            id="ABOUT"
            transform="translate(27 18)"
            fill="#e9e9e9"
            font-size="17"
            font-family="Roboto-Regular, Roboto"
            letter-spacing="-0.031em"
            opacity="0.55"
          >
            <tspan x="-26.21" y="0">
              ABOUT
            </tspan>
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="23"
          viewBox="0 0 48 23"
        >
          <text
            id="WORK"
            transform="translate(24 18)"
            fill="#e9e9e9"
            font-size="17"
            font-family="Roboto-Regular, Roboto"
            letter-spacing="-0.031em"
            opacity="0.55"
          >
            <tspan x="-23.157" y="0">
              WORK
            </tspan>
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="23"
          viewBox="0 0 74 23"
        >
          <text
            id="CONTACT"
            transform="translate(37 18)"
            fill="#e9e9e9"
            font-size="17"
            font-family="Roboto-Regular, Roboto"
            letter-spacing="-0.031em"
            opacity="0.55"
          >
            <tspan x="-36.627" y="0">
              CONTACT
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}
export default RightNav;
