import React from 'react';
import data from '@/data/team-t';
import Link from 'next/link';
import Image from 'next/image';

function Team() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <div>
            <span className="block text-pink-500 font-semibold mb-2">
              MULTIMEDIA
            </span>
            <h3 className="text-4xl md:text-5xl font-bold uppercase">
              Meet our <span className="font-light">legends.</span>
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="/page-team"
              className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition"
            >
              Join to us
              <span className="ti-arrow-top-right"></span>
            </a>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-lg">
              {/* Image */}
              <div className="w-full h-[350px] relative">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Glass lebar tapi tidak full */}
              <div className="absolute bottom-5 left-0 right-0">
                <div className="mx-2 px-5 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
                  <h6 className="text-lg font-semibold text-white">
                    {item.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}

          {/* Extra Card */}
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-gray-500 p-10">
            <Link href="/services">
              <div className="text-center">
                <h5 className="text-xl font-semibold text-white">
                  Learn more <br /> About the services
                </h5>
                <div className="inline-block mt-6 text-white">
                  <span className="ti-arrow-top-right text-3xl"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
