'use client';

import { useEffect, useState } from "react";

export default function Clients() {
  const logos = [
    "/assets/imgs/brands/cocacola.svg",
    "/assets/imgs/brands/acer.svg",
    "/assets/imgs/brands/bmw.svg",
    "/assets/imgs/brands/lenovo.svg",
    "/assets/imgs/brands/lazada.svg",
     "/assets/imgs/brands/samsung.svg",

    "/assets/imgs/brands/realme.svg",
    "/assets/imgs/brands/pertamina.svg",
    "/assets/imgs/brands/oppo.svg",
    "/assets/imgs/brands/huawai.svg",
     "/assets/imgs/brands/bango.png",
    "/assets/imgs/brands/mini.svg",

    "/assets/imgs/brands/unilever.svg",
    "/assets/imgs/brands/tiktok.svg",
    "/assets/imgs/brands/jenius.svg",
    "/assets/imgs/brands/cat.png",
     "/assets/imgs/brands/hyundai.svg",
    "/assets/imgs/brands/cocacola.svg",
      "/assets/imgs/brands/cocacola.svg",

    "/assets/imgs/brands/cocacola.svg",
    "/assets/imgs/brands/cocacola.svg",
    "/assets/imgs/brands/cocacola.svg",
    "/assets/imgs/brands/cocacola.svg",
     "/assets/imgs/brands/cocacola.svg",
    "/assets/imgs/brands/cocacola.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= logos.length - 1) {
          return -1; // reset (semua mati dulu)
        }
        return prev + 1;
      });
    }, 300); // tiap 1.2 detik tambah logo nyala
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="relative bg-black py-20">
      {/* Background text besar */}
      <h1 className="absolute top-5 left-1/2 -translate-x-1/2 text-[10rem] font-bold text-white/10 tracking-widest z-0">
        CLIENTS
      </h1>

      {/* Subtitle */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-sm uppercase text-white tracking-[0.3em]">
          Who We <span className="font-bold">Work For</span>
        </h2>
      </div>

      {/* Grid logo */}
      <div className="relative z-10 grid grid-cols-4 lg:grid-cols-6 gap-10 px-4 sm:px-10 mx-auto max-w-6xl place-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center transition duration-500"
          >
          <img
  src={logo}
  alt="client logo"
  className={`max-h-[45px] w-[20]  object-contain 
    ${index <= activeIndex && activeIndex !== -1
      ? "opacity-100"
      : "grayscale invert opacity-80"}`}
/>
 
          </div>
        ))}
      </div>
    </section>
  );
}
