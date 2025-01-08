"use client";

import React from "react";
import Image, {StaticImageData} from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import customer from "@/assets/images/CustomerSupport.png"

const ContactSection = () => {
    return (
        <section className="max-w-7xl mx-auto bg-black text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6  relative overflow-hidden">
            {/* Decorative dots pattern */}
            <div className="absolute bottom-0 right-0 opacity-20">
                <div className="grid grid-cols-8 gap-2">
                    {[...Array(64)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-purple-500"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        We're here to help
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                        Ask us anything about our products, services, and/or any
                        questions you may have.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    {/* Image Section */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <Image 
                                src={customer} // Replace with your actual image path
                                alt="Customer service representative"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="w-full lg:w-2/5">
                        <div className="bg-[#D9D9D926] backdrop-blur-sm items-center rounded-r-3xl p-6 sm:p-8 md:p-10">
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Company name Ltd.</h3>
                                        <p className="text-gray-300">86 Beehive Lane,<br />Greater London, United Kingdom</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Email</h3>
                                        <p className="text-gray-300">info@Company.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Phone</h3>
                                        <p className="text-gray-300">+11123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;