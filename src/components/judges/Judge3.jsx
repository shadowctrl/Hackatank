import React from "react";

const Judge3 = ({ mem }) => {
  return (
    <div className="judge3">
      {/* 1 */}
      <div className="judge3_single">
        <div className="judge3_single-inner">
          <img src={mem[0].Img} alt="" />
          <div className="judge3_single-inner_name" style={mem[0].nameStyle}>
            <span>{mem[0].name}</span>
          </div>
        </div>
        <div className="judge3_single-det">
          <h2>{mem[0].name}</h2>
          <div className="judge3_single-det_ex">
            <p>{mem[0].desig}</p>
            <span>{mem[0].org}</span>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="judge3_single">
        <div className="judge3_single-inner">
          <img src={mem[1].Img} alt="" />
          <div className="judge3_single-inner_name" style={mem[1].nameStyle}>
            <span>{mem[1].name}</span>
          </div>
        </div>
        <div className="judge3_single-det">
          <h2>{mem[1].name}</h2>
          <div className="judge3_single-det_ex">
            <p>{mem[1].desig}</p>
            <span>{mem[1].org}</span>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="judge3_single">
        <div className="judge3_single-inner">
          <img src={mem[2].Img} alt="" />
          <div className="judge3_single-inner_name" style={mem[2].nameStyle}>
            <span>{mem[2].name}</span>
          </div>
        </div>
        <div className="judge3_single-det">
          <h2>{mem[2].name}</h2>
          <div className="judge3_single-det_ex">
            <p>{mem[2].desig}</p>
            <span>{mem[2].org}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge3;
