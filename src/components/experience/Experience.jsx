import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>
      <div className="skills">
        <div className="experience__frontend">
          
          <div className="skill__content ">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Risk Assessment</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Threat Modelling</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Enterprise Risk Management</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Governance</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Risk & Compliance</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Startegic Leadership</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Information Security</h4>
            </article>
          </div>
        </div>
      </div>
      <div className="BigContainer">
        <div className=" experience__container">
          <div className="experience__frontend">
            <h3>Regulations and Frameworks</h3>
            <div className="experience__content technology">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>NIST CSF, RMF</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>COBIT</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>ISO</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CISSP Domains</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CIS Controls</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>OWASP Top 10</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>GDPR</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>HIPAA</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CCPA</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>GLBA</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Consumer Credit Protection Act</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>FDCPA</h4>
              </article>
            </div>
          </div>
        </div>

        <div className=" experience__container cert">
          <div className="experience__frontend">
            <h3>Certifications</h3>
            <div className="experience__content certification">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CompTIA Sec+ (2024)</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>ISC2 (2024)</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Google Cybersecurity</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>CRISC/CISA (2024)</h4>
              </article>
            </div>
          </div>
        </div>
        <div className=" experience__container">
          <div className="experience__frontend">
            <h3>Technologies</h3>
            <div className="experience__content technology">
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Python</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>SIEM</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>NMap</h4>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>HubSpot</h4>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>OWASP Threat Dragon</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Wireshark</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Splunk</h4>
              </article>

              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>SQL</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Powershell</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Tableau</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>GSuite</h4>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>Microsoft Office Suite</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
