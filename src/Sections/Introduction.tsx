'use client';

// introduction.tsx
import Image from "next/image";
import Tag from "@/Components/Tags";
import TeamPhotoImage from "../assets/images/TeamIntro.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const text = 'You are racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.';

export default function Introduction() {
    const teamPhotoRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: teamPhotoRef,
        offset: ["start end", "end end"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <section className="py-16 lg:py-32 bg-black px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                <div className="flex justify-center">
                    <Tag>Introducing ABResh Events</Tag>
                </div>
                <div className="text-white text-3xl md:text-5xl lg:text-7xl text-center font-medium mt-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
                    <span>Your creative process deserve better.</span>{" "}
                    <span className="text-white/15">{text}</span>
                    <span className="font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text [-webkit-background-clip:text] block">
                        That's why we built ABResh Events
                    </span>
                </div>
                <motion.div
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: "800px",
                    }}
                    className="px-4 sm:px-6 md:px-8 lg:px-0"
                >
                    <div 
                        ref={teamPhotoRef}
                        className="max-w-5xl mx-auto mt-11 border border-white/20 p-2.5 rounded-xl"
                    >
                        <div 
                            className="aspect-video bg-cover border border-white/20 rounded-lg" 
                            style={{
                                backgroundImage: `url(${TeamPhotoImage.src})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                        >
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// TeamIntro.tsx can now be deleted or left empty as its content has been moved to Introduction
export const TeamIntro = () => {
    return null;
}