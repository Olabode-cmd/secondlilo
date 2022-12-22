import React from 'react';
import dynamic from "next/dynamic";
import Quotebox from './Quotebox';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

import Phone1 from '../../../public/images/phone1.png';
import Phone2 from '../../../public/images/phone2.png';
import Phone3 from '../../../public/images/phone3.png';
import Phone4 from '../../../public/images/phone4.png';
import Phone5 from '../../../public/images/phone5.png';
import Sarah from '../../../public/images/sarah-bishop.png';
import Pez from '../../../public/images/clients/pez.svg';


var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Sectioncreative() {
    const options = {
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    }
    return (
        <div>
            <section className="section-creative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9" data-aos="fade-up">
                            <div className="section-title">
                                <h1>Creative</h1>
                                <p>We build high-quality, direct-response creative that communicates your unique value proposition in an engaging
                                    and
                                    memorable way, to establish brand identity and maximize impact.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-4 mt-3" data-aos="fade-up">
                                <h2>Post Production</h2>
                                <p>By utilizing existing brand content, our post-production process is designed to get the most out of your content and
                                    maximize ad creation.</p>
                            </div>

                            <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                                <h2>UGC Content Creation</h2>
                                <p>Using influencer and user-generated content, we create native-looking content that drives superior engagement and drives
                                    demand.</p>
                            </div>

                            <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                                <h2>Studio Production</h2>
                                <p>We offer professional photo and video production to capture and engage your consumers and increase purchases from the
                                    first impression.</p>
                            </div>

                            <div className="col-md-4 mt-3" data-aos="fade-up">
                                <h2>Branded Design</h2>
                                <p>We ensure brand cohesiveness across channels to clearly communicate your value proposition and differentiate your brand
                                    visually.</p>
                            </div>

                            <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                                <h2>Optimization</h2>
                                <p>Once we’ve found a creative that is working, we iterate through data-driven variations to improve performance and
                                    maximize returns.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide" data-aos="fade-up">
                    <OwlCarousel className="owl-one owl-carousel owl-theme" {...options}
                        navText={[`<img src=${OwlLeft.src} />`, `<img src=${OwlRight.src} />`]}>
                        <div className="item">
                            <img src={Phone1.src} alt="phone" />
                        </div>

                        <div className="item">
                            <img src={Phone2.src} alt="phone" />
                        </div>

                        <div className="item">
                            <img src={Phone3.src} alt="phone" />
                        </div>

                        <div className="item">
                            <img src={Phone4.src} alt="phone" />
                        </div>

                        <div className="item">
                            <img src={Phone5.src} alt="phone" />
                        </div>
                    </OwlCarousel>
                </div>
            </section>

            <section className="section-blockquote creative-blockquote">
                <div className="container">
                    <Quotebox
                        title="“Lilo Social has unparalled creativity”"
                        text="We trust Lilo to provide creative that supports our brands’ 90 years of nostalgia. We would highly recommend them for
                        their unparalleled creativity."
                        img={Sarah.src}
                        name="Sarah Bishop"
                        position="VP of Marketing, NYC FC"
                        client={Pez.src} />
                </div>
            </section>
        </div>
    )
}
