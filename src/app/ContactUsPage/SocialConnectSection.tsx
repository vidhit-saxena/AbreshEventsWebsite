"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, LucideIcon } from "lucide-react";


// Define interfaces for our props and data structure
interface SocialCardProps {
    icon: LucideIcon;
    title: string;
    platform: string;
    href: string;
}

interface SocialLink {
    icon: LucideIcon;
    title: string;
    platform: string;
    href: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon: Icon, title, platform, href }) => {
    return (
        <Link 
            href={href}
            className="bg-[#272727] backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 
            transform transition-all duration-300 hover:scale-105 hover:bg-[#272727]"
        >
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-400">{platform}</p>
            </div>
        </Link>
    );
};

const SocialConnectSection: React.FC = () => {
    const socialLinks: SocialLink[] = [
        {
            icon: Facebook,
            title: "Abresh events",
            platform: "Facebook",
            href: "https://facebook.com/abreshevents"
        },
        {
            icon: Instagram,
            title: "@Abreshevents",
            platform: "Instagram",
            href: "https://instagram.com/abreshevents"
        },
        {
            icon: Linkedin,
            title: "Abresh events",
            platform: "Linkedin",
            href: "https://linkedin.com/company/abreshevents"
        },
        {
            icon: Youtube,
            title: "Abresh events",
            platform: "Youtube",
            href: "https://youtube.com/abreshevents"
        }
    ];

    return (
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-950 to-black overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="relative container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Connect Us on
                    </h2>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {socialLinks.map((social, index) => (
                        <SocialCard
                            key={index}
                            icon={social.icon}
                            title={social.title}
                            platform={social.platform}
                            href={social.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialConnectSection;