'use client';

import React, { FC } from 'react';
import { FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactUs: FC = () => {
    return (
        <section id="contact" className=" bg-gradient-to-b from-[#121212] to-[#1a1a2e] text-white py-12 px-4 sm:px-6 lg:px-8 animate-gradient-move">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section - Contact Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text.
                        </p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mt-4 md:mt-6 lg:mt-8">
                        <a
                            href="https://www.youtube.com/@ABReshEvents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-full border bg-white/5 border-white/50 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/abresh-events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://x.com/ABReshEvents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.facebook.com/abreshevents/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/abresh_events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 md:p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Right Section - Details Form */}
                <div>
                    <form className="space-y-6">
                        {/* First and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="mt-1 p-2 w-full rounded-md  border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="yourname@gmail.com"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="917888373"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="eg. I would love to connect with you"
                                className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
