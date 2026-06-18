'use client';
import React from 'react';
import data from '@/data/services';
import Link from 'next/link';

function Blog() {
  function handleActiveSer(event) {
    document.querySelectorAll('.serv-boxs .item').forEach((serv) => {
      serv.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }

  // Array gambar untuk setiap service - menggunakan Unsplash untuk gambar gratis berkualitas tinggi
  const serviceImages = [
    'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
  ];

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  }


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
            <div
              key={i}
              onMouseEnter={handleActiveSer}
              className={`item ${i == 0 && 'active'}`}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                minHeight: '400px',
                cursor: 'pointer'
              }}
            >
              {/* Full Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1
              }}>
                <img
                  src={serviceImages[i] || serviceImages[0]}
                  alt={item.title || `Service ${i + 1}`}
                  style={{
                    width: '200%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Dark Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
                zIndex: 2
              }}></div>

              {/* Content Overlay */}
              <div className="relative z-30 h-full flex flex-col justify-between text-white md:p-8">

                <div className="group cursor-pointer inline-block">
                  <h3 className="relative sm:text-[30px] md:text-[30px] xl:text-[40px] lg:text-[40px] font-bold text-white mb-3 inline-block">
                    {item.title}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
                  </h3>
                  <p className="absolute inset-0 flex items-center justify-center text-[20px] md:px-8 sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[30px] text-white/90">
                    {truncateText(item.desc, 40)}
                  </p>

                </div>



                {/* Button & Index */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    background: 'rgba(255, 255, 255, 0.08)', // transparansi kaca container
                    borderRadius: '16px',
                    padding: '16px 24px',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Link
                    href={`/blog-details`}
                    className="flex items-center gap-2 text-white text-[18px] font-medium group"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>


                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginLeft: '20px',
                      textShadow: '0px 1px 3px rgba(0,0,0,0.4)'
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>


              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;