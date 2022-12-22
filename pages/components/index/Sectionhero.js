import React from 'react';
import Link from 'next/link';
import Phonecase from "../../../public/images/phone-case.png";


export default function Sectionhero() {
    return (
        <div>
            <section className="section-hero">
                <div className="container">
                    <div className="row pt-50">
                        <div className="col-md-6 pt-50" data-aos="fade-up">
                            <h1>Your Ecommerce <br /> Growth Agency</h1>
                            <p>
                                We help e-commerce brands scale by bringing data driven decisions and creativity together for a full-funnel marketing
                                approach.
                            </p>

                            <div className="d-flex">
                                <Link href="/contact" className="btn primary-btn me-3 d-inline-block">Get in touch</Link>
                                <Link href="/creative" className="btn btn-outline">View work</Link>
                            </div>
                        </div>
                        <div className="col-md-6 video">
                            <video className="align-self-end" autoPlay muted loop>
                                <source src={'/videos/LiloSocial_website_header_1_504x1092_110121_V3.mp4'} />
                            </video>
                            <img src={Phonecase.src} alt="phone case" className="absolute-img" />
                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        )
}
