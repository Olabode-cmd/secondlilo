import React from 'react';
import About1 from '../../../public/images/about1.png';

export default function Sectionteam() {
  return (
    <div>
          <section className="section-team">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="header-top" data-aos="fade-up">
                              <p className="header-tag">About</p>
                              <h1 className="header-title">We're obsessed <br /> with growth</h1>
                              <p>Meet the team behind today's fastest growing brands.
                              </p>

                              <a href="about.html" className="btn btn-outline">More about us</a>
                          </div>
                      </div>

                      <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                          <img src={About1.src} alt="about" />
                      </div>
                  </div>


              </div>
          </section>

    </div>
  )
}
