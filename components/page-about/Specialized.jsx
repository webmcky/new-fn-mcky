import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Specialized() {
  const services = [
    {
      num: '01',
      title: 'MULTICAMERA SYSTEM',
      subtitle: 'MULTIMEDIA',
      img: '/assets/imgs/serv-img/1.png',
      link: '/page-services-details',
    },
    {
      num: '02',
      title: 'DOCUMENTATION',
      subtitle: 'MULTIMEDIA',
      img: '/assets/imgs/serv-img/2.png',
      link: '/page-services-details',
    },
  ];

  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>

        {services.map((service, idx) => (
          <div key={idx} className={`item ${idx === services.length - 1 ? 'pb-0' : ''}`}>
            <div className="row md-marg align-items-end">
              <div className="col-lg-4">
                <div>
                  <span className="num">{service.num}</span>
                  <div>
                    <span className="sub-title main-color mb-10">{service.subtitle}</span>
                    <h2>{service.title}</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text md-mb80">
                  <p>
                    We help our client succeed by creating identities, digital
                    experiences, and print materials that communicate clearly
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img fit-img relative h-[250px] md:h-[300px] lg:h-[350px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <Link href={service.link}>
                    <span className="ti-arrow-top-right absolute top-5 right-5 text-white text-3xl"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialized;
