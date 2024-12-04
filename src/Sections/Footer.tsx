'use client';

import React, { FC } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png"

const Footer: FC = () => {
    return (
        <footer className="bg-[#171717] text-white/90 py-10">
            <div className="max-w-7xl mx-auto px-5">
                
                {/* Top Section */}
                <div className="flex flex-col items-center space-y-4 pb-2">
                    
                    {/* Logo */}
                    <div className="pb-2">
                        <Image src={Logo} alt="Logo" width={90} height={90} priority />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="flex flex-wrap items-center justify-center space-x-6 text-md font-medium mb-2">
                            {["Who we are", "What we do", "Services", "Gallery", "Press", "Contact us"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-gray-400">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mb-2">
                    <p className="text-gray-600">© 2024 Abreshevents. All rights reserved.</p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        {["Terms", "Privacy", "Cookies", "Refund"].map((policy, idx) => (
                            <li key={idx}>
                                <a href="#" className="hover:text-gray-200">
                                    {policy}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
