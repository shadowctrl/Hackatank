import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  useEffect(() => {
    document.title = "Projects - Set 1";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Projects - set 1",
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
        <h1 className="parent-software-title">Projects - Set 1</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Elderly Care</h1>
            <p className="software-content-description projects-close">
              Develop a user-friendly device or system that helps elderly
              individuals with medication reminders, fall detection, activity
              tracking, and social interaction
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Energy Conservation</h1>
            <p className="software-content-description projects-close">
              Develop a smart energy monitoring and management system for homes
              or businesses that optimizes power consumption, identifies
              wastage, and encourages energy-saving behaviour
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Traffic Management</h1>
            <p className="software-content-description projects-close">
              Design a smart traffic management system that uses real-time data
              from cameras, sensors, and vehicle-to-vehicle communication to
              optimize traffic flow and reduce congestion
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
              citizens to participate actively in recycling initiatives.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Cybersecurity for IoT Devices
            </h1>
            <p className="software-content-description projects-close">
              Build a security solution to protect Internet of Things (IoT)
              devices from potential threats and vulnerabilities. The solution
              should ensure data privacy, integrity, and device authentication
              to prevent unauthorized access
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Smart Home Innovation</h1>
            <p className="software-content-description projects-close">
              Develop a cost-effective and energy-efficient smart home system
              that integrates various devices (lights, thermostat, security,
              etc.) and can be controlled through a single platform or using
              voice commands
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Healthcare Tech</h1>
            <p className="software-content-description projects-close">
              Design a wearable device that monitors vital signs (heart rate,
              blood pressure, oxygen levels) accurately and in real-time,
              transmitting data to healthcare professionals or loved ones{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Agricultural Automation</h1>
            <p className="software-content-description projects-close">
              Build an automated system that optimizes irrigation,
              fertilization, and pest control in a greenhouse or field,
              utilizing sensors and actuators for better crop yield and resource
              efficiency
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Assistive Technology</h1>
            <p className="software-content-description projects-close">
              Develop a device or solution that aids individuals with
              disabilities, such as a wearable for visually impaired people that
              provides realtime navigation assistance or a device that enhances
              communication for those with speech impairments{" "}
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Transportation & Logistics
            </h1>
            <p className="software-content-description projects-close">
              Prototype of a Solar Powered IOT Device with the ability to
              connect to a smart network to be used in Geo Tagging of Physical
              Assets Created under CSR
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Mental Health and Wellness Support
            </h1>
            <p className="software-content-description projects-close">
              Develop a mental health device that provides users with resources
              for stress management, mindfulness exercises, and access to
              virtual therapy sessions to promote overall well-being.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Disaster Management:</h1>
            <p className="software-content-description projects-close">
              Suggest and develop an innovative approach for redeveloping the
              centralized sewage treatment plants and help the city managers to
              better adopt decentralized approaches and ensure water resources
              through reuse.{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Fire suppressant</h1>
            <p className="software-content-description projects-close">
              A material which can be installed in the confined spaces of a
              submarine there by suppressing a fire in the initial stages only.
              The material should be available in multiple options such as pads
              for flooring, wire or cable’s covering, covers and tapes which can
              be applied on small places which are deemed hazardous from the
              fire-safety perspective. The fire suppressant should release the
              extinguishing agent stored in the form of micro-capsules at a
              specific temperature{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title ">
              Sustainable Solutions for Urban Mobility
            </h1>
            <p className="software-content-description projects-close">
              Develop an application or system that addresses the challenges of
              urban transportation, promoting sustainable alternatives such as
              cycling, walking, or public transport. Consider factors like
              traffic congestion, air pollution, and ease of access for all
              citizens.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Smart firefighting breathing apparatus
            </h1>
            <p className="software-content-description projects-close">
              It is intend to design add-on smart features to the existing
              Breathing Apparatus (BA) sets. To increase the efficiency and
              safety of crew in Fire Fighting Organization, smart fire-fighting
              BA has been proposed as an addon to the existing breathing
              apparatus which can monitor parameters such as pressure, breathing
              rate and time remaining and convey the same to fire-fighting
              attendant using wireless means{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Wildlife Conservation</h1>
            <p className="software-content-description projects-close">
              Build a wildlife tracking and monitoring system using GPS,
              sensors, and cameras to gather data on animal behaviour and
              habitat, aiding in conservation efforts.{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Sustainable Transportation
            </h1>
            <p className="software-content-description projects-close">
              Make a prototype for an efficient and eco-friendly transportation
              system, like a solar-powered electric vehicle charging station or
              an electric bike charge sharing technique
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
