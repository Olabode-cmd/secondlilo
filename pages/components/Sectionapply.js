import React from 'react';
import Apply from '../../public/images/illustrations/apply.svg';

export default function Sectionapply() {
  return (
    <div>
        <section className="section-apply" data-aos="fade-up" id="section-apply">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 scale">
                        <div className="flex-column">
                            <div className="contact-text">
                                <h1>Application Form</h1>
                                <p>Get a <a href="mailto:hello@lilosocial.com">hello@lilosocial.com</a></p>
                            </div>
        
                            <div className="apply-image block-990">
                                <img src={Apply.src} alt="image" />
                            </div>
                        </div>
                    </div>
        
        
                    <div className="col-md-6 formdiv">
                        <form action="#" id="apply-form" name="contact">
                            <div className="form-group">
                                <label htmlFor="name">Name <span>*</span></label>
                                <input type="text" name="name" id="name" placeholder="Type Name" required />
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
                                <label htmlFor="portfolio">Portfolio Link <span>*</span></label>
                                <input type="text" name="portfolio" id="portfolio" placeholder="Type link" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="linkedin">Linkedin <span>*</span></label>
                                <input type="text" name="linkedin" id="linkedin" placeholder="Type Linkedin profile here" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="help">Why should we hire you? <span>*</span></label>
                                <textarea name="help" id="help" placeholder="A brief description here" required></textarea>
                            </div>

                            <input type="submit" value="Submit Application" id="applysubmit" className="btn primary-btn" />

                        </form>
                    </div>
        
                    <div className="col-md-6 subdiv">
                        <div className="submessage">
                            <h3 className="text-center">Thanks for contacting us! We will get in touch with you shortly.</h3>
                        </div>
                    </div>
        
                    <div className="apply-image none-990">
                        <img src={Apply.src} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
