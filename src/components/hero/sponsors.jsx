import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";

const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsor
          <img src="/images/logo3.webp" alt="" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/hebesec.webp" alt="" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div>
        <Faqs />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
