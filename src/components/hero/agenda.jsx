import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              A hackathon is an event where individuals or teams come together
              to collaboratively work on solving specific problems or challenges
              within a limited timeframe, usually ranging from a few hours to a
              couple of days. It is a great platform for programmers, designers,
              entrepreneurs, and other creative minds to showcase their skills,
              creativity, and problem-solving abilities.
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/vision.webp"
                alt="vision-image"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              Empowering Innovators to Transform Tomorrow. Our hackathon
              envisions a world where creative minds converge to tackle pressing
              challenges, forging solutions that redefine possibilities. Through
              dynamic collaboration, cutting-edge technology, and unwavering
              determination, we ignite a spark that sparks real change. Join us
              to hack a brighter future and leave an indelible mark on the
              landscape of innovation.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/target.webp"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Fueling innovation, our hackathon is a nexus of minds reimagining
              solutions for a dynamic world. Through tech-driven teamwork, we
              catalyze change, pushing boundaries and shaping the future. Join
              us to ideate, collaborate, and leave an indelible mark on the
              tapestry of progress.we ignite a spark that sparks real change.
              Join us to hack a brighter future and leave an indelible mark on
              the landscape of innovation
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
