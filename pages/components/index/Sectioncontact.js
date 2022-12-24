import React, { useEffect } from 'react';
import Contactimg from '../../../public/images/illustrations/icon_6.svg';
import Script from 'next/script';
import '../../../public/js/contact.js'

export default function Sectioncontact() {

    useEffect(() => {
        // Contact and Apply Form
        document.querySelector('#apply-form, #contact-form').addEventListener('submit', (e) => {

            e.preventDefault();

            document.querySelector('.formdiv').style.display = "none";
            document.querySelector('.subdiv').style.display = "inline-block";
        });

        // Newsletter Form
        document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();

            document.querySelector('p.hidden').style.display = "block"
        })
    })
  return (
    <div>
          <Script src="../../public/js/contact.js" />
          <section className="section-contact" data-aos="fade-up">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 scale">
                          <div className="flex-column">
                              <div className="contact-text">
                                  <h1>Let's scale your <br /> brand, together</h1>
                                  <p>Get a <a href="mailto:hello@lilosocial.com">hello@lilosocial.com</a></p>
                              </div>

                              <div className="contact-image block-990">
                                  <img src={Contactimg.src} alt="image" />
                              </div>
                          </div>
                      </div>


                      <div className="col-md-6 formdiv">
                          <form action="#" id="contact-form" name="contact">
                              <div className="form-group">
                                  <label htmlFor="name">Name <span>*</span></label>
                                  <input type="text" name="name" id="name" placeholder="Type Name" required />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="company">Company Name <span>*</span></label>
                                  <input type="text" name="company" id="company" placeholder="Type Company Name" required />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="phone">Phone</label>
                                  <input type="number" name="phone" id="phone" placeholder="Type Phone Number" />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="email">Email Address <span>*</span></label>
                                  <input type="email" name="email" id="email" placeholder="Type Email Address" required />
                              </div>

                              <div className="form-group">
                                  <label htmlFor="help">How can we help? <span>*</span></label>
                                  <textarea name="help" id="help" placeholder="A brief description here" required></textarea>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="services">Services <span>*</span></label>

                                  <div className="row mt-2">
                                      <div className="col-md-6 col-sm-12">
                                          <label htmlFor="cbx-1" className="label-cbx">
                                              <input id="cbx-1" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Creative</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label htmlFor="cbx-2" className="label-cbx">
                                              <input id="cbx-2" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Web Design & CRO</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label htmlFor="cbx-3" className="label-cbx">
                                              <input id="cbx-3" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Paid Media</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label htmlFor="cbx-4" className="label-cbx">
                                              <input id="cbx-4" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Email & SMS</p>
                                          </label>
                                      </div>
                                  </div>

                              </div>

                              {/* <input type="submit" defaultValue="Send message" id="contactsubmit" className="btn primary-btn" /> */}
                              <button type="submit" id="contactsubmit" className="btn primary-btn">Send Message</button>


                          </form>
                      </div>

                      <div className="col-md-6 subdiv">
                          <div className="submessage">
                              <h3 className="text-center">Thanks for contacting us! We will get in touch with you shortly.</h3>
                          </div>
                      </div>

                      <div className="contact-image none-990">
                          <img src={Contactimg.src} alt="image" />
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
