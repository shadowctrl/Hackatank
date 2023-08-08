import React from "react";
import "./error.css";

const Error = () => {
  return (
    <div className="parent-error">
      <h1 className="title-error">
        404
        <span aria-hidden="true">404</span>
        <span aria-hidden="true">404</span>
      </h1>

      <h1 className="title-error1 ">
        The Site requested not found
        <span aria-hidden="true">The Site requested not found</span>
        <span aria-hidden="true">The Site requested not found</span>
      </h1>
    </div>
  );
};

export default Error;
