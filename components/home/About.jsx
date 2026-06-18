'use client';
import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <Image
                  src="/assets/imgs/about.png"
                  alt="About MCKY"
                  width={500}
                  height={500}
                  className="rounded"
                />
              </div>
             
              <span className="icon">
                <Image
                  src="/assets/imgs/resume/icon4.png"
                  alt="Icon"
                  width={40}
                  height={40}
                />
              </span> 
            </div>
          </div>

          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About MCKY</h6>
              <div className="text">
                <h4 className="mb-6 text-2xl font-bold">
                  MCKY <span className="font-light">— What is MCKY?</span>
                </h4>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  MCKY is an event technology services company founded in *2017* and based in *Bekasi, Indonesia*.

What started in a garage has grown into a trusted partner for *national and international events*. Built by professionals with deep roots in broadcast television and live production, MCKYwas shaped by one principle:
*live events must be engineered with precision, then brought to life creatively.*

Today, we deliver broadcast production, live production, multimedia systems, system integration, and graphic content—designed to work as one seamless ecosystem. Our team combines experienced broadcast directors, camera operators, engineers, and creative specialists to build systems that are reliable, scalable, and visually powerful.

From corporate forums to international-scale events, MCKY engineers the technology and visuals behind live experiences—ensuring every moment performs exactly as intended.

                  <span className="font-semibold text-light"> 6 years</span>,
                  we have been committed to consistent quality and flawless productions
                  across <span className="italic">Live</span>, <span className="italic">Hybrid</span>, and <span className="italic">Virtual</span> events.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clients Satisfaction
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <Image
                              src="/assets/imgs/arw0.png"
                              alt="Arrow"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">40</h3>
                          <h6 className="p-color sub-title">
                            Projects Completed
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <Image
                              src="/assets/imgs/arw0.png"
                              alt="Arrow"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
