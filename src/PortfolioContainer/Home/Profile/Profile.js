import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.freecodecamp.org/fcc3e3c5423-004b-4888-88f8-b59318107eb3">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="mailto:avaneesh2812@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/srivast-avan/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.coursera.org/user/8c8d045fb7dc8d79fea6e36370a3fe18">
                <i className="fa fa-copyright"></i>
              </a>
              <a href="tel: 8299575981">
                <i className="fa fa-phone"></i>
              </a>
              <a
                href="#"
                onClick={() => {
                  alert(
                    "My WhatsApp Number is: 8090227807. Looking forward to having a conversation with you."
                  );
                }}
              >
                <i className="fa fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">
                Avaneesh Srivastava &#128308; &#128300;
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1200,
                    "MERN Stack Dev",
                    1200,
                    "Full Stack Developer",
                    1200,
                    "Cross Platform Dev",
                    1200,
                    "React/React Native Dev",
                    1200,
                    "Biotechnologist",
                    1200,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Self motivated undergraduate student skilled in biotechnological
                techniques and full stack web development. I believe that a
                company is built on values, and I will uphold those values to
                the best of my ability for the success of the organization.
                Looking for a position where I can utilize my skills in
                biotechnology or web development.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="myResume.pdf" download="Avaneesh myResume.pdf">
              <button className="btn highlighted-btn ml-5">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
