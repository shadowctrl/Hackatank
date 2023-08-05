import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./section2.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda">
          <div className="title2">
            <img src="/images/logo3.png" alt="" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div>
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
      </div>
    </React.Fragment>
  );
};

export default section2;
