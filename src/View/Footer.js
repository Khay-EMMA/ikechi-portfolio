import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footercontainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="161"
          height="26"
          viewBox="0 0 161 26"
        >
          <text
            id="Designed_by_Ikechi"
            data-name="Designed by Ikechi"
            transform="translate(0 21)"
            fill="rgba(233,233,233,0.58)"
            font-size="15"
            font-family="Roboto-Light, Roboto"
            font-weight="300"
            letter-spacing="-0.009em"
            opacity="0.55"
          >
            <tspan x="0" y="0">
              Designed by
            </tspan>
            <tspan y="0" fill="rgba(233,233,233,0.5)">
              {" "}
            </tspan>
            <tspan y="0" fill="rgba(233,233,233,0.85)">
              Ikechi
            </tspan>
          </text>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          height="26"
          viewBox="0 0 169 26"
        >
          <text
            id="Copyright_2020"
            data-name="Copyright         2020"
            transform="translate(169 21)"
            fill="rgba(233,233,233,0.58)"
            font-size="15"
            font-family="Roboto-Light, Roboto"
            font-weight="300"
            letter-spacing="-0.009em"
            opacity="0.55"
          >
            <tspan x="-168.808" y="0">
              Copyright &copy;
            </tspan>
            <tspan y="0" fill="rgba(233,233,233,0.85)">
              2020
            </tspan>
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="204"
          height="26"
          viewBox="0 0 204 26"
        >
          <text
            id="Developed_by_Onu_Uche"
            data-name="Developed by Onu Uche"
            transform="translate(204 21)"
            fill="rgba(233,233,233,0.58)"
            font-size="15"
            font-family="Roboto-Light, Roboto"
            font-weight="300"
            letter-spacing="-0.009em"
            opacity="0.55"
          >
            <tspan x="-203.304" y="0">
              Developed by{" "}
            </tspan>
            <tspan y="0" fill="rgba(233,233,233,0.85)">
              Onu Uche ❤❤
            </tspan>
          </text>
        </svg>
      </div>
    );
  }
}
export default Footer;
