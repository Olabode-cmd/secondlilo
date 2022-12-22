import React from 'react'
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

import Owl1 from '../../../public/images/05/01-1.png';
import Owl2 from '../../../public/images/05/02-1.png';
import Owl3 from '../../../public/images/05/03-1.png';
import Owl4 from '../../../public/images/05/04-1.png';
import Owl5 from '../../../public/images/05/05.png';

import Quotebox from './Quotebox';
import Sarah from '../../../public/images/sarah-bishop.png';
import Cambridge from '../../../public/images/clients/cambridge.svg'

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Sectionemails() {
    const options = {
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }

    }
  return (
    <div>
        <section className="section-emails">
            <div className="container">
                <div className="row">
                    <div className="col-md-9" data-aos="fade-up">
                        <div className="section-title">
                            <h1>Email & SMS Marketing</h1>
                            <p>Our email marketing and automation services nurture leads through the funnel, driving customer acquisition and
                            retention.
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Post Purchase Funnels</h2>
                            <p>We create automated post purchase funnels to educate customers and cross-sell to drive repurchases.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Newsletter</h2>
                            <p>Our email newsletters engage and speak to your community, so you stay top-of-mind for repeat purchases.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2>SMS</h2>
                            <p>Expand your reach with highly-targeted text campaigns that instantly engage customers and drive sales.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Loyalty and Subscriptions</h2>
                            <p>We nurture the customer relationship and develop programs to drive recurring monthly revenue.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Upsells</h2>
                            <p>We implement in cart and after checkout optimizations to upsell and drive up average order value</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide" data-aos="fade-up">
                <OwlCarousel className="owl-three owl-carousel owl-theme" {...options}
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
                </OwlCarousel>
            </div>
        </section>

        <section className="section-blockquote emails-blockquote">
            <div className="container">
                <Quotebox 
                    title="“They’ve become an extension of our team”"
                    text="Across each campaign, there has been an uptick in activity. Their strategic expertise makes them stand out from other
                    companies."
                    img={Sarah.src}
                    name="Sarah Bishop"
                    position="VP of Marketing, NYC FC"
                    client={Cambridge.src} />
            </div>
        </section>
    </div>
  )
}
