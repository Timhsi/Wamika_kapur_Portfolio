import "./intro.css";


import React from "react";

import img from '../../assets/Profile_photo.jpg';




const Intro = () => {
  return (
    <section id="about">
      <h2>Get to know <h2>About Me</h2></h2>
     
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Wamika Kapur"/>
          </div>
        </div>
        <div className="about__content">
          
          <article className="about__card-para">
          <p className="summary">
          As a multidisciplinary professional, I fuse business analytics expertise with a keen risk assessment acumen and cybersecurity framework proficiency. My goal is to holistically fortify systems and proactively mitigate potential threats. Leveraging my background in MS Information Management (University of Washington), JD in Law, and MA, Ph.D. ABD in Business and International Relations, I aim to tailor innovative tech solutions ensuring organizations' cybersecurity while meeting regulatory standards.
          </p>
          <p className="summary">
          I bring a diverse perspective, drawing from my global citizenship, Asian-Indian STEM background, and experience as a Navy spouse, to shape dynamic leadership in the field. My thought leadership extends through published op-eds in renowned international forums like Cornell Policy Review, The Diplomat, and CGTN, initiating discussions relevant to contemporary issues.          </p>
          </article>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
