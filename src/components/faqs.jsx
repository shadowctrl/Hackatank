import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";

const faqs = () => {
  const handleArrow = (element, faqArrow) => {
    const arrow = document.querySelector(`#${faqArrow}`).style;
    arrow.transform
      ? (arrow.transform = "")
      : (arrow.transform = "rotate(90deg)");

    const faqSec = document.querySelector(`#${element}`);
    faqSec.classList.toggle("faqs-view");
  };

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/logo3.png" alt="" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div id="f1" className="faqs-content">
            <h1 className="faqs-content-title">
              How to register for hackathon
              <ChevronRightIcon
                id="a1"
                onClick={() => handleArrow("f1", "a1")}
                style={{
                  fontSize: "2.8vw",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                }}
              />
            </h1>
            <p className="faqs-content-description">
              Click register on the Register now button on the website
            </p>
          </div>

          <div id="f2" className="faqs-content">
            <h1 className="faqs-content-title">
              How to register for hackathon
              <ChevronRightIcon
                id="a2"
                onClick={() => handleArrow("f2", "a2")}
                style={{
                  fontSize: "2.8vw",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                }}
              />
            </h1>
            <p className="faqs-content-description">
              Click register on the Register now button on the website
            </p>
          </div>

          <div id="f3" className="faqs-content">
            <h1 className="faqs-content-title">
              How to register for hackathon
              <ChevronRightIcon
                id="a3"
                onClick={() => handleArrow("f3", "a3")}
                style={{
                  fontSize: "2.8vw",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                }}
              />
            </h1>
            <p className="faqs-content-description">
              Click register on the Register now button on the website
            </p>
          </div>

          <div id="f4" className="faqs-content">
            <h1 className="faqs-content-title">
              How to register for hackathon
              <ChevronRightIcon
                id="a4"
                onClick={() => handleArrow("f4", "a4")}
                style={{
                  fontSize: "2.8vw",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                }}
              />
            </h1>
            <p className="faqs-content-description">
              Click register on the Register now button on the website
            </p>
          </div>

          <div id="f5" className="faqs-content">
            <h1 className="faqs-content-title">
              How to register for hackathon
              <ChevronRightIcon
                id="a5"
                onClick={() => handleArrow("f5", "a5")}
                style={{
                  fontSize: "2.8vw",
                  transition: "all 0.3s linear",
                  cursor: "pointer",
                }}
              />
            </h1>
            <p className="faqs-content-description">
              Click register on the Register now button on the website
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
