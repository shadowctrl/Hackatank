import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is a hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              A hackathon is a social coding event that brings computer
              programmers and other interested people together to improve upon
              or build a new software program or a hardware solution for the
              provided problem statements.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is “Hack-A-Tank”?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Hack-A-Tank is the first 24-hour national-level hackathon
              organized by the SRM Valliammai engineering college in
              collaboration with Whitehatians – Club of the Department of Cyber
              Security and the Student Branch of Computer Society of India (CSI-
              SB).
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Who can participate?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Hack-A-Tank is open to all undergraduate students from all
              colleges across India.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How much is the registration fee?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              After the scrutiny process, the organizing committee will release
              the shortlisted teams for the finale. The selected team must pay a
              registration fee of Rs. 1000/- per team, which includes GST. It
              contributes to goodie bags, food, and refreshments served during
              the event. The registration fee is non-refundable and
              non-transferable. Teams are advised to complete the registration
              process as soon as possible to secure their participation in the
              event. Upon successful completion of the registration, teams will
              receive further instructions from the organizing committee.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is the hackathon online or offline?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The first round will be abstract submission which is completely
              done in virtual mode. Further upon registration, you will be
              contacted by our team and given a brief on the process of abstract
              submission. The shortlisted team should appear physically for the
              final.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How to register for the hackathon?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Click the register button on the home page and you will be
              directed to the respective Google form. Kindly submit the required
              details and our organizing team will contact you as soon as
              possible.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the prize money of the winning team?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The event has a prize pool of Rs 25,000 for the winners.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the team size to participate in the Hack-A-Tank?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The teams must have a minimum of 2 members and a maximum of 3
              members.
            </p>
          </div>
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What are the prerequisites considered for registering?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Participants may need to have knowledge and skills in areas such
              as electronics, programming, data analytics, and IoT technologies,
              depending on the theme of the hackathon. Participants must need to
              bring their own laptops, sensors, microcontrollers, and other
              necessary tools and equipment.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
