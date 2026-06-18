"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import chroma from "chroma-js";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    "Live Streaming",
    "Video Production", 
    "Audio Engineering",
    "Broadcast Equipment",
    "Event Technology",
    "Post Production"
  ];

  const socialLinks = [
    { icon: "fab fa-youtube", name: "YouTube", color: "hover:bg-red-500" },
    { icon: "fab fa-instagram", name: "Instagram", color: "hover:bg-pink-500" },
    { icon: "fab fa-linkedin-in", name: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", name: "Twitter", color: "hover:bg-blue-400" },
  ];


 
  const animatedTextRef = useRef(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#38d1f0", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);
  return (
    <footer 
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="scan-line h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-clip-text text-[#38d1f0] animate-pulse">
            MCKY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Broadcasting Excellence • Multimedia Innovation
          </p>
          <div className="mt-6 w-24 h-1 bg-[#38d1f0] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
   
        </div>

        {/* CTA Email Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-transparant rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Ready to Go Live?</h2>
            <div className="section__content-cta">
                <h2>
                  <Link
                    href="mailto:info@gmail.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    mcky@gmail.com
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
              </div>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          {/* Newsletter */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <i className="fas fa-satellite text-cyan-400 mr-3"></i>
              Stay Connected to Our Broadcast
            </h3>
            <div className="flex max-w-md">
              <input 
                type="email" 
                placeholder="your.email@domain.com"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              />
              <button className="px-6 py-4 bg-[#38d1f0] rounded-r-xl transition-all duration-300 group">
                <i className="fas fa-paper-plane text-white group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className={`lg:w-1/2 lg:text-right transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center lg:justify-end">
              <i className="fas fa-video text-[#38d1f0] mr-3"></i>
              Follow Our Channels
            </h3>
            <div className="flex space-x-4 lg:justify-end">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className={`group flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-xl border border-gray-700/50 ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-12`}
                  title={social.name}
                >
                  <i className={`${social.icon} text-gray-300 group-hover:text-white transition-colors duration-300`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center pt-8 border-t border-gray-700/50 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="text-cyan-400 font-semibold">MCKY</span> • 
            Broadcasting Excellence • All Rights Reserved •
            <span className="text-[#38d1f0] ml-2">
              Powered by Asthernon Technology
            </span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;