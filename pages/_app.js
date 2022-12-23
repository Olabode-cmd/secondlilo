import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import '../styles/Lilo.css';
// import '../styles/radio.css';
import Script from 'next/script';
import $ from 'jquery';
import { useEffect } from "react";

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {


    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        
    }, [])



    return (
        <Component {...pageProps} />

    )
}

export default MyApp