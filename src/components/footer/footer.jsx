import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2023 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed by{" "}
          <a href="https://upwork.com/freelancers/shadowctrl" target="_blank">
            shadowctrl
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
