import React from 'react';
import Item1 from '../../../public/images/05/item1.png';
import Item2 from '../../../public/images/05/item2.png';

import Quotebox from './Quotebox';
import Sarah from '../../../public/images/sarah-bishop.png';
import Broadway from '../../../public/images/clients/broadway.png'

export default function Sectionmedia() {
  return (
    <div>
        <section className="section-media">
            <div className="container">
                <div className="row">
                    <div className="col-md-9" data-aos="fade-up">
                        <div className="section-title">
                            <h1>Paid Media</h1>
                            <p>Your future customers are spending hours a day on platforms such as Facebook, Instagram, and Google – we
                                meet them where
                                they are with strategic targeting and placement to cut through the noise.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Paid Social</h2>
                            <p>Engage highly-targeted audiences across social channels, generating demand and new customers.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Paid Search</h2>
                            <p>Capture the attention of active searchers looking for solutions, and help drive qualified, high-intent
                                traffic to your
                                site..</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2>Scalable Growth</h2>
                            <p>We scale ad accounts vertically and horizontally for stable, predictable growth, focusing on increased
                                lifetime value
                                and profit over time.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up">
                            <h2>Attribution</h2>
                            <p>We take a holistic approach to viewing paid advertising’s impact on revenue to understand the true
                                impacts of your
                                campaigns.</p>
                        </div>
                
                        <div className="col-md-4 mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2>Transparent Reporting</h2>
                            <p>We’ll build a robust reporting dashboard for live performance updates alongside your weekly and monthly
                                reports.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-end">
                    <div className="col-md-6">
                        <img src={Item1.src} alt="item 1" data-aos="fade-up" />
                    </div>
                
                    <div className="col-md-6">
                        <img src={Item2.src} alt="item 2" data-aos="fade-up" data-aos-delay="300" />
                    </div>
                </div>
            </div>
        </section>

        <section className="section-blockquote media-blockquote">
            <div className="container">
                <Quotebox title="“Their data-focused process is powerful”"
                    text="I’ve been pleased with the creative they’ve generated, as well as how they’ve analyzed its effectiveness"
                    img={Sarah.src}
                    name="Sarah Bishop"
                    position="VP of Marketing, NYC FC"
                    client={Broadway.src} />
            </div>
        </section>

    </div>
  )
}
