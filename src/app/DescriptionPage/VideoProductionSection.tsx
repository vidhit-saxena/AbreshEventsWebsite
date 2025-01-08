"use client";

import React from "react";
import Image, {StaticImageData} from "next/image";
import AVP1 from "@/assets/images/AVP1.png"
import AVP2 from "@/assets/images/AVP2.png"
import AVP3 from "@/assets/images/AVP3.png"

const VideoProductionSection = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <div>
                    <Image
                        src={AVP1}
                        alt="About Video Production"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-5xl font-bold mb-4">About Video Production</h2>
                    <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            {/* Latest Completed Projects */}
            <div className="container max-w-7xl mx-auto mt-8">
                <h2 className="text-5xl font-bold mb-8">Latest Completed Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Row */}
                    <div className="col-span-2">
                        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    {/* Second Row */}
                    <div>
                        <Image
                            src={AVP2}
                            alt="Project 1"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <Image
                            src={AVP3}
                            alt="Project 2"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Third Row */}
                    <div className="col-span-2">
                        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoProductionSection;
