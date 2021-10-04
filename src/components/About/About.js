import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import aboutImg from "../../images/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="px-5 pb-5">
      <div className="text-center my-5">
        <h3 style={{ color: "#03b970" }} className="fs-1 fw-bold">
          About Us
        </h3>
      </div>
      <div className="row d-flex align-items-center">
        {/* About Left */}
        <div className="col-6">
          <h2 className="fw-bold mb-3">What We Do & Our Aim</h2>
          <p style={{ fontSize: "17px" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique
          </p>
          <div className="mt-4">
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="check-icon"
              ></FontAwesomeIcon>
              <p className="fw-bold ms-3">Full LifeTime Access</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="check-icon"
              ></FontAwesomeIcon>
              <p className="fw-bold ms-3">20+ Downloadable Resources</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="check-icon"
              ></FontAwesomeIcon>
              <p className="fw-bold ms-3">Certificate Of Completion</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faCheckSquare}
                className="check-icon"
              ></FontAwesomeIcon>
              <p className="fw-bold ms-3">Free Trial 7 Days</p>
            </div>
          </div>
        </div>

        {/* About Right */}
        <div className="col-6 ms-auto">
          <img className="about-img" src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
