'use client'
import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useRouter();

  //Handle Khusus Home
  const handleHomeClick = (ea) => {
    e.preventDefault();
    window.location.href = "/";  
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '/about' },
    { name: 'Services', icon: Briefcase, href: '/services' },
    { name: 'Contact', icon: Mail, href: '/contact' },
  ];

  return (
    <>
      {/* === NAVBAR DESKTOP === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg'
            : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl hidden sm:block">
              MCKY!
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) =>
               item.name === "Home" ? (
      <a
        key={item.name}
        href={item.href}
        onClick={handleHomeClick}
        className="relative flex items-center text-[20px] font-bold space-x-2 px-4 py-2 
                   text-white/80 hover:text-white transition-all duration-300 group">
        <span className="font-extrabold relative 
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[4px] after:w-0 after:bg-white after:transition-all 
                         after:duration-500 after:ease-in-out 
                         after:-translate-x-1/2 after:origin-center
                         group-hover:after:w-full"> {item.name} </span> </a>
    ) : (
      <Link
        key={item.name}
        href={item.href}
        className="relative flex items-center text-[20px] font-bold space-x-2 px-4 py-2 
                   text-white/80 hover:text-white transition-all duration-300 group">
        <span className="font-extrabold relative 
                         after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                         after:h-[4px] after:w-0 after:bg-white after:transition-all 
                         after:duration-500 after:ease-in-out 
                         after:-translate-x-1/2 after:origin-center
                         group-hover:after:w-full">
          {item.name}
        </span>
      </Link>
    )
  )}
</div>
            {/* Mobile/Tablet Menu Button */}
 <button
  onClick={() => setIsOpen(!isOpen)}
  className="relative block w-10 h-10 lg:hidden xl:hidden"
>
  <div className="flex flex-col items-center justify-center w-full h-full relative">
    {/* Line 1 */}
    <span
      className={`absolute bg-white h-[3px] w-7 transition-all duration-300 ease-in-out ${
        isOpen ? "rotate-45 top-4" : "top-2 -translate-y-0.5"
      }`}
    />
    {/* Line 2 */}
    <span
      className={`absolute bg-white h-[3px] w-7 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-0" : "opacity-100 top-4"
      }`}
    />
    {/* Line 3 */}
    <span
      className={`absolute bg-white h-[3px] w-7 transition-all duration-300 ease-in-out ${
        isOpen ? "-rotate-45 top-4" : "top-6 translate-y-0.5"
      }`}
    />
  </div>
</button>

          </div>
        </div>
      </nav>

      {/* === MOBILE PANEL === */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full z-40 backdrop-blur-xl bg-white/10 border-l border-white/20 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 space-y-4">
          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return item.name === "Home" ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleHomeClick}
                  className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-lg">{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-lg">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-white/20">
            <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl font-medium backdrop-blur-sm border border-white/30 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
