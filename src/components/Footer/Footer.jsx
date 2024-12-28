import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kirankumarbehera2608@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/samsgym.fitnesscenter?igsh=MTZoMWNocmo5ZzVycw==" target="_blank">
          <Insta color="white" size={"3rem"} />
          </a>
          
          {/* <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
