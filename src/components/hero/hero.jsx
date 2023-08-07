import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VanillaTilt from "vanilla-tilt";
import Section2 from "./section2";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";

const hero = () => {
  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleCountdown = () => {
    const countDate = new Date("September 8, 2023 10:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        {/* <div className="progress_bar"></div> */}
        <div className="flex items-end gap-2 relative z-[-1] pl-[0vw]">
          <img src="/images/srm.png" alt="" width="40vw" />
          <div className="tag">Celebrating 25 Years of SRMVEC</div>
          <img src="/images/srmvec.png" alt="" width="60vw" />
        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
              <span className="hackathon"> {"Hack - A - Tank"}</span>
              <br />
              {/* <p className="tag1"> A National Level 24 Hour Hackathon</p> */}
              {/* <span className="hackathon">Hackathon</span> */}
              <p className="description">
                National <span> Level competition</span> 24 hour Hackathon
                showcasing innovative solutions
                <br /> and tech talents from across the country
              </p>
            </div>
            <div
              className="register_now"
              onClick={() => window.open("https://forms.gle/mqHSf1kpoTUiMURH6")}
            >
              <div>
                <a>REGISTER NOW </a>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
              </div>
            </div>
            <div className="countdown-main">
              {/* <h2 className="countdown-text">
            Join us for the ultimate coding extravaganza!
          </h2> */}
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="col1 animated-div">
              <h3 className="text">
                September 8{" "}
                <EventAvailableIcon
                  style={{
                    fontSize: "1.5vw",
                  }}
                />
              </h3>
              <p
                className="text2"
                onClick={() => window.open("/guidelines", "_self")}
              >
                Guidelines{" "}
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
              <p
                className="text3"
                onClick={() => window.open("/events", "_self")}
              >
                Events{" "}
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
            </div>
            {/* -------------------------- Column 2 * ---------------------------------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Infomation Details{" "}
                <InfoIcon
                  style={{
                    fontSize: "1.5vw",
                  }}
                />
              </h3>
              <p
                className="text5"
                onClick={() => window.open("/about", "_self")}
              >
                About
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
              <p
                className="text6"
                onClick={() => window.open("/judges", "_self")}
              >
                Judge Panel
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}
            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Projects</h3>
              </div>
              <p
                className="text8"
                onClick={() => window.open("/hardware", "_self")}
              >
                Hardware{" "}
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
              <p
                className="text9"
                onClick={() => window.open("/software", "_self")}
              >
                Software{" "}
                <KeyboardArrowRightIcon
                  style={{
                    fontSize: "2vw",
                  }}
                />
              </p>
            </div>
            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://goo.gl/maps/iaE4Kko8wqqHs4jx9")
              }
            >
              <h3 className="text10">
                Venue <LocationOnIcon />
              </h3>
              <div className="flex flex-col ">
                <p className="text-white font-bold pt-[2vh] text-[0.85vw]">
                  SRM Valliammai Engineering College,
                </p>
                <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, Kattankulathur, Tamil
                  Nadu - 603203
                </p>
                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 5  ---------------------------------- */}
            <div className="col5 "></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 animated-div">
              <h3 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1">
                  <img
                    src="/images/csi.jpeg"
                    width="40vw"
                    height="5vh"
                    style={{
                      borderRadius: "50%",
                      marginBottom: "0.5vh",
                    }}
                  />
                  <img src="/images/whitehatians.png" alt="" width="44vw" />
                </div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <p className="text14">SRMVEC CSI Student Branch </p>
                <p className="text15">Whitehatians Cyber Club - VEC</p>
                <div className="round2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
      </div>
      <Section2 />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default hero;
