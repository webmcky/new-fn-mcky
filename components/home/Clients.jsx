'use client';

import { useEffect, useState } from "react";

export default function Clients() {
  const logos = [
    { name: "Acer", src: "/assets/imgs/client/Acer_Logo_1.png" },
    { name: "Anker", src: "/assets/imgs/client/Anker_Logo_1.png" },
    { name: "ASUS", src: "/assets/imgs/client/ASUS_Logo_3.png" },
    { name: "Google", src: "/assets/imgs/client/Google_Logo_1.png" },
    { name: "Gojek Indonesia", src: "/assets/imgs/client/Gojek_Indonesia_Logo_2.webp" },
    { name: "Microsoft", src: "/assets/imgs/client/Microsoft_Logo_0.svg" },
    { name: "Microsoft", src: "/assets/imgs/client/Microsoft_Logo_1.png" },
    { name: "Realme", src: "/assets/imgs/client/Realme_Global_idOwhpPmkc_0.jpeg" },
    { name: "OPPO", src: "/assets/imgs/client/OPPO_idF9iGuWuM_5.png" },
    { name: "Samsung", src: "/assets/imgs/client/Samsung_idrZcaRCpR_2.png" },
    { name: "Telkom Indonesia", src: "/assets/imgs/client/Telkom_Indonesia_id3lcg3WkX_1.png" },
    { name: "WhatsApp", src: "/assets/imgs/client/WhatsApp_Logo_2.webp" },
    { name: "AIA", src: "/assets/imgs/client/AIA_idAY2gJyux_5.png" },
    { name: "Allianz", src: "/assets/imgs/client/Allianz_Logo_2.webp" },
    { name: "AXA", src: "/assets/imgs/client/AXA_idWoT3vpst_2.png" },
    { name: "BRI", src: "/assets/imgs/client/BRI_idJ8yvePc1_1.png" },
    { name: "Danantara Indonesia", src: "/assets/imgs/client/Danantara_Indonesia_idvlPezTIe_0.png" },
    {
      name: "MIND ID",
      src: "/assets/imgs/client/Mining%20Industry%20Indonesia%20MIND%20ID%20Logo%20-%20Colored%20-%20zonalogo.com.svg",
    },
    { name: "Jenius Connect", src: "/assets/imgs/client/Jenius_Connect_idEjH2D4ag_1.png" },
    { name: "OJK Indonesia", src: "/assets/imgs/client/OJK_Indonesia_idh_lYKSy2_0.jpeg" },
    { name: "Pertamina", src: "/assets/imgs/client/PERTAMINA_id7hJAjeL4_4.png" },
    { name: "PT Kimia Farma", src: "/assets/imgs/client/PT_Kimia_Farma_id2z0RQK-N_1.svg" },
     {
      name: "PGN",
      src: "/assets/imgs/client/PGN%20(Pertamina%20Gas%20Negara)%20Logo%20-%20Colored%20-%20zonalogo.com%20(1).svg",
    },
    { name: "Prudential", src: "/assets/imgs/client/Prudential_id-wNmm1SQ_0.png" },
    { name: "Crocs", src: "/assets/imgs/client/Crocs_id9b4iG33n_5.png" },
    { name: "Reebok", src: "/assets/imgs/client/Reebok_Logo_2.webp" },
    { name: "Honda", src: "/assets/imgs/client/Honda_Logo_2.webp" },
    { name: "XPeng", src: "/assets/imgs/client/Xpeng_idoaQ0waKy_0.svg" },
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
            key={logo.src}
            className="flex w-full items-center justify-center transition duration-500"
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className={`max-h-[45px] w-full object-contain
                ${
                  index <= activeIndex && activeIndex !== -1
                    ? "opacity-100"
                    : "brightness-0 invert opacity-60 grayscale"
                }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
