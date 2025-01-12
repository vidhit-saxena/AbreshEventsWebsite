import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.jpg';

const HeroSection = () => {
  return (
    <section className="bg-black h-screen lg:h-[800px]">
      <div className="h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Side - Image */}
          <div className="relative h-full w-full flex items-stretch">
            <Image
              src={heroImage}
              alt="Cloud City Technology"
              layout="fill"
              objectFit="cover"
              className="brightness-110"
              priority
            />

            {/* Gradients and effects */}
            {/* Right gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-black" />

            {/* Glow effects */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent blur-xl" />
            <div className="absolute -left-10 bottom-0 w-2/3 h-40 bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-2xl opacity-60" />
          </div>

          {/* Right Side - Content */}
          <div className="md:h-full flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left px-6 lg:ml-20">
              <h2 className="text-gray-300 text-sm md:text-lg lg:text-2xl font-normal">
                Welcome to ABResh Technologies
              </h2>
              <div className="mt-3">
                <h1 className="text-[55px] md:text-6xl lg:text-[95px] font-bold leading-none">
                  <span className="text-purple-500">Technology</span>
                  <br />
                  <span className="text-gray-200">Services</span>
                </h1>
              </div>
              <p className="text-gray-400 mt-4 md:mt-6 lg:mt-8 text-sm md:text-sm lg:text-xl max-w-xl mx-auto lg:mx-0 px-2 md:px-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
