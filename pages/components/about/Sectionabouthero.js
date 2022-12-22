import React from 'react'
import dynamic from "next/dynamic";

// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Owl1 from '../../../public/images/05/01-2.png';
import Owl2 from '../../../public/images/05/02-2.png';
import Owl3 from '../../../public/images/05/03-2.png';

import OwlLeft from '../../../public/images/lines/arrow-left.svg';
import OwlRight from '../../../public/images/lines/arrow-right.svg';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function Sectionabouthero() {
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
            <section className="section-abouthero">
                <div className="container">
                    <div>
                        <h1 data-aos="fade-up">The team behind<br />today's fastest <br /> growing brands.</h1>
                    </div>
                </div>

                <OwlCarousel className="owl-one owl-carousel owl-theme owl-slide" {...options}
                    navText={[`<img src=${OwlLeft.src} />`, `<img src=${OwlRight.src} />`]}
                    >

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
