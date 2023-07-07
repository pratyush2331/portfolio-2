import React from "react";
import "./Profile.css";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://github.com/pratyush2331">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/pratyush-raj-40b45ab2/">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/pratyush2331">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/pratyush2331/">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCUISXgssYA0PpgJvphVpVgA">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm{" "}
                <span className="highlighted-text">Pratyush Raj</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={["Programmer", 1000, "Developer", 1000]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Driven by curiosity, fueled by knowledge
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {" "}
                Hire Me{" "}
              </button>
                <a href="Pratyush-Raj Resume.pdf" download="Pratyush Raj Resume.pdf">
              <button className="btn highlighted-btn">
                Get Resume
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
