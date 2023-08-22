import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set2 = () => {
  useEffect(() => {
    document.title = "Projects - Set 2";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Project - set 2",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };

  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Projects - Set 2</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Sustainable Solutions for Urban Mobility
            </h1>
            <p className="software-content-description projects-close projects-close">
              {" "}
              Develop an application or system that addresses the challenges of
              urban transportation, promoting sustainable alternatives such as
              cycling, walking, or public transport. Consider factors like
              traffic congestion, air pollution, and ease of access for all
              citizens.
            </p>
          </div>

          <div className="software-content" onClick={() => handleSoftwareView}>
            <h1 className="software-content-title">
              AI-powered Healthcare Triage
            </h1>
            <p className="software-content-description projects-close">
              Create an AI-powered platform that can assess and prioritize
              patient symptoms to help healthcare professionals manage the
              patient load efficiently during emergencies or outbreaks. The
              system should be able to recognize critical cases that need
              immediate attention.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Education Accessibility for All
            </h1>
            <p className="software-content-description projects-close">
              Design an educational tool or application that makes learning more
              accessible to differently-abled individuals or those with learning
              difficulties. Consider inclusivity, interactivity, and adaptable
              content to cater to a diverse audience
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Waste Management and Recycling Optimization
            </h1>
            <p className="software-content-description projects-close">
              Develop an intelligent system that optimizes waste collection and
              recycling processes in urban areas. The solution could include
              real-time data analysis, route optimization, and incentivizing
              citizens to participate actively in recycling initiatives
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Cybersecurity for IoT Devices
            </h1>
            <p className="software-content-description projects-close">
              CBuild a security solution to protect Internet of Things (IoT)
              devices from potential threats and vulnerabilities. The solution
              should ensure data privacy, integrity, and device authentication
              to prevent unauthorized access
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Disaster Preparedness and Response
            </h1>
            <p className="software-content-description projects-close">
              Create a platform that enhances disaster preparedness and response
              efforts. The system could provide real-time updates, offer
              resources and support to affected communities, and enable
              efficient coordination between emergency responders.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Personalized Mental Health Support
            </h1>
            <p className="software-content-description projects-close">
              Design an app or service that offers personalized mental health
              support based on an individual's needs and preferences. The
              solution should provide resources, coping strategies, and access
              to professional help when necessary
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              AI-driven Fake News Detection
            </h1>
            <p className="software-content-description projects-close">
              Develop an AI system capable of detecting and classifying fake
              news articles or misinformation spread across various social media
              platforms. The system should provide users with reliable sources
              and factchecking information.{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Food Waste Reduction</h1>
            <p className="software-content-description projects-close">
              Create a solution that helps reduce food waste in households,
              restaurants, or supermarkets. This could include a smart inventory
              management system, recipes for using leftover ingredients, or a
              platform to connect surplus food with those in need.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Eco-friendly Smart Home Automation
            </h1>
            <p className="software-content-description projects-close">
              Design a smart home automation system that minimizes energy
              consumption and promotes sustainable practices. The system should
              intelligently control appliances, lighting, and temperature based
              on occupancy and user preferences{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Redefining Education through Technology
            </h1>
            <p className="software-content-description projects-close">
              Create an innovative educational platform that offers personalized
              learning experiences, interactive content, and tools for teachers
              to engage students in virtual or hybrid classrooms{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Mental Health and Wellness Suppor
            </h1>
            <p className="software-content-description projects-close">
              Develop a mental health app that provides users with resources for
              stress management, mindfulness exercises, and access to virtual
              therapy sessions to promote overall well-being.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Cybersecurity and Data Privacy for IoT Devices
            </h1>
            <p className="software-content-description projects-close">
              Build a security platform that safeguards Internet of Things (IoT)
              devices from cyber threats, ensuring data privacy and secure
              communication between devices and networks.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Voice Prescription</h1>
            <p className="software-content-description projects-close">
              Design an app to write formatted prescriptions based on dictation
              from doctor. Refer attachment for more detail. The app should
              provide facility to sign the prescription and also send to the
              patient directly on his phone and email id. The method of storing
              the medical records (EHR) should follow relevant compliance laws
              like HIPAA
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              AI based crop identification mobile app
            </h1>
            <p className="software-content-description projects-close h-[35vh]">
              Develop a mobile application that can identify crop using only
              field photo of a crop. The team must target at-least 10 different
              crops for demonstration. The application will allow the user to
              take photos and automatically identify the crop. The photo and
              crop information along with geolocation information should be
              stored in an internal database which can be exported/emailed.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Portable RCS Measuring Device
            </h1>
            <p className="software-content-description projects-close">
              Which is capable of independent operation and deployable from
              multiple platforms (Ship, boat, UAV, etc)
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Redefining Education through Technology
            </h1>
            <p className="software-content-description projects-close">
              Create an innovative educational platform that offers personalized
              learning experiences, interactive content, and tools for teachers
              to engage students in virtual or hybrid classrooms{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set2;
