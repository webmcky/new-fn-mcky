"use client";
import React from "react";

export default function Slide() {
  const services = [
    {
      title: "BROADCAST & MEDIA SOLUTIONS",
      desc: "From capture to playout, NEP offers a complete end-to-end suite of solutions for every type of production. With the finest facilities and the most advanced software-based services, we are ready to help with every aspect of your production.",
      gradient: "from-purple-700/90 to-blue-700/90",
      image: "https://cdn.prod.website-files.com/5bc9fe82c6c2f54b071f0033/6011abf62d1aae4f5c38c17c_NEP-Broadcast-Services-Studio-Production-Support.webp",
    },
    {
      title: "LIVE EVENTS",
      desc: "Whether mesmerizing an audience of thousands or dazzling an intimate crowd, NEP has the technology, expertise and creativity to enhance the fan experience in the most captivating and innovative ways.",
      gradient: "from-blue-800/90 to-blue-500/90",
      image: "https://cdn.prod.website-files.com/5bc9fe82c6c2f54b071f0033/5c080ffbd89f797978eb3733_live-events-video-and-content-management-hero.webp",
    },
    {
      title: "VIRTUAL PRODUCTIONS",
      desc: "Using the latest technology for virtual studios, augmented reality, CV/FX and visualization, we can help create any environment you can imagine real-time.",
      gradient: "from-cyan-700/90 to-teal-600/90",
      image: "https://cdn.prod.website-files.com/5bc9fe82c6c2f54b071f0033/610835f3573bd3347a312e50_Mando-8.webp",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {services.map((s, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          } relative`}
        >
          {/* Gambar dulu di mobile */}
          <div className="w-full md:w-1/2 min-h-[250px] md:min-h-[400px] relative z-10 overflow-hidden group">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
          </div>

          {/* Teks di bawah di mobile */}
          <div
            className={`flex flex-col justify-center p-8 md:p-10 text-white bg-gradient-to-r ${s.gradient} w-full md:w-1/2 min-h-[250px] md:min-h-[400px] relative z-10`}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
              {s.title}
            </h2>
            <p className="text-sm md:text-base mb-6 leading-relaxed opacity-90">
              {s.desc}
            </p>
           <button className="w-fit px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition font-semibold tracking-wide">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
