// "use client"
// import React, { useState, useEffect, useRef } from 'react';

// const Cursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
//   const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
//   const [isClicking, setIsClicking] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
  
//   const animationRef = useRef();

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     // Smooth animation loop
//     const animate = () => {
//       setCursorPosition(prev => ({
//         x: prev.x + (mousePosition.x - prev.x) * 0.8,
//         y: prev.y + (mousePosition.y - prev.y) * 0.8
//       }));
      
//       setTrailPosition(prev => ({
//         x: prev.x + (mousePosition.x - prev.x) * 0.4,
//         y: prev.y + (mousePosition.y - prev.y) * 0.4
//       }));
      
//       setOuterPosition(prev => ({
//         x: prev.x + (mousePosition.x - prev.x) * 0.2,
//         y: prev.y + (mousePosition.y - prev.y) * 0.2
//       }));
      
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     document.addEventListener('mousemove', updateMousePosition);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);
    
//     // Hide default cursor
//     document.body.style.cursor = 'none';
    
//     // Start animation
//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       document.removeEventListener('mousemove', updateMousePosition);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//       document.body.style.cursor = 'auto';
      
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [mousePosition.x, mousePosition.y]);

//   const handleHover = () => setIsHovering(true);
//   const handleLeave = () => setIsHovering(false);

//   return (
//     <div className="bg-gray-900 text-[##38d1f0] relative overflow-hidden">
//       {/* Custom Cursor - Main dot */}
//       <div
//         className={`fixed pointer-events-none z-50 w-6 h-6 rounded-full border-2 transition-transform duration-100 ease-out ${
//           isHovering 
//             ? 'bg-yellow-400 border-yellow-400 shadow-lg shadow-yellow-400/50' 
//             : 'bg-white border-white'
//         } ${isClicking ? 'scale-50' : 'scale-100'}`}
//         style={{
//           left: cursorPosition.x - 12,
//           top: cursorPosition.y - 12,
//         }}
//       />

//       {/* Trailing circle */}
//       <div
//         className={`fixed pointer-events-none z-40 w-10 h-10 rounded-full border-2 transition-colors duration-200 ${
//           isHovering
//             ? 'border-yellow-400/60 bg-yellow-400/10'
//             : 'border-white/40 bg-white/5'
//         }`}
//         style={{
//           left: trailPosition.x - 20,
//           top: trailPosition.y - 20,
//         }}
//       />

//       {/* Outer glow ring */}
// <div
//   className="fixed pointer-events-none z-30 w-32 h-32 rounded-full border border-white/30 bg-white mix-blend-difference"
//   style={{
//     left: outerPosition.x - 64,
//     top: outerPosition.y - 64,
//   }}
// />

 
//     </div>
//   );
// };

// export default Cursor;

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const animationRef = useRef();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // 🔹 Detect hover pada elemen tertentu
    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      if (["a", "button", "img", "video", "p", "h1", "h2", "h3", "span"].includes(tag)) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => setIsHovering(false);

    // Smooth animation loop
    const animate = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.8,
        y: prev.y + (mousePosition.y - prev.y) * 0.8,
      }));

      setTrailPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.4,
        y: prev.y + (mousePosition.y - prev.y) * 0.4,
      }));

      setOuterPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.2,
        y: prev.y + (mousePosition.y - prev.y) * 0.2,
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="bg-gray-900 relative overflow-hidden ">
      {/* Main dot */}
      <div
        className={`fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border-2 transition-transform duration-100 ease-out ${
          isHovering
            ? "bg-[#38d1f0] border-[#38d1f0] shadow-lg shadow-yellow-400/50"
            : "bg-[#38d1f0] border-white"
        } ${isClicking ? "scale-50" : "scale-100"}`}
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
        }}
      />

      {/* Trail */}
      <div
        className={`fixed pointer-events-none  w-10 h-10  z-[9999] rounded-full border-2 transition-colors duration-200 ${
          isHovering
            ? "border-white bg-yellow-400/10"
            : "border-white bg-white/5"
        }`}
        style={{
          left: trailPosition.x - 20,
          top: trailPosition.y - 20,
        }}
      />

 
<motion.div 
  className="fixed pointer-events-none  w-14 h-14  z-[9999] rounded-full border border-white/30 bg-white mix-blend-difference"
  animate={{
    x: outerPosition.x - 32,
    y: outerPosition.y - 32,
    scale: isHovering ? 1.8 : 0.8,
    opacity: isHovering ? 1 : 0,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
  }}
/>


    </div>
  );
};

export default Cursor;
