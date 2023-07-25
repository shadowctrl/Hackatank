import React from "react";
import "./navbar.css";
import {
  InstagramOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";
const Navbar = () => {
  return (
    <div className="parent">
      <div className="components">
        <div className="title">
          <img src="/images/diamond.png" className="logo" />
          Hackathon
          <div className="socials">
            <div className="insta">
              <SocialIcon
                url="https://www.instagram.com/srmveccsisb"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            </div>
            <div className="fb">
              <SocialIcon
                url="https://www.facebook.com"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            </div>

            <div className="yt">
              <SocialIcon
                url="https://www.youtube.com/"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
            </div>
          </div>
        </div>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
          <li>
            <a href="/prizes">Prizes</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <div className="last">
          <h2 className="register">
            <a href="/signin"> Sign In</a>
          </h2>
          {/* <h2 className="register">
            <a href="/contact">Contact</a>
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
