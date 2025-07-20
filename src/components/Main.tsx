import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/profile image 1.png")} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vshriram26" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shriram-deshmukh-40b775266/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:vshriram2926work@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Shriram Deshmukh</h1>
          <p>Electronics & AI Engineer</p>
          <p className="bio">I am a 3rd-year Electronics and Telecommunication Engineering student based in Pune, India, skilled in AI, system integration, and hardware prototyping, with a keen interest in advancing tech innovation.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vshriram26" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shriram-deshmukh-40b775266/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:vshriram2926work@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;