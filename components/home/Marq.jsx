import Image from 'next/image';
import React from 'react';

function Marq() {
  const items = [
    'Broadcast Production',
    'Live Production',
    'Graphic Content',
    'System Integration',
    'E-sport Production',
    'Broadcast Production',
    'Live Production',
    'Graphic Content',
    'System Integration',
    'E-sport Production',
     'Broadcast Production',
    'Live Production',
    'Graphic Content',
    'System Integration',
    'E-sport Production',
  ];
  return (
    <section className="marq">
      <div className="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
        <div className="slide-har st1">
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center text-[#38d1f0]">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
  src="/assets/imgs/star.png"
  alt="star"
  width={24}
  height={24}
/>

                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                   <Image
  src="/assets/imgs/star.png"
  alt="star"
  width={24}
  height={24}
/>

                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
