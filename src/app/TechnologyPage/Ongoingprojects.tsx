'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

import project1 from "@/assets/images/project-1.jpg";
import project2 from "@/assets/images/project-2.jpg";
import project3 from "@/assets/images/project-3.jpg";
import project4 from "@/assets/images/project-4.jpg";
import project5 from "@/assets/images/project-1.jpg";
import project6 from "@/assets/images/project-2.jpg";

const Projects = [
    {
        text: "All India Sports Foundation Website",
        projectImg: project1,
    },
    {
        text: "All India Sports Foundation App",
        projectImg: project2,
    },
    {
        text: "Events App",
        projectImg: project3,
    },
    {
        text: "Used Garment Clothing Website",
        projectImg: project4,
    },
    {
        text: "Used Garment Clothing App",
        projectImg: project5,
    },
    {
        text: "Internal Website",
        projectImg: project6,
    },
];

export const OngoingProject = () => {
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

    const infiniteProjects = [...Projects, ...Projects];

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
        <section className="py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Ongoing Projects
                    </h2>
                </div>

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
                        {infiniteProjects.map((Project, index) => (
                            <div
                                key={`${Project.text}-${index}`}
                                className={`${getCardWidth()} flex-shrink-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg overflow-hidden
                                        transition-all duration-500 
                                        hover:scale-[1.04] 
                                        bg-gradient-to-br from-transparent to-purple-900/10
                                        hover:bg-purple-500
                                    `}
                            >
                                <Image
                                    src={Project.projectImg}
                                    alt={`${Project.text} project`}
                                    className="object-cover w-full h-60"
                                    width={400}
                                    height={500}
                                />
                                <div className="px-4 py-3 text-white text-md text-center">
                                    {Project.text}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


