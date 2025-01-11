import React from "react";
import Image from 'next/image';

import SpotifyLogo from '@/assets/images/spotify.png'
import EnvatoLogo from '@/assets/images/envato.png'
import GoogleLogo from '@/assets/images/google.png'
import NetflixLogo from '@/assets/images/netflix.png'
import SlackLogo from '@/assets/images/slack.png'

interface LogoItem {
  id: string;
  src: typeof EnvatoLogo;
  alt: string;
}

const companyLogos: LogoItem[] = [

    { id: 'spotify', src: SpotifyLogo, alt: "Spotify Logo" },
    { id: 'envato', src: EnvatoLogo, alt: "Envato Logo" },  
    { id: 'slack', src: SlackLogo, alt: "Slack Logo" },
    { id: 'google', src: GoogleLogo, alt: "Google Logo" },
    { id: 'netflix', src: NetflixLogo, alt: "Netflix Logo" },
];

// Logo Ticker Component
const LogoTicker: React.FC = () => {
  return (
    <section className="bg-[#A957FF] py-4 sm:py-4 mb-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center items-center md:space-x-7 lg:space-x-8">
          <div className="flex md:gap-4 lg:gap-32 flex-none" style={{ width: 'max-content' }}>
            {companyLogos.map(({id, src, alt}) => (
              <Image 
                key={id} 
                src={src} 
                alt={alt} 
                className="flex-none h-8 md:h-14 lg:h-16 w-auto "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;