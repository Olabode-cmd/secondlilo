import React from 'react'

import Creative1 from '../../../public/images/05/creative1.jpg';
import Creative2 from '../../../public/images/05/creative2.jpg';
import Creative3 from '../../../public/images/05/creative3.jpg';
import Creative4 from '../../../public/images/05/creative4.jpg';
import Creative5 from '../../../public/images/05/creative5.jpg';

import Email1 from '../../../public/images/05/email1.jpg';
import Email2 from '../../../public/images/05/email2.jpg';
import Email3 from '../../../public/images/05/email3.jpg';

import Item1 from '../../../public/images/05/01.png';
import Item2 from '../../../public/images/05/02.png';
import Item3 from '../../../public/images/05/03.png';
import Playsolid from '../../../public/images/play-solid.svg';

export default function Creativecontent() {
  return (
    <div>
        <section className="section-creativerows">
            <div className="container">
                <ul className="nav justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" aria-current="page" href="#tab-one" data-bs-target="#creative" data-bs-toggle="tab">Creative</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" href="#tab-two" data-bs-toggle="tab" data-bs-target="#emails">Emails</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" href="#tab-three" data-bs-toggle="tab" data-bs-target="#landing">Landing Pages</a>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="creative" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row mt-4">
                            <div className="col-md-3 mt-2">
                                <img src={Creative2.src} alt="creative" />
                            </div>

                            <div className="col-md-3 mt-2">
                                <img src={Creative3.src} alt="creative" />
                            </div>

                            <div className="col-md-3 mt-2 video">
                                <a href="#">
                                    <img src={Creative1.src} alt="creative" className="video-img" />
                                    <div className="imgbg"></div>
                                    <img src={Playsolid.src} className="icon" alt="icon" />
                                    <p className="time">03:45</p>
                                    
                                </a>
                            </div>

                            <div className="col-md-3 mt-2">
                                <img src={Creative4.src} alt="creative" />
                            </div>

                            <div className="col-md-3 mt-2">
                                <img src={Creative5.src} alt="creative" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="emails" role="tabpanel" aria-labelledby="tab-two">
                        <div className="row mt-4 w-85">
                            <div className="col-md-4 mt-2">
                                <img src={Email1.src} alt="email" />
                            </div>

                            <div className="col-md-4 mt-2">
                                <img src={Email2.src} alt="email" />
                            </div>

                            <div className="col-md-4 mt-2">
                                <img src={Email3.src} alt="email" />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="landing" role="tabpanel" aria-labelledby="tab-three">
                        <div className="row mt-4 w-85">
                            <div className="col-md-4 mt-2">
                                <img src={Item1.src} alt="landing page" />
                            </div>

                            <div className="col-md-4 mt-2">
                                <img src={Item2.src} alt="landing page" />
                            </div>

                            <div className="col-md-4 mt-2">
                                <img src={Item3.src} alt="landing page" />
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>

    </div>
  )
}
