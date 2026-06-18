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
    <section className="services relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6 sm:px-10 overflow-hidden">
      
      {/* Animated Gradient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38d1f0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,209,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,209,240,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Main Content Card */}
      <div
        className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-[45%] 
        p-8 sm:p-12 md:p-16 lg:p-20 rounded-3xl 
        bg-gradient-to-br from-[#0f0f0f]/40 via-[#1a1a1a]/30 to-[#0f0f0f]/40
        backdrop-blur-2xl border border-[#38d1f0]/30
        shadow-[0_0_60px_-15px_rgba(56,209,240,0.5),0_0_100px_-30px_rgba(56,209,240,0.3),inset_0_0_60px_-20px_rgba(56,209,240,0.1)]
        transition-all duration-700 ease-out
        hover:shadow-[0_0_80px_-10px_rgba(56,209,240,0.7),0_0_120px_-20px_rgba(56,209,240,0.5),inset_0_0_80px_-15px_rgba(56,209,240,0.15)]
        hover:border-[#38d1f0]/50 hover:scale-[1.02]
        group"
        ref={containerRef}
      >
        
        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#38d1f0] rounded-tl-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#38d1f0] rounded-br-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#38d1f0] rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#38d1f0] rounded-full opacity-40 animate-float animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#38d1f0] rounded-full opacity-50 animate-float animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Top Text with Gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black
            bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent
            tracking-tight
            transform transition-all duration-500 group-hover:scale-105
            drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            MCKY!
          </h1>

          {/* Middle Text - Typing Effect */}
          {/* <div className="min-h-[1.5em] flex justify-center items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black
              bg-gradient-to-r from-[#38d1f0] via-[#0ea5e9] to-[#38d1f0] bg-clip-text text-transparent
              bg-[length:200%_auto] animate-gradient
              tracking-tight leading-tight
              drop-shadow-[0_0_40px_rgba(56,209,240,0.6)]
              px-4">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div> */}

          {/* Bottom Text */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200
            tracking-wide leading-relaxed
            transform transition-all duration-500 group-hover:scale-105
            drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Big Ideas don&apos;t Just happen.
            <br />
            <span className="bg-gradient-to-r from-[#38d1f0] to-[#0ea5e9] bg-clip-text text-transparent">
              They&apos;re engineered.
            </span>
          </p>

          {/* Optional CTA Button */}
          <div className="pt-6 sm:pt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:translate-y-0 translate-y-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#38d1f0] to-[#0ea5e9] 
              text-[#0a0a0a] font-bold text-lg rounded-full
              shadow-[0_0_30px_rgba(56,209,240,0.5)]
              hover:shadow-[0_0_50px_rgba(56,209,240,0.8)]
              hover:scale-110 transition-all duration-300
              active:scale-95">
              Explore More
            </button>
          </div>
        </div>

        {/* Glow effect that follows mouse */}
        <div 
          className="absolute w-64 h-64 bg-[#38d1f0] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
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
