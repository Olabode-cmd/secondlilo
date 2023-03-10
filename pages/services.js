import React, { useEffect } from "react";
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sectionservicehero from "./components/services/Sectionservicehero";
import Servicecontent from "./components/services/Servicecontent";
import Sectioncreative from "./components/services/Sectioncreative";
import Sectionmedia from "./components/services/Sectionmedia";
import Sectioncro from "./components/services/Sectioncro";
import Sectionemails from "./components/services/Sectionemails";
import Sectioncontact from "./components/index/Sectioncontact";

export default function Services() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>

            <Header />
            <Sectionservicehero />
            <Servicecontent />
            <Sectioncreative />
            <Sectionmedia />
            <Sectioncro />
            <Sectionemails />
            <Sectioncontact />
            <Footer />
        </div>
    )
}