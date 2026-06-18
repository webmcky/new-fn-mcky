'use client';
import React from 'react';
import data from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';

function Services() {
  return (
    <section className="services-modern section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-bord mb-30">Our Services</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  From the inception of a project to its completion, we employ a
                  comprehensive and holistic approach that ensures all aspects
                  and stages are thoughtfully and thoroughly addressed.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid rest">
        <div className="serv-boxs">
          {data.map((item, i) => (
            <Link
              href={`/blog-details/${item.id ?? i}`} // dinamis kalau ada id
              key={i}
              className={`item ${i == 0 ? 'active' : ''}`}
            >
              <div className="icon-img-60">
              <div className="icon-img-60">
  <Image
    src={item.img}
    alt={item.title || "service image"}
    width={60} // adjust according to your design
    height={60} // adjust according to your design
  />
</div>

              </div>
              <div>
                <div className="text mb-30">
                  <p>{item.desc}</p>
                </div>
                <div className="d-flex align-items-center">
                  <h6 className="sub-title">{item.title}</h6>
                  <span className="ml-auto fz-13">0{i + 1}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
