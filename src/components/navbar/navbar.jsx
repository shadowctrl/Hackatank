import React from "react";
import "./navbar.css";
import {
  InstagramOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";
import { ReactComponent as Grid } from "../../assets/navgrid.svg";

const Navbar = () => {
  const handleScroll = (id) => {
    if (window.location.pathname != "/") {
      window.open(`/${id}`, "_self");
    }

    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
    }, 200);
  };
  if (window.location.hash) handleScroll(window.location.hash);

  const handleNavMenuClick = () => {
    const NavVisiblility = document.querySelector(".parent-navbar-mobile");
    NavVisiblility.classList.toggle("navbar-open-mobile");
  };
  return (
    <React.Fragment>
      <div className="parent">
        <div className="components">
          <div className="title" onClick={() => window.open("/", "_self")}>
            <img src="/images/diamond.webp" className="logo" />
            Hackathon
            <div className="socials">
              <div className="insta">
                <SocialIcon
                  url="https://www.instagram.com/srmveccsisb"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="fb">
                <SocialIcon
                  url="https://www.facebook.com"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>

              <div className="yt">
                <SocialIcon
                  url="https://www.youtube.com/"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
            </div>
          </div>

          <ul>
            <li>
              <p onClick={() => window.open("/", "_self")}>Home</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#agenda")}>Agenda</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#schedule")}>Schedule</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#faqs")}>FAQs</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#contact")}>Contact</p>
            </li>
          </ul>
          <div className="last">
            <h2 className="register">
              <a href="https://forms.gle/mqHSf1kpoTUiMURH6" target="_blank">
                {" "}
                Register
              </a>
            </h2>
          </div>
        </div>
      </div>

      <div className="parent-navbar-mobile">
        <div className="components-mobile">
          <div className="title-mobile">
            <img src="/images/diamond.webp" width="30vw" />
            Hackathon
          </div>
          <div className="last-mobile">
            <h2 className="register-mobile">
              <a href="https://forms.gle/mqHSf1kpoTUiMURH6" target="_blank">
                Register
              </a>
            </h2>
          </div>
          <Grid
            className="navbar-menu-mobile "
            onClick={() => handleNavMenuClick()}
          />
        </div>
        <div className="navbar-open">
          <ul>
            <li>
              <p onClick={() => window.open("/", "_self")}>Home</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#agenda")}>Agenda</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#schedule")}>Schedule</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#faqs")}>FAQs</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#contact")}>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
