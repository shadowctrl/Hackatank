import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import "./contact.css";

const contact = () => {
  return (
    <React.Fragment>
      <div className="parent-contact">
        <div className="contact-container">
          <div className="contact-card">
            <h1 className="contact-name">Shree N</h1>
            <h1 className="contact-position">President - CSI</h1>
            <div className="contact-options">
              <PhoneInTalkIcon
                style={{
                  color: "black",
                  fontSize: "50px",
                  border: "1px solid black",
                  boxSizing: "border-box",
                  padding: "1vh 0.5vw",
                  borderRadius: "50%",
                }}
              />
              <EmailIcon
                style={{
                  color: "black",
                  fontSize: "50px",
                  border: "1px solid black",
                  boxSizing: "border-box",
                  padding: "1vh 0.5vw",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contact;
