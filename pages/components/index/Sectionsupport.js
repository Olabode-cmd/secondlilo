import React from 'react'
import Google from '../../../public/images/google-partner.svg';
import Facebook from '../../../public/images/fb.svg';
import Klaviyo from '../../../public/images/klaviyo-partner-badge-light-1.svg';
import Shopify from '../../../public/images/shopify-logo.svg';

export default function Sectionsupport() {
  return (
    <div>
          <section className="section-support">
              <div className="container">
                  <div className="row">
                      <div className="col-md-8">
                          <div className="header-top white" data-aos="fade-up">
                              <p className="header-tag">Trusted Support</p>
                              <h1 className="header-title">Our Advertising Partners</h1>
                              <p>We have key partnerships with the top advertising partners required to drive growth. For any issues, support
                                  requests,
                                  new features, or general questions we are well connected and approved to support your growth.
                              </p>
                          </div>
                      </div>
                  </div>

                  <div className="col-md-10 mt-4" data-aos="fade-up">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-6 my-1">
                              <img src={Google.src} alt="Google" />
                          </div>

                          <div className="col-md-3 col-sm-6 col-6 my-1">
                              <img src={Facebook.src} alt="Facebook" />
                          </div>

                          <div className="col-md-3 col-sm-6 col-6 my-1">
                              <img src={Klaviyo.src} alt="Klaviyo" />
                          </div>

                          <div className="col-md-3 col-sm-6 col-6 my-1">
                              <img src={Shopify.src} alt="Shopify" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
