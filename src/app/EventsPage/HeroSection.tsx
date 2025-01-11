// Hero.tsx
import React from 'react';
import bgImage from '@/assets/images/bg.png';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Red_Hat_Display } from 'next/font/google';

// Configure Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Define font weights you want to use
});

const creatoDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Add weights as needed
});

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-[650px] md:h-[810px] lg:h-[680px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
         // Use bgImage.src for the imported image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white max-w-2xl md:max-w-2xl lg:max-w-3xl px-10 lg:px-4">
          <h1 className={`text-md lg:text-xl font-normal ${plusJakartaSans.className}`}>
            Welcome to ABresh Technologies
          </h1>
          <p className={`mt-2 text-6xl md:text-6xl lg:text-7xl font-bold ${plusJakartaSans.className}`}>
            Events Services
          </p>
          <p className={`flex text-center mt-6 lg:mt-8 text-xs md:text-sm lg:text-lg ${creatoDisplay.className}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
