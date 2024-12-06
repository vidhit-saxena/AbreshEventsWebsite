import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from "../assets/images/logoabresh.png"; 
import MenuIcon from '../assets/Icons/icon-menu.svg';
import CloseIcon from '../assets/Icons/icon-close.svg';

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && event.target instanceof Node && 
                !menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    interface NavLink {
        href: string;
        label: string;
    }

    const navLinks = [
        { href: "#what-we-do", label: "What we do" },
        { href: "#about-us", label: "About us" },
        { href: "#services", label: "Services" },
        { href: "#our-gallery", label: "Gallery" },
        { href: "#contact", label: "Contact" }
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="bg-black relative" ref={menuRef}>
            <div className="px-6">
                <div className="py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative">
                        <Image  
                            src={logoImage}  
                            alt="Abresh Events logo"  
                            className="h-12 w-12 relative" 
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="gap-6 items-center hidden sm:flex">
                        {navLinks.map((link) => (
                            <a 
                                key={link.label} 
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-opacity-60 text-white hover:text-opacity-100 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                        
                        {/* New Button */}
                        <div className="flex gap-4 items-center text-white">
                            <button className="relative border py-3 px-3 text-sm rounded-lg font-medium  bg-gradient-to-b from-[#190d2e] to-[#4a20Ba] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0_0_20px_rgb(140,69,255)] transition-shadow">
                                <div className="absolute inset-0">
                                    <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                                    <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                                    <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                                </div>
                                Discover the Magic
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div 
                        className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden relative z-50"
                        onClick={toggleMobileMenu}
                    >  
                        {isMobileMenuOpen ? (
                            <CloseIcon className="text-white"/>
                        ) : (
                            <MenuIcon className="text-white"/>
                        )}
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ 
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }}
                                className="
                                    sm:hidden 
                                    absolute 
                                    top-full 
                                    right-4 
                                    mt-1 
                                    w-[200px] 
                                    bg-black
                                    backdrop-blur-lg 
                                    rounded-2xl 
                                    shadow-2xl 
                                    border 
                                    border-white/20 
                                    z-50 
                                    overflow-hidden
                                "
                            >
                                <div className="flex flex-col ">
                                    {navLinks.map((link, index) => (
                                        <a 
                                            key={link.label} 
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="
                                                px-5 
                                                py-3 
                                                text-white 
                                                hover:bg-purple-500
                                                hover:bg-opacity-50
                                                transition 
                                                duration-300
                                                border-b 
                                                border-white/10
                                                last:border-b-0
                                                
                                            "
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    
                                    {/* Mobile Button */}
                                    <div className="flex justify-center text-white px-2 py-3">
                                        <button className="relative border py-3 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a20Ba] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0_0_20px_rgb(140,69,255)] transition-shadow">
                                            <div className="absolute inset-0">
                                                <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                                                <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                                                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                                            </div>
                                            Discover the Magic
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
