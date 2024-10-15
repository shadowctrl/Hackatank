import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  const developedBy = () => {
    window.open("https://shadowctrl.me", "_self");
    window.open("https://upwork.com/freelancers/shadowctrl", "_blank");
  };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2024-2025 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed & Maintained by <p onClick={developedBy}>shadowctrl</p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
