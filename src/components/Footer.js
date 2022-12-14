import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../styles/Footer.css';
// import English from '../images/kingdom_united_icon.png';
// import Portuguese from '../images/brazil_icon.png';

function Footer() {
  return ( 
    <footer className="footer-container">
      <div className="links-footer">
        <p>Contact Me:</p>
        <a href="https://www.linkedin.com/in/kenneth-mei-633196257" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/softtscoder" 
          target="_blank" 
          className="icon-container" 
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
      </div>
      
      <p className="text-footer">Developed by Kenneth Mei</p>
      {/* <select className="select-language">
        <option>π§π· pt-BR</option>
        <option>πΊπΈ en-US</option>
      </select> */}
    </footer>
  );
}

export default Footer;