'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

import music1 from "@/assets/images/music-1.jpg";
import music2 from "@/assets/images/music-2.jpg";
import music3 from "@/assets/images/music-3.jpg";
import music4 from "@/assets/images/music-4.jpg";
import music5 from "@/assets/images/music-1.jpg";
import music6 from "@/assets/images/music-2.jpg";

const Images = [
    {
        text: "All India Sports Foundation Website",
        musicImg: music1,
    },
    {
        text: "All India Sports Foundation App",
        musicImg: music2,
    },
    {
        text: "Events App",
        musicImg: music3,
    },
    {
        text: "Used Garment Clothing Website",
        musicImg: music4,
    },
    {
        text: "Used Garment Clothing App",
        musicImg: music5,
    },
    {
        text: "Internal Website",
        musicImg: music6,
    },
];

export const MusicScroller = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: 1024,
        isMobile: false
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize({
                width,
                isMobile: width < 768
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const infinitemusics = [...Images, ...Images];

    const getCardWidth = () => {
        if (screenSize.width < 640) return 'w-64';
        if (screenSize.width < 1024) return 'w-72';
        return 'w-96';
    };

    const getScrollDuration = () => {
        if (screenSize.width < 640) return 15;
        if (screenSize.width < 1024) return 20;
        return 25;
    };

    return (
        <section className="py-4 md:py-6 bg-black">
            <div className="container mx-auto px-4">
                <div
                    className="overflow-hidden relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        animate={{
                            x: isPaused ? 0 : '-100%'
                        }}
                        transition={{
                            duration: getScrollDuration(),
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="flex gap-4 w-[150%] py-4"
                    >
                        {infinitemusics.map((music, index) => (
                            <div
                                key={`${music.text}-${index}`}
                                className={`${getCardWidth()} flex-shrink-0 bg-gray-900 border border-white/10 shadow-lg overflow-hidden
                                        transition-all duration-500 
                                        hover:scale-[1.04] 
                                        bg-gradient-to-br from-transparent to-purple-900/10
                                        hover:bg-purple-500
                                    `}
                            >
                                <Image
                                    src={music.musicImg}
                                    alt={`${music.text} music`}
                                    className="object-cover w-full h-60"
                                    width={400}
                                    height={500}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


