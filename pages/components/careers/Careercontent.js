import React from 'react';
import Link from 'next/link';

import Item1 from '../../../public/images/item1-2.png';
import Boat from '../../../public/images/illustrations/icon_24.svg';
import Benefit1 from '../../../public/images/illustrations/benefit-1.svg';
import Benefit2 from '../../../public/images/illustrations/benefit-2.svg';
import Benefit3 from '../../../public/images/illustrations/benefit-3.svg';
import Benefit4 from '../../../public/images/illustrations/benefit-4.svg';
import Benefit5 from '../../../public/images/illustrations/benefit-5.svg';
import Benefit6 from '../../../public/images/illustrations/benefit-6.svg';
import Positions from '../../../public/images/illustrations/positions.svg';
import Arrow from '../../../public/images/illustrations/position-arrow.svg';

export default function Careercontent() {
  return (
    <div>
        <section className="section-whatabout">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-6 images" data-aos="fade-up">
                        <div className="header-top">
                            <p className="header-tag">Our Culture</p>
                            <h1 className="header-title">What we're <br /> all about</h1>
                        </div>

                        <div className="block-990 mt-4">
                            <img src={Item1.src} alt="item" />
                        </div>
                    </div>

                    <div className="col-md-6 texts" data-aos="fade-up" data-aos-delay="300">
                        <p>
                            Here at Lilo Social, we are focused on building a like-minded team of hustlers who find interest in solution-based
                            thinking. Our attitude is always positive, no matter the obstacle, and an outlook that we can always find a way to
                            succeed.
                        </p>
                        <p>
                            With a fully remote team, we are diverse and inclusive, taking advantage of all that work from home has to offer. Even
                            still, relationship building with colleagues and constant communication is flowing through each and every day.
                        </p>
                        <p>
                            We encourage our team to explore and live life in and outside of work, taking advantage of every opportunity set in
                            front of you.
                        </p>
                    </div>

                    <div className="none-990 mt-4">
                        <img src={Item1.src} alt="item" />
                    </div>

                </div>
            </div>
        </section>

        <section className="section-value">
            <div className="container">
                <div className="row">
                    <div className="col-md-5" data-aos="fade-up">
                        <h1>What we value</h1>
                        <p>Our team is made up of all different backgrounds from all over the world. There’s plenty of things that bring us
                        together, but these are the one’s we’re sharing with you here for everyone to see.
                        </p>
                        <a href="about.html" className="mt-2 btn btn-outline">More about us</a>
                    </div>

                    <div className="col-md-7 block-990">
                        <img src={Boat.src} alt="boat" />
                    </div>
                </div>

                <div className="section-content">
                    <div className="row">
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>If it's not broken, break it</h2>
                            <p>Just because everyone is doing it, doesn’t mean we should, and most of the times means we want to go in the opposite
                            direction.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>You're never alone</h2>
                            <p>Lilo Social is a collaborative environment. If you’ve never done something before,
                            there’s a chance someone on the team can show you a way to get that done.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2>Figure it out, fast</h2>
                            <p>A lot of times we do things we have never done before. So we figure it out as a team and at the end of the day, it’s
                            been a hell of a good time.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Get out of the comfort zone</h2>
                            <p>We’ll take the time to learn new endeavors, skills, and projects, knowing that at the end of it – we’ll be a more
                            complete team than when we started.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Independently, as one</h2>
                            <p>We believe that the only way for the team to grow, is for each person to grow personally. And when the whole team is
                            growing, so will the company.</p>
                        </div>

                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2>Results that matter</h2>
                            <p>We take pride in the work we create for all the brands we work with, and to see them actively growing their business is
                            pretty freakin’ awesome!</p>
                        </div>
                    </div>
                </div>

                <div className="none-990 mt-4">
                    <img src={Boat.src} alt="boat" />
                </div>
            </div>
        </section>


        <section className="section-benefit">
            <div className="container">
               <h1 data-aos="fade-up">Benefits that <br /> support you</h1>

            <div className="section-content benefit">
                <div className="row">
                    <div className="col-md-4 mt-3" data-aos="fade-up">
                        <img src={Benefit1.src} alt="benefit" />
                        <h2>401K+ Matching</h2>
                        <p>We invest in your future with a fully customizable 401k plan with up to 4% match..</p>
                    </div>
            
                    <div className="col-md-4 mt-3 shrink" data-aos="fade-up" data-aos-delay="300">
                        <img src={Benefit2.src} alt="benefit" />
                        <h2>Medical benefits</h2>
                        <p>Stay healthy with our comprehensive health, dental, and vision plans.</p>
                    </div>
            
                    <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                        <img src={Benefit3.src} alt="benefit" />
                        <h2>PTOs and Holidays</h2>
                        <p>A healthy work-life balance is key. Our generous vacation policy and holiday schedule helps maintain that.</p>
                    </div>
            
                    <div className="col-md-4 mt-3" data-aos="fade-up">
                        <img src={Benefit4.src} alt="benefit" />
                        <h2>Mental health stipend</h2>
                        <p>We take wellness seriously. Everyone receives a Headspace subscriptions and fitness stipend.</p>
                    </div>
            
                    <div className="col-md-4 mt-3 shrink" data-aos="fade-up" data-aos-delay="300">
                        <img src={Benefit5.src} alt="benefit" />
                        <h2>Work from anywhere</h2>
                        <p>We’re headquartered in Brooklyn, NY, but our fully remote staff has the freedom to work from anywhere.</p>
                    </div>
            
                    <div className="col-md-4 mt-3 shrink" data-aos="fade-up" data-aos-delay="500">
                        <img src={Benefit6.src} alt="benefit" />
                        <h2>Technology supplied</h2>
                        <p>Get supplied with the latest technology. Unless it’s a lazer beam gun, we’ve got you covered!</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="section-positions" id="open-roles">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-items-center">
                        <div className="flex-column">
                            <h1 className="title">Open positions</h1>

                            <img src={Positions.src} className="block-990" alt="position" />
                        </div>
                    </div>

                    <div className="col-md-6 positions" data-aos="fade-up">
                        <div className="border-bottom">
                            <Link href="/business" className="d-flex align-items-start">
                                <h1>Business Development <br /> Specialist</h1>
                                
                                <div>
                                    <img src={Arrow.src} alt="icon" />
                                </div>
                            </Link>
                        </div>

                        <div className="border-bottom">
                            <Link href="/project" className="d-flex">
                                <h1>Project Manager</h1>
                                
                                <div>
                                    <img src={Arrow.src} alt="icon" />
                                </div>
                            </Link>
                        </div>

                        <div className="border-bottom">
                            <Link href="/mediabuyer" className="d-flex">
                                <h1>Paid Search Media Buyer</h1>
                        
                                <div>
                                    <img src={Arrow.src} alt="icon" />
                                </div>
                            </Link>
                        </div>

                        <div className="border-bottom">
                            <Link href="/ecommerce" className="d-flex">
                                <h1>Ecommerce Growth Lead</h1>
                        
                                <div>
                                    <img src={Arrow.src} alt="icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
