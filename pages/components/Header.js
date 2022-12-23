import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../public/images/hero-logo.svg';
// import styles from '../../styles/Lilo.module.css';

import $ from 'jquery'

export default function Header() {
    const [hamburger, setHamburger] = useState(false)

    useEffect(() => {
        let body = document.querySelector("body");
        let html = document.querySelector("html");

        if (hamburger) {
            function head_1_hamburger() {
                body.classList.add("menu_opened");
                html.classList.add("no_overflow");
            }
            return head_1_hamburger;
        } else {
            function head_1_hamburger() {
                body.classList.remove("menu_opened");
                html.classList.remove("no_overflow");
            }
            return head_1_hamburger;
        }
    }, [hamburger])

    useEffect(() => {
        window.addEventListener("load", function () {
            animatedEffect();
        });

        window.addEventListener("scroll", function () {
            head_1_sticky();
            animatedEffect();
        });

        function register() {
            head_1_sticky();
            // footerMenuToggle();
        }
        register();


        function head_1_sticky() {
            let scrollpos = window.scrollY;
            let nav = document.querySelector("header");
            // let nav = document.getElementBy('head')

            let add_class_on_scroll = () => nav.classList.add("sticky_h");
            let remove_class_on_scroll = () => nav.classList.remove("sticky_h");

            scrollpos = window.scrollY;

            if (scrollpos >= 1) {
                add_class_on_scroll();
            } else {
                remove_class_on_scroll();
            }
        }


        function animatedEffect() {
            $(".animated").each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("a_active");
                }
            });

            $(".count").each(function (i, el) {
                var el = $(el);
                if (el.visible(true) && !el.hasClass("c_active")) {
                    el.addClass("c_active");
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 2000,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                }
            });
        }

    })

    
    
  return (
    <div>
          <header className="head_1" id="head">
              <div className="inner">
                  <div className="logo">
                      <Link href="/">
                          <img src={Logo.src} alt="logo" />
                      </Link>
                  </div>
                  
                  <nav className="nav fi-03 fi-03-v05">
                      <div className="menu-header-menu-container">
                          <ul id="menu-header-menu" className="menu">
                              <li className="menu-item menu-item-object-page">
                                  <Link href="/services">Services</Link></li>
                              <li className="menu-item menu-item-object-page">
                                <Link href="/about">About</Link></li>
                              <li className="menu-item menu-item-object-page">
                                <Link href="/careers">Careers</Link></li>
                              <li className="menu-item menu-item-object-page">
                                <Link href="/contact" className="btn btn-outline mt-3">Get in touch</Link></li>
                          </ul>
                      </div>
                  </nav>
                  <div className="hamburger" onClick={()=>{setHamburger(!hamburger)}}>
                      <div className="hamburger_inner">
                          <span className="hamburger_inner_text">Open
                              menu</span>
                      </div>
                  </div>
              </div>
          </header>

    </div>
  )
}
