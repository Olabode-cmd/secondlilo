import React from 'react';
import Mainimg from '../../../public/images/main-img.jpg';
import Item1 from '../../../public/images/item1.jpg';
import Item2 from '../../../public/images/item2.jpg';
import Item3 from '../../../public/images/item3.jpg';

export default function Sectionpartners() {
  return (
    <div>
          <section className="section-partners">
              <div className="container">
                  <div className="header-top" data-aos="fade-up">
                      <p className="header-tag">Work</p>
                      <h1 className="header-title">Trusted Partners</h1>
                  </div>

                  <div className="partners-img">
                      <div className="main-img" data-aos="fade-up">
                          <img src={Mainimg.src} alt="main img" />
                      </div>

                      <div className="floatcard" data-aos="fade-up" data-aos-delay="400">
                          <h1>Cheribundi</h1>
                          <h4>Driving topline revenue for a natural performance drink brand.</h4>
                          <p>
                              Focused on the anti-inflammatory benefits of tart cherry juice, we took charge of the brand's performance marketing and
                              email initiatives to drive topline revenue through DTC sales.
                          </p>

                          <div className="id dotbg">
                              <div>
                                  <p>
                                      Lilo consistently goes above and beyond scope. Their continued effort has recently unlocked our best month of DTC
                                      sales
                                      yet.
                                  </p>

                                  <div className="ps-3">
                                      <h3 className="m-0">Nicole Blaker</h3>
                                      <p>SR Marketing Manager</p>
                                  </div>

                                  <div className="dotimg"></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="row mt-50">
                      <div className="col-md-4">
                          <div className="img-card" data-aos="fade-up" data-aos-delay="200">
                              <img src={Item1.src} alt="item" />
                                  <div className="img-card-text">
                                      <h1>Bearaby</h1>
                                      <p className="thick">Scaling the coziest weighted blanket through paid acquisition.</p>
                                      <p>We helped the highly-rated weighted blanket company expand its brand across social and get cozy with its national
                                          audience.</p>
                                  </div>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="img-card" data-aos="fade-up" data-aos-delay="400">
                              <img src={Item2.src} alt="item" />
                                  <div className="img-card-text">
                                      <h1>Kjaer Weis</h1>
                                      <p className="thick">Bringing the luxury makeup brand direct-to-consumer.</p>
                                      <p>With an extremely successful retail business, it was time to scale Kjaer Weis’s eCommerce business through Facebook and
                                          Google Ads.</p>
                                  </div>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="img-card" data-aos="fade-up" data-aos-delay="600">
                              <img src={Item3.src} alt="item" />
                                  <div className="img-card-text">
                                      <h1>PEZ Candy</h1>
                                      <p className="thick">Creating nostalgic content with a modern twist.</p>
                                      <p>Led content production for social ads to lift creative direction and bring a bright and modern feel to a nostalgic
                                          brand.</p>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
