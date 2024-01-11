import "./edtree.css";

import React from "react";

const Edtree = () => {
  return (
    <section class="qualification section">
      <h2 class="section__title">Qualification</h2>
      <span class="section__subtitle">Education</span>

      <div class="qualification__container container">
        <div class="qualification__tabs">
          <div
            class="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
           
          </div>
        </div>

        <div class="qualification__sections">
          <div
            class="qualification__content qualification__active"
            data-content
            id="education"
          >
            <div class="qualification_data">
              <div></div>
              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
              <div>
                <h3 class="qualification__title">
                  MS in Information Management (MSIM)
                </h3>
                <span class="qualification__subtitle">
                  University of Washington{" "}
                </span>

                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2024
                </div>
              </div>
            </div>

            <div class="qualification_data">
              <div>
                <h3 class="qualification__title">
                  PhD (ABD) (U.S-China Science & Technology Relationship)
                </h3>
                <span class="qualification__subtitle">Yonsei University</span>

                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2018
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            <div class="qualification_data">
              <div></div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>

              <div>
                <h3 class="qualification__title">M.A East Asian Studies</h3>
                <span class="qualification__subtitle">University of Delhi</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2016
                </div>
              </div>
            </div>

            <div class="qualification_data">
              <div>
                <h3 class="qualification__title">
                  Bachelor of Law B.S.L-LLB (JD){" "}
                </h3>
                <span class="qualification__subtitle">
                  Indian Law Soc. Law College{" "}
                </span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2014
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edtree;
