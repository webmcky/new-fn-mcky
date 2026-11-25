'use client';
import React, { useState, useEffect } from 'react';

function Services() {
  const texts = [
    { id: 1, text: "BROADCAST" },
    { id: 2, text: "MULTIMEDIA" }
  ];

  const typingSpeed = 150;  
  const deletingSpeed = 100;  
  const pauseTime = 1000; 

  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex].text;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <section className="services relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 sm:px-6 md:px-10 overflow-hidden">
      
      {/* Animated Gradient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#38d1f0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,209,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,209,240,0.03)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]"></div>

      {/* Main Content Card */}
      <div
        className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[45%] 
        p-6 sm:p-10 md:p-14 lg:p-20 rounded-2xl sm:rounded-3xl 
        bg-gradient-to-br from-[#0f0f0f]/60 via-[#1a1a1a]/50 to-[#0f0f0f]/60
        backdrop-blur-2xl border border-white/10
        shadow-2xl
        transition-all duration-700 ease-out
        hover:scale-[1.02]
        group"
      >
        <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          
          {/* Bottom Text - RESPONSIVE */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-200
            tracking-wide leading-relaxed sm:leading-relaxed md:leading-relaxed
            transform transition-all duration-500 group-hover:scale-105
            drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] sm:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
            px-2 sm:px-4">
            Big Ideas don&apos;t Just happen.
            <br />
            <span className="text-gray-200 font-extrabold">
              They&apos;re engineered.
            </span>
          </p>

          {/* Optional CTA Button - RESPONSIVE */}
          {/* <div className="pt-4 sm:pt-6 md:pt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-4">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#38d1f0] to-[#0ea5e9] 
              text-[#0a0a0a] font-bold text-sm sm:text-base md:text-lg rounded-full
              shadow-[0_0_20px_rgba(56,209,240,0.4)] sm:shadow-[0_0_30px_rgba(56,209,240,0.5)]
              hover:shadow-[0_0_40px_rgba(56,209,240,0.7)] sm:hover:shadow-[0_0_50px_rgba(56,209,240,0.8)]
              hover:scale-110 transition-all duration-300
              active:scale-95">
              Explore More
            </button>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Services;
