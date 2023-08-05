import React from "react";
import "./about.css";
const about = () => {
  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <div className="srmvec">
          <div className="about-srmvec-title">
            <img src="/images/srmvec.png" alt="" width={"130vw"} />
            About Srmvec
          </div>
          <div className="about-srmvec-description">
            SRM Valliammai Engineering college (An Autonomous Institution) was
            established on September 9, 1999 and presently conducts 11 Under
            graduate courses and 8 Post graduate courses. The college has highly
            qualified, dynamic and dedicated renowned faculty both from academic
            and industrial background. The serene atmosphere with the
            surrounding greenery is conductive to the pursuit of higher studies.
          </div>
        </div>
        <div className="csi">
          <div className="about-csi-title">
            <img src="/images/csi.png" alt="" width={"130vw"} />
            About csi
          </div>
          <div className="about-csi-description">
            Computer Society of India is a body of computer professionals in
            India. It was started on 6 March 1965 by a few computer
            professionals and has now grown to be the national body representing
            computer professionals. It has 72 chapters across India, 511 student
            branches, and 100,000 members.
          </div>
        </div>
        <div className="whitehatians">
          <div className="about-whitehatians-title">
            <img src="/images/whitehatians.png" alt="" width={"130vw"} />
            About whitehatians
          </div>
          <div className="about-whitehatians-description">
            WhiteHatians Cyber Security club. The main goal of this club is to
            provide a technical opportunity for students to broaden their
            knowledge in the area of Cyber Security and to interact with other
            students who have a shared interest in cyber security. Through the
            club’s activities, members can also network with professionals in
            the field, gain hands-on experience, and prepare for careers in
            cyber security. Many events can be conducted to enhance the
            knowledge of the students in a competitive way.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
