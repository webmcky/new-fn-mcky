'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Header = () => {
 
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );
    return () => tl.kill();
  }, []);

  // useEffect(() => {
  //   loadBackgroudImages();

  //   const fetchBanner = async () => {
  //     try {
  //       const { data } = await axios.get('http://localhost:3000/api/banner');
  //       if (data.ok) {
  //         setBanner(data.data);
  //       } else {
  //         setError('No banner available');
  //       }
  //     } catch (err) {
  //       console.error('Failed to fetch banner:', err);
  //       setError(err.message || 'Error fetching banner');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBanner();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div
      className="header main-header valign"
      data-overlay-dark="2"
      style={{ position: 'relative', overflow: 'hidden' }}
    >

 <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  }}
>
  <source src="/assets/video/rell.mp4" type="video/mp4" />
</video>
      {/* Background video atau image */}
      {/* {banner?.videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            
          }}
           src="assets/video/rell.mp4"
          type="video/mp4"
        />
      ) : banner?.imageUrl ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(http://localhost:3000${banner.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // filter: 'brightness(0.5)',
            zIndex: 0,
          }}
        />
      ) : null} */}

      {/* Overlay hitam supaya teks terbaca */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      />

      {/* Konten teks */}
      <div className="container ontop z-[2]" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-11">
            <div className="caption">
              <h1>
                EVENT TECHNOLOGY

              </h1>
              <div className="d-flex align-items-end">
                <div>
                  <h1 className="nowrap">
                    <span className="text-stroke">SERVICES</span>
                  </h1>
                </div>
                <div>
                  <div className="text ml-30">
                    <p>
                      We engineer the technology behind live events.From broadcast-grade production to integrated event systems, 
{' '}
                      <span className="text-light fw-600">
                        MCKYPRO
                      </span>{' '}
                       delivers clarity, reliability, and precision so every moment performs exactly as intended.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-80">
          <div className="col-lg-6 order-md-2">
            <div className="icon-img">
<div className="icon-img">
  <Image
    src="/assets/imgs/icon-img/arrow.png"
    alt="icon"
    width={50}   // adjust to fit your design
    height={50}  // adjust to fit your design
  />
</div>

            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end order-md-1">
            <div className="info">
              <h2 className="mb-10" style={{ fontSize: '2.5rem' }}>2000 +</h2>
              <h6>
                Projects completed <br />
                <span className="main-color">successfully</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
