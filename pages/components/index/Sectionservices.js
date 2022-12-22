import React from 'react';
import BRPng from '../../../public/images/illustrations/b16-br.png';
import Doug from '../../../public/images/illustrations/Doug-Bernstein.png'

export default function Sectionservices() {
  return (
    <div>
          <section className="section-services">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6" data-aos="fade-up">
                          <div className="service-flex">
                              <div className="header-top">
                                  <p className="header-tag">Services</p>
                                  <h1 className="header-title">The full-funnel approach</h1>
                                  <p>We work across the entire customer journey to create solutions that scale new customer acquisition and retention for
                                      e-commerce brands.
                                  </p>

                                  <a href="services.html" className="btn btn-outline">View Services</a>
                              </div>

                              <div className="idcard dotbg block-990">
                                  <div>
                                      <img src={BRPng.src} alt="br" className="br" />
                                          <p>
                                              Lilo has created amazing experiences for us and they always delivered on time. The ability to collaborate with Lilo
                                              makes working with them feel not like a vendor but a true partner.
                                          </p>

                                          <div className="d-flex align-items-center">
                                              <img src={Doug.src} alt="person doug" />

                                                  <div className="flex-column d-flex ms-3">
                                                      <h3 className="m-1">Doug Bernstein</h3>
                                                      <p className="m-0">VP of Social</p>
                                                  </div>
                                          </div>
                                  </div>

                                  <div className="dotimg"></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 text-right">
                          <div className="service-block" data-aos="fade-up">
                              <h1 className="me-3"><span>01.</span></h1>

                              <div className="service-content">
                                  <h1>Creative</h1>
                                  <p>We help you build a sustainable, competitive advantage through data-driven creative that establishes brand identity,
                                      engages consumers, and drives traffic.</p>
                              </div>
                          </div>

                          <div className="service-block" data-aos="fade-up" data-aos-delay="300">
                              <h1 className="me-3"><span>02.</span></h1>
                              <div className="service-content">
                                  <h1>Paid Media</h1>
                                  <p>Your future customers are spending hours a day on platforms such as Facebook, Instagram, and Google – we meet them
                                      where
                                      they are with strategic targeting and placement to cut through the noise.
                                  </p>
                              </div>
                          </div>

                          <div className="service-block" data-aos="fade-up" data-aos-delay="500">
                              <h1 className="me-3"><span>03.</span></h1>
                              <div className="service-content">
                                  <h1>Website Design & Optimization</h1>
                                  <p>You want your funnel to be a smooth path to purchase. We identify top opportunities to increase conversions, repeat
                                      traffic, and online authority across your website.
                                  </p>
                              </div>
                          </div>

                          <div className="service-block" data-aos="fade-up" data-aos-delay="700">
                              <h1 className="me-3"><span>04.</span></h1>
                              <div className="service-content">
                                  <h1>Email & SMS Marketing</h1>
                                  <p>Our email, SMS, and automation services nurture leads through the funnel, driving customer acquisition and retention.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="idcard dotbg none-990">
                          <div>
                              <img src={BRPng.src} alt="br" className="br" />
                                  <p>
                                      Lilo has created amazing experiences for us and they always delivered on time. The ability to collaborate
                                      with Lilo
                                      makes working with them feel not like a vendor but a true partner.
                                  </p>

                                  <div className="d-flex align-items-center">
                                      <img src={Doug.src} alt="person doug" />

                                          <div className="flex-column d-flex ms-3">
                                              <h3 className="m-1">Doug Bernstein</h3>
                                              <p className="m-0">VP of Social</p>
                                          </div>
                                  </div>
                          </div>

                          <div className="dotimg"></div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
