import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 >Anitha</h3>
        <p>Data Scientist | Open Source Enthusiast</p>
        <div className="social-media">
        <a href="https://www.linkedin.com/in/anitha-m-b47a08300" target="_blank" rel="noreferrer" className="linkedin">
                <FaLinkedin size={35}/>
                </a>
                <a href="https://github.com/ANITHAMARY2004/anitha" target="_blank" rel="noreferrer" className="github">
                <FaGithub size={35}/>
                </a>
                <a href="https://www.instagram.com/dore_chan23?igsh=MWpiOWltbzYyeTMzMw==" target="_blank" rel="noreferrer" className="instagram">
                <FaInstagram size={35}/>
                </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
