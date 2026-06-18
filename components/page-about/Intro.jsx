'use client';
import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <Image
                    src="/assets/imgs/intro/intro1.png"
                    alt="Intro Image 1"
                    width={500}
                    height={500}
                    className="w-100 h-auto"
                  />

                  <div className="img-icon">
                    <Image
                      src="/assets/imgs/arw0.png"
                      alt="Arrow Icon"
                      width={200}
                      height={200}
                      className="w-100 h-auto"
                    />
                  </div>
                </div>

                <div className="col-6 mt-40">
                  <Image
                    src="/assets/imgs/intro/intro2.png"
                    alt="Intro Image 2"
                    width={500}
                    height={500}
                    className="w-100 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                MCKY!{' '}
                <span className="fw-200"> is an
                </span> event technology services
                company founded in <span className="fw-200">2017</span> &
                and based in Bekasi, Indonesia.
              </h3>

              <p className="text-white text-base md:text-lg leading-relaxed">
                MCKY is an event technology services company founded in 2017 and based in Bekasi, Indonesia.

                What started in a garage has grown into a trusted partner for national and international events. Built by professionals with deep roots in broadcast television and live production, MCKY was shaped by one principle:
                live events must be engineered with precision, then brought to life creatively.

                Today, we deliver broadcast production, live production, multimedia systems, system integration, and graphic content designed to work as one seamless ecosystem. Our team combines experienced broadcast directors, camera operators, engineers, and creative specialists to build systems that are reliable, scalable, and visually powerful.

                From corporate forums to international scale events, MCKY engineers the technology and visuals behind live experiences ensuring every moment performs exactly as intended.


              </p>

              <a href="/contact" className="underline main-color mt-40">
                <span className="text">
                  Our Contact <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
