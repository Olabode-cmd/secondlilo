import React from 'react'
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

import Owl1 from '../../../public/images/05/01-2.png';
import Owl2 from '../../../public/images/05/02-2.png';
import Owl3 from '../../../public/images/05/03-2.png';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Sectioncareerhero() {
    const options = {
        margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                767: {
                    items: 2
                }
            }
    }
  return (
    <div>
        <section className="section-careerhero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div>
                            <h1>Just a team of<br />hustlers, thinkers <br /> and doers.</h1>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dotbg h-75 up">
                            <div className="roles">
                                <p>Looking for your next adventure?</p>
                                <h3>We're hiring!</h3>
                            
                                <a href="#open-roles" className="mt-2 btn btn-outline">View open roles</a>                               
                            </div>
                            <div className="dotimg w-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        
            <OwlCarousel className="owl-one owl-carousel owl-theme owl-slide" {...options}
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
            </OwlCarousel>
        </section>
    </div>
  )
}
