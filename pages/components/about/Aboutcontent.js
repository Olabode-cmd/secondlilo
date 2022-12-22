import React from 'react';
import dynamic from "next/dynamic";

import Clap from '../../../public/images/illustrations/clap.svg';
import Net from '../../../public/images/illustrations/net.svg';
import Bulb from '../../../public/images/illustrations/bulb.svg';
import ImageItem from '../../../public/images/05/item1-1.png';
import Forbes from "../../../public/images/05/forbes.png";
import States from '../../../public/images/05/states.png';
import Google from '../../../public/images/google-partner.svg';
import Facebook from '../../../public/images/fb.svg';
import Klaviyo from '../../../public/images/klaviyo-partner-badge-light-1.svg';
import Shopify from '../../../public/images/shopify-logo.svg';
import Cheribundi from '../../../public/images/clients/cheribundi.svg';
import NY from '../../../public/images/clients/NY.svg';
import Bauer from '../../../public/images/clients/bauer.svg';
import Bearaby from '../../../public/images/clients/bearaby.svg';
import Kwear from '../../../public/images/clients/kjaerweis.svg';
import Pez from '../../../public/images/clients/pez.svg';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

import Owl1 from '../../../public/images/05/01-3.png';
import Owl2 from '../../../public/images/03.webp';
import Owl3 from '../../../public/images/04.webp';
import Owl4 from '../../../public/images/05.webp';
import Owl5 from '../../../public/images/03.webp';
import Owl6 from '../../../public/images/04.webp'


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Aboutcontent() {
    const options = {
        margin: 10,
        loop: true,
        merge: true,
        items: 4,
        dots: false,
        nav: true,
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: true
            }
        }
    }
  return (
    <div>
        <section className="section-joinus">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-md-10 about-title">
                        <h1>What makes us, us</h1>

                        <p>
                            We are flat-out obsessed with helping eCommerce brands scale. All of our partnerships are full-funnel engagements with
                            brands we truly believe in from top to bottom. Our only focus is to support new customer acquisition and drive customer
                            retention. We engrain ourselves in the entire life-cycle of the customer journey setting us up to have the resources to
                            make a realized impact by growing revenue.
                        </p>

                        <a href="#" className="btn btn-outline">Join our team</a>
                    </div>
                </div>

                <div className="row mt-100">
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="joincard">
                            <div>
                                <h1>Independently, as one</h1>
                                <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our
                                skills and self.</p>
                            </div>

                            <img src={Clap.src} alt="clap" />
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="joincard">
                            <div>
                                <h1>Whatever it takes</h1>
                                <p>We always know the objective and we’re focused on the outcome, not the hours needed to get there.</p>
                            </div>
                    
                            <img src={Net.src} alt="net" />
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="joincard">
                            <div>
                                <h1>Solution focused</h1>
                                <p>Things happen. We’re focused on finding solutions to those problems and using an analytical approach to solving the
                                situations that come up.</p>
                            </div>
                    
                            <img src={Bulb.src} alt="bulb" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-blockquote adjust">
            <div className="container">
                <div className="quotebox adjust">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={ImageItem.src} alt="item" />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <h1 className="quotehead">“Lilo is changing the way brands approach social.”
                                </h1>
                                
                                <p className="mt-3">
                                    Rather than being looked at as a vendor, Lilo looks to integrate their team right into the brand’s team. They want
                                    to
                                    eat, sleep, and breathe the brand and make the success of the brand personal.
                                </p>
                            </div>
                            
                            <hr />
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={Forbes.src} alt="forbes" />
                                </div>
                            
                                <div className="col-md-6">
                                    <a href="#" className="btn btn-outline float-right">Read Article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="section-meetteam">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-8" data-aos="fade-up">
                            <h1>Meet The Team</h1>
                            <p>Lilo is powered by talented people that possess as wide an array of expertise and skills as they do passion for active
                                growth. We’re most proud of our diversity in background and industries, with a fully remote team that’s quickly
                                expanding across the United States.
                            </p>
                            <a href="#" className="mt-2 btn btn-outline">Join our team</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={States.src} alt="states" />
                    </div>
                </div>
            </div>

            <div className="slide">
                <OwlCarousel className="owl-two owl-carousel owl-theme owl-slide" {...options}
                    navText={[`<img src=${OwlLeft.src} />`, `<img src=${OwlRight.src} />`]}>
                
                    <div className="item">
                        <img src={Owl1.src} alt="phone" />
                    </div>
                
                    <div className="item">
                        <img src={Owl2.src} alt="phone" />
                    </div>

                    <div className="item">
                        <img src={Owl3.src} alt="phone" />
                    </div>

                    <div className="item">
                        <img src={Owl4.src} alt="phone" />
                    </div>

                    <div className="item">
                        <img src={Owl5.src} alt="phone" />
                    </div>
                    
                    <div className="item">
                        <img src={Owl6.src} alt="phone" />
                    </div>
                </OwlCarousel>
            </div>
        </section>

        <section className="section-support">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="header-top white">
                            <p className="header-tag">Trusted Support</p>
                            <h1 className="header-title">Our Advertising Partners</h1>
                            <p>We have key partnerships with the top advertising partners required to drive growth. For any
                                issues, support
                                requests,
                                new features, or general questions we are well connected and approved to support your growth.
                            </p>
                        </div>
                    </div>
                </div>
        
                <div className="col-md-10 mt-4">
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


        <section className="section-brands light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="header-top" data-aos="fade-up">
                            <p className="header-tag">Select Brands</p>
                            <h1 className="header-title">Our Trusted Partners</h1>
                            <p>Here are a few brands that trust us with increasing their conversion rates.
                            </p>
        
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="row">
                            <div className="col-4 my-1">
                                <img src={Cheribundi.src} alt="" />
                            </div>
        
                            <div className="col-4 my-1">
                                <img src={NY.src} alt="" />
                            </div>
        
                            <div className="col-4 my-1">
                                <img src={Bearaby.src} alt="" />
                            </div>
        
                            <div className="col-4 my-1">
                                <img src={Bauer.src} alt="" />
                            </div>
        
                            <div className="col-4 my-1">
                                <img src={Kwear.src} alt="" />
                            </div>
        
                            <div className="col-4 my-1">
                                <img src={Pez.src} alt="" />
                            </div>
        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
