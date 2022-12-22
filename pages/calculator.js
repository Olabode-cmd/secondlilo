import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';

import Logo from '../public/images/hero-logo.svg';

export default function Calculator() {
    // useEffect(() => {
    // function hideGroup1() {
    //     document.querySelector('.form-group.agency').style.display = 'none';
    // }
    // function showGroup1() {
    //     document.querySelector('.form-group.agency').style.display = 'block';
    // }

    // function hideGroup2() {
    //     document.querySelector('.form-group.shipping').style.display = 'none';
    // }
    // function showGroup2() {
    //     document.querySelector('.form-group.shipping').style.display = 'block';
    // }

    // if (inputOne) {
    //     document.querySelector('.form-group.agency').classList.add = 'd-block';
    // }
    // })

    // initial value is `false`
    const [checked, setChecked] = useState(false);
    const [secondChecked, setSecondChecked] = useState(false);

    const handleChange = (e) =>{
        setChecked(e)
    }
    const handleSecondChange = (e) => {
        setSecondChecked(e)
    }


    return (
        <div>
            <Head>
                <title>Lilo Social || Calculator</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon1.ico" />
            </Head>

            {/* <Header /> */}

            <div className="section-calc">
                <div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="left-form">
                                <div className="logo-box">
                                    <a href="index.html">
                                        <img src={Logo.src} alt="logo" />
                                    </a>
                                </div>

                                <div className="cover">
                                    <div className="inner-content">
                                        <h1 className="title">
                                            See how your ad performance and spend effect your revenue.
                                        </h1>
                                        <p className="subtitle">
                                            Understanding your costs and revenue from an ads dashboard can be difficult. Insert some of your
                                            baseline metrics,
                                            and
                                            we’ll show you how an increase in spend or performance effects your bottom line.
                                        </p>
                                    </div>

                                    <hr />

                                    <form action="#">
                                        <div className="inner-content">
                                            <div className="row mt-50 mb-50">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">Average order value *</label>
                                                        <input type="text" name="order" placeholder="100.00" className="p-left" />
                                                        <span className="left">$</span>
                                                    </div>
                                                </div>

                                                {/* <!-- <div className="flexbreak"></div> --> */}

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="profit" className="d-block">Average profit margins *</label>
                                                        <input type="text" name="profit" placeholder="80" className="avgprofit" />
                                                        <span className="input-label right">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />

                                        <form action="#">
                                            <div className="inner-content">
                                                <div className="col-md-6 mt-50 mb-50">
                                                    <div className="form-group">
                                                        <label htmlFor="profit">Credit Card Processing fee *</label>
                                                        <input type="text" name="profit" placeholder="80" className="p-left w-50" />
                                                        <span className="left">%</span>
                                                    </div>
                                                </div>

                                                <label>Agency Fee *</label>
                                                <ul>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex">
                                                                <input id="r1" type="radio"
                                                                    name="percentage"
                                                                    value={checked}
                                                                    checked={checked == true}
                                                                    onChange={()=>handleChange(true)} 
                                                                    className="agencydot"
                                                                />
                                                                {/* <!-- value="igottwo" onclick="show2();" --> */}
                                                                <label htmlFor="r1">Percentage</label>
                                                            </div>

                                                            {checked && (
                                                                <div className="form-group agency">
                                                                    <label htmlFor="profit">&nbsp;</label>
                                                                    <input type="text" name="profit" placeholder="80" className="p-left w-50" />
                                                                    <span className="left">%</span>
                                                                </div>

                                                            )}

                                                        </div>

                                                    </li>
                                                    <li>
                                                        <input id="r2" type="radio" name="radio" 
                                                                    value={checked}
                                                                    checked={checked == false}
                                                                    onChange={()=>handleChange(false)} 
                                                        />
                                                        <label htmlFor="r2">No Agency Fee</label>
                                                    </li>
                                                </ul>

                                                <label>Shipping Cost of each order *</label>
                                                <ul>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="d-flex">
                                                                <input id="r3" type="radio" name="radio2"
                                                                    value={secondChecked}
                                                                    checked={secondChecked == true}
                                                                    onChange={()=>handleSecondChange(true)} />
                                                                {/* <!-- value="igottwo" onclick="show2();" --> */}
                                                                <label htmlFor="r3">Paid&nbsp;by&nbsp;myself</label>
                                                            </div>

                                                            {secondChecked && (
                                                                <div className="form-group shipping">
                                                                <label htmlFor="profit">&nbsp;</label>
                                                                <input type="text" name="profit" placeholder="80" className="p-left w-50" />
                                                                <span className="left">$</span>
                                                            </div>
                                                            )}
                                                            
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <input id="r4" type="radio" name="radio2"
                                                            value={secondChecked}
                                                            checked={secondChecked == false}
                                                            onChange={()=>handleSecondChange(false)} />
                                                        <label htmlFor="r4">Paid by Customer</label>
                                                    </li>
                                                </ul>
                                            </div>

                                            <hr />

                                            <div className="inner-content">
                                                <div className="col-md-12 mt-50">
                                                    <div className="form-group">
                                                        <label htmlFor="profit" className="d-block">intended monthly spend *</label>
                                                        <input type="text" placeholder="80" className="p-left w-50" />
                                                        <span className="left">$</span>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="w-75 d-block">how much of profit would you love to see after all
                                                            expense? *</label>
                                                        <input type="text" placeholder="80" className="p-left w-50" />
                                                        <span className="left">$</span>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-50 mb-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">customer lifetime value *</label>
                                                        <input type="text" placeholder="80" className="p-left w-50" />
                                                        <span className="left">$</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="inner-content">
                                                <div className="col-md-12 mt-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">first name *</label>
                                                        <input type="text" name="order" placeholder="First Name" className="w-75" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">last name *</label>
                                                        <input type="text" name="order" placeholder="Last Name" className="w-75" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">company name *</label>
                                                        <input type="text" name="order" placeholder="Company Name" className="w-75" />
                                                    </div>
                                                </div>

                                                <div className="col-md-12 mt-50 mb-50">
                                                    <div className="form-group">
                                                        <label htmlFor="order" className="d-block">email *</label>
                                                        <input type="text" name="order" placeholder="Email" className="w-75" />
                                                    </div>
                                                </div>
                                            </div>

                                            <hr />

                                            <div className="inner-content">
                                                <input type="submit" className="btn primary-btn mx-auto w-75 my-4" value="Submit" />
                                            </div>
                                        </form>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 bg-grey">
                            <div className="right-box">
                                <div className="container">
                                    <div className="box-wrapper">
                                        <div className="whitebox">
                                            <h3>Complete the form to the left</h3>

                                            <h1>Calculate your profit with one click</h1>

                                            <hr />

                                            <p>If you have any questions, <br /> please reach out to hello@lilosocial.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}