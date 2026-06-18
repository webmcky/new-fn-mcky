'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        bg-gradient-to-br from-[#0f0f0f]/40 via-[#1a1a1a]/30 to-[#0f0f0f]/40
        backdrop-blur-2xl border border-[#38d1f0]/30
        shadow-[0_0_40px_-10px_rgba(56,209,240,0.4),0_0_80px_-25px_rgba(56,209,240,0.3),inset_0_0_40px_-15px_rgba(56,209,240,0.1)]
        sm:shadow-[0_0_60px_-15px_rgba(56,209,240,0.5),0_0_100px_-30px_rgba(56,209,240,0.3),inset_0_0_60px_-20px_rgba(56,209,240,0.1)]
        transition-all duration-700 ease-out
        hover:shadow-[0_0_80px_-10px_rgba(56,209,240,0.7),0_0_120px_-20px_rgba(56,209,240,0.5),inset_0_0_80px_-15px_rgba(56,209,240,0.15)]
        hover:border-[#38d1f0]/50 hover:scale-[1.02]
        group"
        ref={containerRef}
      >
        
        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-[#38d1f0] rounded-tl-2xl sm:rounded-tl-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-[#38d1f0] rounded-br-2xl sm:rounded-br-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#38d1f0] rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#38d1f0] rounded-full opacity-40 animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#38d1f0] rounded-full opacity-50 animate-float animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          
          {/* Top Text with Gradient - RESPONSIVE */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black
            bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent
            tracking-tight
            transform transition-all duration-500 group-hover:scale-105
            drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            MCKY!
          </h1>

          {/* Bottom Text - RESPONSIVE */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-200
            tracking-wide leading-relaxed sm:leading-relaxed md:leading-relaxed
            transform transition-all duration-500 group-hover:scale-105
            drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] sm:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
            px-2 sm:px-4">
            Big Ideas don&apos;t Just happen.
            <br />
            <span className="bg-gradient-to-r from-[#38d1f0] to-[#0ea5e9] bg-clip-text text-transparent font-extrabold">
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

        {/* Glow effect that follows mouse */}
        <div 
          className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-[#38d1f0] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s linear infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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
