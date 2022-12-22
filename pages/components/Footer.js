import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../public/images/hero-logo.svg';

export default function Footer() {
    const [footerActive, setFooterActive] = useState(false);



    useEffect(()=> {
            let faqItems = document.querySelectorAll(".foot_1 .menus .menu .heading");
            if (faqItems == null) {
                return;
            }
            console.log(faqItems)
                faqItems.forEach(function (userItem) {
                userItem.addEventListener("click", function () {
                    this.parentElement.classList.toggle("active");
                });
            });
        }, [])
    return (
        <div>
            <footer className="foot_1">
                <div className="inner">
                    <div className="top">
                        <div className="left">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={Logo.src} alt="logo" />
                                </a>
                            </div>
                            <div className="contact_info fi-03 fi-03-v05">
                                <div className="c_i_1"><a href="https://goo.gl/maps/M5WgSDvGjK6EeBQN6" target="_blank">175 Pearl St.
                                    Floors 1-3 <br />Brooklyn NY 11201</a></div>
                                <div className="c_i_2"><a href="tel:3476193312">(347) 619-3312</a><br /><a
                                    href="mailto:hello@lilosocial.com">hello@lilosocial.com</a></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="menus">
                                <div className="menu menu_1">
                                    <div className="heading fi-03 fi-03-v04">
                                        <h4>Info</h4>
                                        <span className="plus_minus_2_wrapper">
                                            <span className="plus_minus_2"></span></span>
                                    </div>
                                    <ul className="fi-03 fi-03-v05">
                                        <li><a><Link href="/">Home</Link></a></li>
                                        <li><a><Link href="/services">Services</Link></a></li>
                                        <li><a><Link href="/about">About</Link></a></li>
                                        <li><a><Link href="/careers">Careers</Link></a></li>
                                        <li><a><Link href="/contact">Contact</Link></a></li>
                                    </ul>
                                </div>
                                <div className="menu menu_2">
                                    <div className="heading fi-03 fi-03-v04">
                                        <h4>Resources</h4>
                                        <span className="plus_minus_2_wrapper">
                                            <span className="plus_minus_2"></span></span>
                                    </div>
                                    <ul className="fi-03 fi-03-v05">
                                        <li><Link href="/calculator">Calculator</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu_3">
                                    <div className="heading fi-03 fi-03-v04" onClick={()=>{setFooterActive(!footerActive)}}>
                                        <h4>Follow Us</h4>
                                        <span className="plus_minus_2_wrapper">
                                            <span className="plus_minus_2"></span></span>
                                    </div>
                                    <ul className="fi-03 fi-03-v05">
                                        <li><a href="#" target="_blank">Linkedin</a></li>
                                        <li><a href="#" target="_blank">Dribbble</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="newsletter_wrapper dotbg">
                                <div className="b12">
                                    <div className="img_bg">
                                    </div>
                                    <div className="content_wrapper">
                                        <div className="heading fi-03 fi-03-v05"><h4>Newsletter</h4></div>

                                        <div className="content fi-03 fi-03-v05">
                                            <p>Subscribe for the latest Lilo Social news &amp; case studies</p>
                                        </div>
                                        <div className="b_form b_form_input">


                                            <div id="mc_embed_signup">
                                                <form action="#" id="newsletter-form">
                                                    <div id="mc_embed_signup_scroll">
                                                        <div className="form_i_b mc-field-group">
                                                            <input type="email" defaultValue="" name="EMAIL" className="required email"
                                                                id="mce-EMAIL" placeholder="Type email address" />
                                                        </div>


                                                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                                            <input type="text" tabIndex="-1" defaultValue="" />
                                                        </div>
                                                        <p className="hidden">Thank you for subscribing</p>
                                                        <div className="clear">
                                                            <input type="submit" defaultValue="Subscribe" name="subscribe"
                                                                id="mc-embedded-subscribe" className="btn primary-btn d-inline-block" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="dotimg"></div>
                            </div>
                            <div className="contact_info fi-03 fi-03-v05">
                                <div className="c_i_1"><a href="#" target="_blank">175 Pearl St.
                                    Floors 1-3 <br />Brooklyn NY 11201</a></div>
                                <div className="c_i_2"><a href="#">(347) 619-3312</a><br /><a
                                    href="#">hello@lilosocial.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left-copy">© Lilo Social 2022 | <a href="privacy.html">Privacy Policy</a> | <a
                            href="t&c.html">Terms & Conditions</a></div>
                        <div className="right"> &nbsp;
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
