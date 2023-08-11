import React, { useEffect } from "react";
import "../../error.css";

const judges = () => {
  useEffect(() => {
    document.title = "Judge Panel | Hack a Tank";
  });
  return (
    <div className="parent-error">
      <h1 className="title-error ">
        Judges Yet To Be Decided
        <span aria-hidden="true">Judges Yet To Be Decided</span>
        <span aria-hidden="true">Judges Yet To Be Decided</span>
      </h1>
    </div>
  );
};

export default judges;
