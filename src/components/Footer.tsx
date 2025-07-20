import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/vshriram26" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/shriram-deshmukh-40b775266/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:vshriram2926work@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>A portfolio of <a href="https://github.com/vshriram26/Shriram-Deshmukh-Portfolio" target="_blank" rel="noreferrer">Shriram Deshmukh</a> with 💪🧠</p>
    </footer>
  );
}

export default Footer;