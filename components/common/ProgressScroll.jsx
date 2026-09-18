'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
//= Scripts

import scrollToTop from '@/common/scrollToTop';
const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <a
        href="https://wa.me/62812221995"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed cursor-pointer z-[100]"
        style={{ right: '30px', bottom: '85px' }}
        aria-label="Chat WhatsApp"
      >
        <Image
          src="/assets/imgs/image.png"
          alt="WhatsApp"
          width={42}
          height={42}
          className="shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </>
  );
};

export default ProgressScroll;
