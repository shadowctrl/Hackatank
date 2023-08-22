import React from "react";
import PhoneBluetoothSpeakerIcon from "@mui/icons-material/PhoneBluetoothSpeaker";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import "./contact.css";
import { ReactComponent as DiscordContact } from "../../assets/discord.svg";
import ReactGA from "react-ga";

const contact = () => {
  const handlecontactOptions = (card) => {
    document.querySelector(card).classList.toggle("contact-card-flip");
  };

  const handleLaunch = (target) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Contact Option",
    });
    const rocket = document.querySelector(`#${target}`);
    rocket.classList.toggle("contact-card-launch");
  };
  return (
    <React.Fragment>
      <div id="contact" className="parent-contact">
        <div className="contact-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          Contacts
        </div>
        <div className="parent-container">
          {/* -----------------------------------------Contact 1 ------------------------------------------- */}
          <div>
            <div className="contact-container">
              <div className="contact-card">
                <div className="contact-card-front">
                  <img src="/images/shree.webp" alt="shree - president CSI" />
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Shree N</h1>
                    <h2 className="contact-card-description">
                      President - CSI
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card")}
                    >
                      Contact Options{" "}
                      <KeyboardDoubleArrowRightIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </h3>
                  </div>
                </div>
                <div className="contact-card-back">
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Shree N</h1>
                    <h2 className="contact-card-description">
                      <span
                        className="contact-card-phone"
                        onClick={() => {
                          handleLaunch("contact-card-launch1");
                          setTimeout(() => {
                            window.open(
                              "https://api.whatsapp.com/send?phone=7010373822"
                            );
                          }, 2000);
                        }}
                      >
                        <PhoneBluetoothSpeakerIcon
                          className="phone"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        +91 7010373822
                        <span id="contact-card-launch1">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-email"
                        onClick={() => {
                          handleLaunch("contact-card-launch2");
                          setTimeout(() => {
                            window.open("mailto:shree@hackatank.tech");
                          }, 2000);
                        }}
                      >
                        <EmailRoundedIcon
                          className="email"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        shree@hackatank.tech
                        <span id="contact-card-launch2">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-instagram"
                        onClick={() => {
                          handleLaunch("contact-card-launch3");
                          setTimeout(() => {
                            window.open("https://www.instagram.com/mr._.nope");
                          }, 2000);
                        }}
                      >
                        <InstagramIcon
                          className="instagram"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        @mr._.nope
                        <span id="contact-card-launch3">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-discord"
                        onClick={() => {
                          handleLaunch("contact-card-launch4");
                          setTimeout(() => {
                            window.open("https://discord.gg/w77zzjVkEB");
                          }, 2000);
                        }}
                      >
                        <DiscordContact
                          className="discord"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        the_creep_27
                        <span id="contact-card-launch4">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card")}
                    >
                      <KeyboardDoubleArrowLeftIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Back
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------------------------Contact 2 ------------------------------------------- */}
          <div>
            <div className="contact-container">
              <div className="contact-card1">
                <div className="contact-card-front">
                  <img
                    src="/images/kishore.webp"
                    alt="Kishore President - Whitehatians"
                  />
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Kishore R</h1>
                    <h2 className="contact-card-description">
                      President - whitehatians
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card1")}
                    >
                      Contact Options{" "}
                      <KeyboardDoubleArrowRightIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </h3>
                  </div>
                </div>
                <div className="contact-card-back1">
                  <div className="contact-card-details">
                    <h1 className="contact-card-name">Kishore R</h1>
                    <h2 className="contact-card-description">
                      <span
                        className="contact-card-phone"
                        onClick={() => {
                          handleLaunch("contact-card-launch11");
                          setTimeout(() => {
                            window.open(
                              "https://api.whatsapp.com/send?phone=8682840197"
                            );
                          }, 2000);
                        }}
                      >
                        <PhoneBluetoothSpeakerIcon
                          className="phone"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        +91 8682840197
                        <span id="contact-card-launch11">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-email"
                        onClick={() => {
                          handleLaunch("contact-card-launch12");
                          setTimeout(() => {
                            window.open("mailto:kishore@hackatank.tech");
                          }, 2000);
                        }}
                      >
                        <EmailRoundedIcon
                          className="email"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        kishore@hackatank.tech
                        <span id="contact-card-launch12">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-instagram"
                        onClick={() => {
                          handleLaunch("contact-card-launch13");
                          setTimeout(() => {
                            window.open(
                              "https://www.instagram.com/an0nymou5.4dm1n"
                            );
                          }, 2000);
                        }}
                      >
                        <InstagramIcon
                          className="instagram"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        @anonymous4dm1n
                        <span id="contact-card-launch13">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                      <span
                        className="contact-card-discord"
                        onClick={() => {
                          handleLaunch("contact-card-launch14");
                          setTimeout(() => {
                            window.open("https://discord.gg/w77zzjVkEB");
                          }, 2000);
                        }}
                      >
                        <DiscordContact
                          className="discord"
                          style={{
                            width: "35px",
                            height: "35px",
                          }}
                        />
                        anonymous4dm1n
                        <span id="contact-card-launch14">
                          <RocketLaunchIcon
                            className="rocketLaunch"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </span>
                    </h2>
                    <h3
                      className="contact-card-options"
                      onClick={() => handlecontactOptions(".contact-card1")}
                    >
                      <KeyboardDoubleArrowLeftIcon
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                      Back
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contact;
