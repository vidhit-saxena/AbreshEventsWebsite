"use client";

import React from "react";
import Image from "next/image";

const OurProjectSection = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8">
      {/* Section Title */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center">
          Our Project
        </h2>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Project Image */}
          <div className="md:col-span-8 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/editing-suite.jpg"
              alt="Video editing suite"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Side Images */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 h-full">
            <div className="relative h-[150px] md:h-[245px] rounded-2xl overflow-hidden">
              <Image
                src="/camera-equipment.jpg"
                alt="Professional camera equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-[150px] md:h-[245px] rounded-2xl overflow-hidden">
              <Image
                src="/control-panel.jpg"
                alt="Production control panel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectSection;