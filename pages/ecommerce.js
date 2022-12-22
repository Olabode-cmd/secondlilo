import React, { useEffect } from 'react';
import Head from 'next/head';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sectionapply from './components/Sectionapply';

export default function ecommerce() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Head>
                <title>Lilo Social || Landing Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>

            <main>
                <Header />
                <section className="section-roles">
                    <div className="row roles">
                        <div className="col-md-6 left">
                            <div className="container sticky">
                                <h1 className="title">Ecommerce Growth Lead</h1>
                                <p className="subtitle">Lilo Social is hiring a full-time ecommerce growth lead to lead a team and strategize solutions to help our clients grow
                                    their businesses.</p>


                                <div className="applybox">
                                    <div>
                                        <p>
                                            Full-time
                                        </p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2>Remote</h2>

                                            <div className="ms-3">
                                                <a href="#section-apply" className="btn btn-outline">Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dotspace"></div>
                            </div>

                        </div>
                        <div className="col-md-6 right">
                            <div className="right-content">
                                <h1>The Position</h1>
                                <p>As a business development specialist, you will foster inbound and outbound leads to build a
                                    healthy pipeline for the
                                    agency and sales team. You will bring the ability to build pipelines from various sources
                                    and have experience with
                                    managing a CRM. In this role, you will need to be self-started and be excited about the
                                    challenge of reaching
                                    monthly
                                    lead targets to help turn leads into sales opportunities.</p>

                                <p>In this role, a day to day will be focused on connecting prospects with the sales team
                                    through cold calls, emails,
                                    LinkedIn messenger, and other platforms. You will represent Lilo Social in your outreach and
                                    will speak to every
                                    prospect with professionalism as you will be the first face they will meet from the agency.
                                </p>

                                <h1>Responsibilities</h1>
                                <ul>
                                    <li>A major focus on generating qualified leads for Lilo Social through outbound calling,
                                        email, and LinkedIn
                                        engagement.</li>
                                    <li>Maintain an efficient calendar to ensure availability for calls with prospecting
                                        clients.</li>
                                    <li>Manage a calendar with daily availability to take calls with prospects to share Lilo
                                        Social’s services and
                                        qualify them
                                        for the sales team.</li>
                                    <li>Coordinate video meetings for the sales team with qualified sales leads.</li>
                                    <li>Effectively use lead-generating tools such as Zoominfo, and LinkedIn Sales Navigator to
                                        meet and connect with
                                        qualified
                                        leads..</li>
                                    <li>Work with the management team to collaborate and drive demand generation to hit company
                                        sales and growth goals.
                                    </li>
                                </ul>

                                <h1>Defining Success</h1>
                                <ul>
                                    <li>Hitting monthly, quarterly, and annual lead generation targets.</li>
                                    <li>Learn, understand, and can confidently share Lilo Social’s services with leads.</li>
                                    <li>Properly qualify leads as potential sales opportunities.</li>
                                </ul>

                                <h1>Company Overview</h1>
                                <p>Lilo Social is a growth marketing agency focused on on full-funnel marketing delivering
                                    best-in-class paid media and
                                    creative services for a wide range of eCommerce brands focused on scaling. We work across
                                    the entire life-cycle of
                                    the
                                    customer journey covering content creation, ad production, paid media, conversion rate
                                    optimization, and email/sms
                                    marketing. Select clients include Cheribundi, NYC FC, BAUER, Spcy, Bear Mountain BBQ, and
                                    Toynk.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Sectionapply />
            </main>
            <Footer />
        </div>
    )
}
