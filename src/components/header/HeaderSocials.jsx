import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/wamika-kapur-06805526/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://twitter.com/wamika_kapur" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      
    </div>
  )
}

export default HeaderSocials;