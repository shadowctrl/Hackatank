import React, { useEffect } from "react";
import "./judges.css";

const judges = () => {
  useEffect(() => {
    document.title = "Judge Panel | Hack a Tank";
  });
  return (
    <div className="parent-judges">
      <h1 className="judges-title">Judges Yet To Be Decided</h1>
    </div>
  );
};

export default judges;
