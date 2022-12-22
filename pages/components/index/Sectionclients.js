import React from 'react';
import Cheribundi from '../../../public/images/clients/cheribundi.svg';
import NY from '../../../public/images/clients/NY.svg';
import Bauer from '../../../public/images/clients/bauer.svg';
import Bearaby from '../../../public/images/clients/bearaby.svg';
import Kwear from '../../../public/images/clients/kjaerweis.svg';
import Pez from '../../../public/images/clients/pez.svg';


export default function Sectionclients() {
  return (
    <div>
          <section className="section-clients" data-aos="fade-up">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={Cheribundi.src} className="firstimg" alt="cheribundi" />
                      </div>

                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={NY.src} alt="ny" className="ny-img" />
                      </div>

                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={Bauer.src} alt="bauer" />
                      </div>

                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={Bearaby.src} alt="bearaby" />
                      </div>

                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={Kwear.src} alt="kjaerweis" />
                      </div>

                      <div className="col-md-2 col-sm-4 col-4 my-1">
                          <img src={Pez.src} alt="pez" />
                      </div>

                  </div>
              </div>
          </section>
    </div>
  )
}
