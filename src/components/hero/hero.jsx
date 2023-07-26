import "./hero.css";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Lottie from "lottie-react";
import animationData from "../../assets/mobile.json";
import VanillaTilt from "vanilla-tilt";

const hero = () => {
  useEffect(() => {
    VanillaTilt.init(
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
    const countDate = new Date("September 8, 2023 12:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(diff / day);
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);

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
    <div className="parent_hero">
      <div className="progress_bar"></div>
      <div className="tag">Celebrating 25 Years of SRMVEC</div>

      {/* ----------------------- Page 1 ------------------------- */}
      <section className="column">
        <div className="left_side">
          <div className="title">
            {"National Level"}
            <br />
            <span className="hackathon">Hackathon</span>
            <p className="description">
              Premier national <span> coding competition</span> showcasing
              innovative solutions
              <br /> and tech talents from across the country
            </p>
          </div>
          <div className="register_now" onClick={() => window.open("/signin")}>
            <div>
              <a>REGISTER NOW </a>
            </div>
            <div>
              {" "}
              <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
            </div>
          </div>
          <div className="stats">
            <div className="student">
              <div className="student-icon">
                <PeopleOutlineSharpIcon
                  style={{
                    fontSize: "2.5vw",
                  }}
                />
              </div>
              <div className="student-count">10K+</div>
              <p className="student-description">
                Active Members al over the kancheepuram Chapter
              </p>
            </div>
            <div className="college">
              <div className="college-icon">
                <SchoolSharpIcon
                  style={{
                    fontSize: "2.5vw",
                  }}
                />
              </div>
              <div className="college-count">15+</div>
              <p className="college-description">
                Active Educational Institutions
              </p>
            </div>
            {/* <div className="evevts">
              <BookmarkAddedSharpIcon
                style={{
                  fontSize: "2.5vw",
                }}
              />{" "}
              Events
            </div> */}
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
            <p className="text2">
              Guidelines{" "}
              <KeyboardArrowRightIcon
                style={{
                  fontSize: "2vw",
                }}
              />
            </p>
            <p className="text3">
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
            <p className="text5">
              About
              <KeyboardArrowRightIcon
                style={{
                  fontSize: "2vw",
                }}
              />
            </p>
            <p className="text6">
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
            <p className="text8">
              Hardware{" "}
              <KeyboardArrowRightIcon
                style={{
                  fontSize: "2vw",
                }}
              />
            </p>
            <p className="text9">
              Software{" "}
              <KeyboardArrowRightIcon
                style={{
                  fontSize: "2vw",
                }}
              />
            </p>
          </div>
          {/* -------------------------- Column 4  ---------------------------------- */}
          <div className="col4 animated-div">
            <h3 className="text10">II Floor SEMINAR HALL</h3>
            <div className="flex items-center justify-between">
              <p className="text11">08.09.2023</p>
              <p className="text12">12:00 PM</p>
              <div className="round"></div>
            </div>
          </div>
          {/* -------------------------- Column 5  ---------------------------------- */}
          <div className="col5 "></div>
          {/* -------------------------- Column 6  ---------------------------------- */}
          <div className="col6 animated-div">
            <h3 className="text13">Admin Block</h3>
            <div className="flex items-center justify-between">
              <p className="text14">09.09.2023</p>
              <p className="text15">3:50 PM</p>
              <div className="round2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------- Page 2 -------------------------- */}
      <div className="section2">
        {/* <div className="tag2">
          Not just an event; it's a collision of creativity, collaboration, and
          coding prowess, where innovation finds its wings and dreams are turned
          into reality
        </div> */}
        <div className="section2-sub">
          <h2 className="countdown-text">
            Join us for the ultimate coding extravaganza!
          </h2>
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
          <img src="/images/logo4.png" alt="" />
          {/* <div className="animation-countdown_section">
            <Lottie
              animationData={animationData}
              loop={2}
              style={{
                height: "80vh",
                // backgroundColor: "red",
                width: "fit-content",
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default hero;
