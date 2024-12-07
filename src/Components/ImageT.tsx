

'use client';

import TeamPhotoImage from "../assets/images/TeamIntro.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const text = 'You are racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.';
const words = text.split(' ');

export default function Introduction() {
    const teamPhotoRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: teamPhotoRef,
        offset: ["start end", "end end"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

return (
    <section id="about-us" className="py-1 bg-black px-1 sm:px-6 md:px-8 lg:px-0">
        <div className="container mx-auto px-0 sm:px-6 md:px-8 lg:px-16">
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
export const Image = () => {
    return null;
}