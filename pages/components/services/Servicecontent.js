import React from 'react';

import Funnel from '../../../public/images/funnel.png';
import Textborder from '../../../public/images/illustrations/text_border.svg';
import Soundsgreat from '../../../public/images/illustrations/it_sounds_great.svg';
import BR from '../../../public/images/illustrations/b16-br.png';
import Doug from '../../../public/images/illustrations/Doug-Bernstein.png'
import Cheribundi from '../../../public/images/clients/cheribundi.svg';
import NY from '../../../public/images/clients/NY.svg';
import Bauer from '../../../public/images/clients/bauer.svg';
import Bearaby from '../../../public/images/clients/bearaby.svg';
import Kwear from '../../../public/images/clients/kjaerweis.svg';
import Pez from '../../../public/images/clients/pez.svg';

export default function Servicecontent() {
    return (
        <div>
            <section className="section-funnel">
                <div className="row align-items-center funnel-flex">
                    <div className="col-md-5">
                        <div className="funnel-img">
                            <img src={Funnel.src} alt="funnel" />
                        </div>
                    </div>
                    <div className="col-md-7" data-aos="fade-up" data-aos-delay="300">
                        <div className="texttop">
                            <p className="texttop-tag">How we do it</p>
                            <h1>The <span className="funnel-r">Full-Funnel <img src={Textborder.src} alt="text border" className="border-line" />
                                <img src={Soundsgreat.src} alt="sounds great" className="text-great" />
                            </span> <br /> Approach
                            </h1>

                        </div>

                        <p>
                            A full-funnel marketing approach allows our team to work across the entire customer journey and create
                            solutions for the
                            fundamental needs to scale new customer acquisition and retention for e-commerce brands. We begin at top of
                            the funnel
                            by casting a wide net to capture as many prospects as possible. As prospects move down the marketing becomes
                            highly
                            focused, targeting the most qualified audience with the highest propensity to convert.
                        </p>

                        <span>Includes</span>

                        <div className="d-flex flex-wrap mt-2">
                            <span className="tag">Creative</span>
                            <span className="tag">Paid Media</span>
                            <span className="tag">Email + SMS</span>
                            <span className="tag">Website Optimization (CRO)</span>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="service-flex">
                                <div className="header-top">
                                    <p className="header-tag">How we do it</p>
                                    <h1 className="header-title">We'll scale your brand alongside you</h1>
                                </div>

                                <div className="idcard dotbg block-990">
                                    <div>
                                        <img src={BR.src} alt="br" className="br" />
                                        <p>
                                            Lilo has created amazing experiences for us and they always delivered on time. The ability to collaborate
                                            with Lilo
                                            makes working with them feel not like a vendor but a true partner.
                                        </p>

                                        <div className="d-flex align-items-center">
                                            <img src={Doug.src} alt="person doug" />

                                            <div className="flex-column d-flex ms-3">
                                                <h3 className="m-1">Doug Bernstein</h3>
                                                <p className="m-0">VP of Social</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dotimg"></div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 text-right">
                            <div className="service-block" data-aos="fade-up">
                                <h1 className="me-3"><span>01.</span></h1>

                                <div className="service-content">
                                    <h1>Creative</h1>
                                    <p>We help you build a sustainable, competitive advantage through data-driven creative that
                                        establishes brand identity,
                                        engages consumers, and drives traffic.</p>
                                </div>
                            </div>

                            <div className="service-block" data-aos="fade-up">
                                <h1 className="me-3"><span>02.</span></h1>
                                <div className="service-content">
                                    <h1>Paid Media</h1>
                                    <p>Your future customers are spending hours a day on platforms such as Facebook, Instagram, and
                                        Google – we meet them
                                        where
                                        they are with strategic targeting and placement to cut through the noise.
                                    </p>
                                </div>
                            </div>

                            <div className="service-block" data-aos="fade-up">
                                <h1 className="me-3"><span>03.</span></h1>
                                <div className="service-content">
                                    <h1>Website Design & Optimization</h1>
                                    <p>You want your funnel to be a smooth path to purchase. We identify top opportunities to
                                        increase conversions, repeat
                                        traffic, and online authority across your website.
                                    </p>
                                </div>
                            </div>

                            <div className="service-block" data-aos="fade-up">
                                <h1 className="me-3"><span>04.</span></h1>
                                <div className="service-content">
                                    <h1>Email & SMS Marketing</h1>
                                    <p>Our email, SMS, and automation services nurture leads through the funnel, driving customer
                                        acquisition and retention.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="idcard dotbg none-990">
                            <div>
                                <img src={BR.src} alt="br" className="br" />
                                <p>
                                    Lilo has created amazing experiences for us and they always delivered on time. The ability to collaborate
                                    with Lilo
                                    makes working with them feel not like a vendor but a true partner.
                                </p>

                                <div className="d-flex align-items-center">
                                    <img src={Doug.src} alt="person doug" />

                                    <div className="flex-column d-flex ms-3">
                                        <h3 className="m-1">Doug Bernstein</h3>
                                        <p className="m-0">VP of Social</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dotimg"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-brands">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="header-top">
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

            <div className="fadebg">
                &nbsp;
            </div>
        </div>
    )
}
