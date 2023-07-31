import "./schedule.css";
import React from "react";

const schedule = () => {
  return (
    <React.Fragment>
      <div className="parent-schedule">
        <div className="schedule-title">schedule</div>
        <div className="timeline">
          <div className="container ">
            <h2 className="date">july 1</h2>
            <h2 className="container-title">Event Approved</h2>
            <p className="container-description">
              Event Approved Hackathon" is an exciting and dynamic
              technology-focused gathering that brings together innovative
              minds, programmers, developers, and enthusiasts from various
              fields
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Registrations Started</h2>
            <h1 className="date"> Aug 3 - sep 1</h1>
            <p className="container-description">
              Embark on an exciting journey of innovation and join our hackathon
              as registrations are now open! For all the details and to secure
              your spot, be sure to check out our website. Let's create
              something extraordinary together! 🚀👩‍💻👨‍💻
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h1 className="date"> sep 1 - sep 5</h1>
            <h2 className="container-title">Team Formation</h2>
            <p className="container-description">
              During this period, early bird registrations may offer exclusive
              benefits to those who sign up promptly. Participants can also
              start forming teams, finding like-minded individuals with
              complementary skills to collaborate on innovative project ideas.
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Preparation 💡</h2>
            <h1 className="date"></h1>
            <p className="container-description">
              With teams in place, participants can now delve into brainstorming
              sessions, discussing potential project ideas, and conducting
              research to refine their concepts. Mentors and resources may be
              available to support participants during this phase.
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Intensive Hackathon Event 🚀</h2>
            <h1 className="date"> sep 8 - 12.00 clock</h1>
            <p className="container-description">
              The main event kicks off, and participants immerse themselves in
              the hackathon experience. The 24-hour (or more) coding marathon
              takes place, where teams work passionately to develop their
              projects, fueled by creativity, determination, and the spirit of
              competition.
            </p>
            <span className="circle"></span>
          </div>
          <div className="container ">
            <h2 className="container-title">Winner Announcements</h2>
            <h1 className="date"> sep 9 - 4.00 clock</h1>
            <p className="container-description">
              The judges deliberate, and winners are announced in various
              categories, celebrating outstanding projects, creativity, and
              teamwork. The successful conclusion of the hackathon is
              commemorated with an awards ceremony and well-deserved
              celebrations.
            </p>
            <span className="circle"></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
