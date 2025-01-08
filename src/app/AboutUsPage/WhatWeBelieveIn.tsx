// components/WhatWeBelieveIn.js
import Image from "next/image";
import profileImage from "@/assets/images/profile-image-aboutus.png"; // Replace with the actual image path

export default function WhatWeBelieveIn() {
    return (
        <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white pt-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What we believe in</h2>
                    <p className="text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={profileImage}
                            alt="Profile"
                            className="rounded-lg"
                            width={300}
                            height={300}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-700 opacity-50 rounded-lg -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
