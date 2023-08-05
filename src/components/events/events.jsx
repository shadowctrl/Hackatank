import React from "react";
import "./events.css";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";

const events = () => {
  const handleStage = (stage) => {
    if (stage == "1") {
      document.querySelector("#line-progress").style.width = "0%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage1-content").classList.add("active");
    }
    if (stage == "2") {
      document.querySelector("#line-progress").style.width = "25%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage2-content").classList.add("active");
    }
    if (stage == "3") {
      document.querySelector("#line-progress").style.width = "50%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage3-content").classList.add("active");
    }
    if (stage == "4") {
      document.querySelector("#line-progress").style.width = "75%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage4-content").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <div className="parent-events">
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div className="events-container">
          <div className="section-content stage1-content active">
            <div className="section-format">
              {" "}
              <h1>Register</h1>
              <p>
                🔗 Register via QR Code/Link/Website to be a part of our
                exciting event and showcase your brilliant ideas to the world!
                <br /> <br />
                🌐 How to Register: <br /> <br /> 1️⃣ Scan the QR Code: Simply
                scan the provided QR code with your smartphone or tablet, and it
                will direct you straight to the registration page. <br /> 2️⃣
                Click the Link: Alternatively, click on the provided
                registration link and fill in your team's details and contact
                information.
                <br /> 3️⃣ Visit Our Website: Head over to our event website and
                navigate to the registration section. Follow the easy steps to
                secure your team's spot!
              </p>
            </div>
          </div>
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>Team Shortlist</h1>
              <p>
                📜 Announcement of Shortlisted Teams for the Final Round 📜
                <br /> <br />
                After careful scrutiny and evaluation of all the submitted
                abstracts, we are thrilled to reveal the shortlisted teams that
                have made it to the final round! 🏆 Congratulations to each team
                on reaching this milestone and showcasing your exceptional
                talent and innovation.
                <br /> <br /> 🗓️ Important Dates: <br />
                📅 Announcement Date: [Date]
                <br />
                📅 Final Round Date: [Date] <br />
                📅 Venue/Online: [Location/Platform]
              </p>
            </div>
          </div>
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Payment Details</h1>
              <p>
                📜 Payment and Registration Details 📜
                <br /> <br />
                We are thrilled to announce that your team has been shortlisted
                for the final round of our prestigious event! Your outstanding
                project and dedication have earned you a well-deserved spot
                among the best innovators in the field. 🏆
                <br /> <br />
                1️⃣ Payment of Registration Fee: The registration fee for
                shortlisted teams is [Fee Amount]. This fee contributes to event
                logistics, resources, and supporting future innovative
                endeavors.
                <br />
                2️⃣ Payment Method: [Payment Method Details]
                <br />
                3️⃣ Deadline: Please complete the payment by [Payment Deadline].
                <br /> <br />
                We kindly request that you make the payment within this
                timeframe to confirm your participation.
              </p>
            </div>
          </div>
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>The Grand Finale</h1>
              <p>
                📢 Welcome to "Hack-a-Tank Commencement"! 🚀
                <br /> <br />
                What to Expect:
                <br />
                ➡️ Unique Challenges: Get ready to dive into real-world problem
                statements carefully crafted by industry experts and innovators.{" "}
                <br /> ➡️ Collaborative Atmosphere: Network with like-minded
                individuals, form new friendships, and collaborate with diverse
                teams to come up with groundbreaking solutions.
                <br /> ➡️ Expert Guidance: Mentors and subject matter experts
                will be available throughout the event to guide and assist your
                team.
                <br /> <br />
                🏅 Prizes and Recognition:
                <br />
                🧧 Stand a chance to win exciting prizes, recognition from
                leading industry players, and potential opportunities for
                further development and implementation of your ideas.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default events;
