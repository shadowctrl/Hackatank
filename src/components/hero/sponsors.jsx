import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "../faqs";

const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsor
          <img src="/images/logo3.png" alt="" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/hebesec.png" alt="" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://hebesec.com/" target="_blank">
                  {" "}
                  Hebesec Technologies{" "}
                  <OpenInNewIcon
                    style={{
                      fontSize: "1.5vw",
                      color: " #000000",
                    }}
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
        <Faqs />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
