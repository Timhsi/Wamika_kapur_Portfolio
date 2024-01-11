import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Wamika Kapur</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/wamika-kapur-06805526/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://twitter.com/wamika_kapur" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;