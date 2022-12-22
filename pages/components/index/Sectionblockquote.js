import React from 'react'

export default function Sectionblockquote(props) {
  return (
    <div>
          <section className="section-blockquote">
              <div className="container">
                  <div className="quotebox" data-aos="fade-up">
                      <div className="row align-items-end">
                          <div className="col-md-8">
                              <h1>“{props.title}”</h1>
                          </div>
                          <div className="col-md-4">
                              <p>{props.subtitle}</p>
                          </div>
                      </div>

                      <hr />

                          <div className="d-flex justify-content-between block-bottom">
                              <div className="d-flex align-items-center">
                                  <img src={props.profileimg} alt="sarah" />

                                      <div className="flex-column d-flex">
                                          <h3>{props.name}</h3>
                                          <p>{props.position}</p>
                                      </div>
                              </div>

                              <img src={props.company} alt="NY" />
                          </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
