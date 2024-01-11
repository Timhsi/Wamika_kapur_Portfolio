import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Wamika Kapur</h1>
        <h2 className="text-light">Cybersecurity Analyst - Governance, Risk, & Compliance | Permanent Resident</h2>
        <h2> MS Information Management '24 University of Washington</h2>
        <CTA />
          <a href="#contact" className="scroll__down">
            Contact Me &#10230;
          </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
