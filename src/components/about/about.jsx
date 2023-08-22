import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/srm.webp"
              alt="srm logo"
              className="about-srm-logo"
            />
            Foundation Day Celebration
            <img
              src="/images/srmvec.webp"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
            SRM Valliammai Engineering college (An Autonomous Institution) was
            established on 9th September, 1999. The SRM Valliammai Engineering
            College is a part of the SRM Group of Educational Institutions,
            sponsored by the Valliammai Society. The Valliammai Society was
            founded by Dr.T.R.Paarivendhar , a well-known educationist, in the
            name of his mother Tmt. R.Valliammai, under whose care and guidance
            he attained greater heights in his personal development and whose
            ideals continue to inspire him. On this auspicious moment we
            celebrate the 25th Foundation Day of SRM Valliammai Engineering
            college by organising Hackathon on 8th September, 2023.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/srmvec.webp"
              alt="srmvec logo"
            />
            About Srmvec
          </div>
          <div className="about-srmvec-description" id="about-right">
            SRM Valliammai Engineering college (An Autonomous Institution) was
            established on September 9, 1999 and presently conducts 11 Under
            graduate courses and 8 Post graduate courses. The college has highly
            qualified, dynamic and dedicated renowned faculty both from academic
            and industrial background. The serene atmosphere with the
            surrounding greenery is conductive to the pursuit of higher studies.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.csi-kancheepuram.org/")}
          >
            <img
              className="about-csi-logo"
              src="/images/csi1.webp"
              alt="csi logo"
            />
            About csi
          </div>
          <div className="about-csi-description" id="about-left">
            Computer Society of India is a body of computer professionals in
            India. It was started on 6 March 1965 by a few computer
            professionals and has now grown to be the national body representing
            computer professionals. It has 72 chapters across India, 511 student
            branches, and 100,000 members. The society promotes knowledge
            sharing,and professional development in the field of computer
            science.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.whitehatians.tech")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/whitehatians.webp"
              alt="whitehatians logo"
            />
            About whitehatians
          </div>
          <div className="about-whitehatians-description" id="about-right">
            WhiteHatians Cyber Security club. The main goal of this club is to
            provide a technical opportunity for students to broaden their
            knowledge in the area of Cyber Security and to interact with other
            students who have a shared interest in cyber security. Through the
            club’s activities, members can also network with professionals in
            the field, gain hands-on experience, and prepare for careers in
            cyber security.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
