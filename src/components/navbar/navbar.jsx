import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="parent">
      <div className="components">
        <div className="title">
          <img src="/images/diamond.png" className="logo" />
          Hackathon
        </div>

        <ul>
          <li>
            <a href="/home"> Home</a>
          </li>
          <li>
            <a href="/schedule"> Schedule</a>
          </li>
          <li>
            <a href="/prizes">Prizes</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <h2 className="register">
          <a href="/signin"> Register</a>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
