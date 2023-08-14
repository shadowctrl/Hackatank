import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/logo3.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/sivasankari.jpeg"
              alt="Sivasankari - Assistant professor"
            />
            <h1 className="convener-name">Mrs. R Sivasankari</h1>
            <h1 className="convener-position">Assistant Professor</h1>
            <h1 className="convener-dep">Cyber Security</h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/nandhashree.jpeg"
              alt="Nandhashree - Assistant professor"
            />
            <h1 className="convener-name"> Mrs. K R Nandhashree</h1>
            <h1 className="convener-position">Assistant Professor</h1>
            <h1 className="convener-dep">Cyber Security</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
