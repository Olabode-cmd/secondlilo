import React, { useEffect } from 'react';
import Money from '../../../public/images/illustrations/money.svg';
import Flower from '../../../public/images/illustrations/flower.svg';
import Increase from '../../../public/images/illustrations/increase.svg';

import CountUp from 'react-countup';


export default function Sectionabout() {

  return (
    <div>
          <section className="section-about">
              <div className="container">
                  <div className="top-text" data-aos="fade-up">
                      <h1>We scale brands</h1>
                      <p>We work alongside your brand team as your growth partner, with a true in-house feel. We have a track record of
                          helping
                          to engineer high-performing strategies to scale your brand, profitably.
                      </p>
                  </div>

                  <div className="row pt-50">
                      <div className="col-md-4">
                          <div className="cardbg" data-aos="fade-up">
                              <div>
                                  <h1>$<span className="counter1">
                                        <CountUp end={44} duration={4} />
                                    </span>M</h1>
                                  <p>Trackable revenue generated across our portfolio</p>
                              </div>

                              <img src={Money.src} alt="money" />
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="cardbg" data-aos="fade-up" data-aos-delay="500">
                              <div>
                                  <h1><span className="counter2">
                                        <CountUp end={240} duration={4} />
                                    </span>%</h1>
                                  <p>Average yearly growth rate across our clients</p>
                              </div>

                              <img src={Flower.src} alt="flower" />
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="cardbg" data-aos="fade-up" data-aos-delay="700">
                              <div>
                                  <h1><span className="counter3">
                                        <CountUp end={90} duration={4} />
                                    </span>%</h1>
                                  <p>Increase in ROAS compared to previous results</p>
                              </div>

                              <img src={Increase.src} alt="increase" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
