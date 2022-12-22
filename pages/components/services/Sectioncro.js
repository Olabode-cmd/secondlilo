import React from 'react';
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

import Owl1 from '../../../public/images/05/01.png';
import Owl2 from '../../../public/images/05/02.png';
import Owl3 from '../../../public/images/05/03.png';
import Owl4 from '../../../public/images/05/04.png';

import Quotebox from './Quotebox';
import Sarah from '../../../public/images/sarah-bishop.png';
import Cheribundi from '../../../public/images/clients/cheribundi.svg'

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Sectioncro() {

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
                items: 4
            }
        }
    }
  return (
    <div>
        <section className="section-cro">
            <div className="container">
                <div className="row">
                    <div className="col-md-9" data-aos="fade-up">
                        <div className="section-title">
                            <h1>Website Design & Optimization (CRO)</h1>
                            <p>We develop clear conversion pathways to guide customers through the buyer’s journey and increase lead volume without
                            having to increase traffic.
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Landing pages</h2>
                            <p>We identify top opportunities to improve your user experience and build optimized landing pages to maximize conversion
                            outcomes.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Website Design</h2>
                            <p>Our custom website design solutions match your marketing goals and tell your story, all while staying true to your
                            brand.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2>Shopify Development</h2>
                            <p>We offer expert engineering to expedite the development of engaging digital experiences that support growth.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Experimentation</h2>
                            <p>We develop a roadmap of tests to generate experiment-driven growth and accelerate your revenue.</p>
                        </div>
            
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Analytics</h2>
                            <p>We’ll track web performance and test results through custom dashboards to generate actionable insights and future
                            optimizations.</p>
                        </div>
                    </div>
                </div>      
            </div>

            <div className="slide" data-aos="fade-up">
                <OwlCarousel className="owl-two owl-carousel owl-theme" {...options}
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
                </OwlCarousel>
            </div>
        </section>

        <section className="section-blockquote cro-blockquote">
            <div className="container">
                <Quotebox 
                    title="“They consistently go above and beyond scope.”"
                    text="We credit our success to Lilo’s effective workflow which stems from their genuine interest in the overall success of the
                    brand."
                    img={Sarah.src}
                    name="Sarah Bishop"
                    position="VP of Marketing, NYC FC"
                    client={Cheribundi.src} />
            </div>
        </section>

    </div>
  )
}
