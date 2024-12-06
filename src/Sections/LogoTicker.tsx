'use client';

import Image from "next/image";
import EnvatoLogo from '../assets/images/envato.png'
import AmazonLogo from '../assets/images/amazon.png'
import GoogleLogo from '../assets/images/google.png'
import NetflixLogo from '../assets/images/netflix.png'
import SlackLogo from '../assets/images/slack.png'
import SpotifyLogo from '../assets/images/spotify.png'
import {motion} from 'framer-motion'


const images = [
  { id: 'envato', src: EnvatoLogo, alt: "Envato Logo" }, 
  { id: 'amazon', src: AmazonLogo, alt: "Amazon Logo" }, 
  { id: 'google', src: GoogleLogo, alt: "Google Logo" },
  { id: 'netflix', src: NetflixLogo, alt: "Netflix Logo" },
  { id: 'slack', src: SlackLogo, alt: "Slack Logo" },
  { id: 'spotify', src: SpotifyLogo, alt: "Spotify Logo" },
];

export default function LogoTicker() {
  return (
      <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container">
          <h2 className="text-xl text-center text-white/50">
            Trusted by the world's most innovative teams
          </h2>
          <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-40 after:w-40 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
            <motion.div 
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
              initial={{translate: 0}} 
              animate={{translate: "-50%"}}
              className="flex gap-16 flex-none pr-16 width: max-content"
            >
              {images.map(({id, src, alt}) => (
                <Image 
                  key={id} 
                  src={src} 
                  alt={alt} 
                  className="flex-none h-12 w-auto"
                />
              ))}
              {images.map(({id, src, alt}) => (
                <Image 
                  key={id} 
                  src={src} 
                  alt={alt} 
                  className="flex-none h-12 w-auto"
                />
              ))}
              {images.map(({id, src, alt}) => (
                <Image 
                  key={id} 
                  src={src} 
                  alt={alt} 
                  className="flex-none h-12 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
  );
}
    