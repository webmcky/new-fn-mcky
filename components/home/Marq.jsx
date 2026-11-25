import React from 'react';

function Marq() {
  const items = [
    'Broadcast Production',
    'Multimedia',
    'Broadcast Production',
    'Multimedia',
    'Broadcast Production',
    'Multimedia',
    'Broadcast Production',
    'Multimedia',
  ];
  return (
    <section className="marq">
      <div className="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
        <div className="slide-har st1">
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center text-[#38d1f0]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <span>{item}</span>
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
