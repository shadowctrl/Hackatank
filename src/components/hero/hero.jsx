import "./hero.css";
import React from "react";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import BookmarkAddedSharpIcon from "@mui/icons-material/BookmarkAddedSharp";

const hero = () => {
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
      <section className="countdown">
        <div className="day-card">
          <h3 className="day">1</h3>
          <h3>Day</h3>
        </div>
        <div className="hours-card">
          <h3 className="hours">12</h3>
          <h3>Hours</h3>
        </div>
        <div className="min-card">
          <h3 className="minutes">20</h3>
          <h3>Minutes</h3>
        </div>
        <div className="sec-card">
          <h3 className="seconds">10</h3>
          <h3>Seconds</h3>
        </div>
      </section>
    </div>
  );
};

export default hero;
