"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-black via-[#0A051F] to-[#0A051F] text-white min-h-svh">
            <div className="container max-w-7xl mx-auto px-6 py-16">
                {/* Content Section */}
                <div className="max-w-xl">
                    <p className="text-gray-300 mb-16 text-lg">Production</p>
                    <h1 className="text-[64px] font-extrabold bg-gradient-to-r from-[#87878781] via-white to-[#FFFFFF] text-transparent bg-clip-text mb-6">
                        Video Production
                    </h1>
                    <p className="text-gray-300 mb-12 text-xl">
                        ABResh Corporations brings together technology, entertainment, music, and event experiences under one dynamic roof.
                    </p>
                    <button className="px-16 py-3 bg-[#A044FF] text-white text-lg rounded-full hover:bg-purple-700 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Image Grid Section */}
                <div className="absolute top-0 right-0 w-1/2 h-svh">
                    <div className="grid grid-cols-2 gap-2 p-4 h-svh">
                        <div className="relative">
                            <Image
                                src="/vr-headset.jpg"
                                alt="VR Experience"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="/creative-idea.jpg"
                                alt="Creative Idea"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                        <div className="relative col-span-2">
                            <Image
                                src="/tech-visualization.jpg"
                                alt="Technology Visualization"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex justify-start gap-20 mt-20">
                    <div>
                        <h3 className="text-5xl font-bold text-[#A044FF] mb-2">250+</h3>
                        <p className="text-gray-300 text-lg">
                            Happy<br />Customer
                        </p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#A044FF] mb-2">370+</h3>
                        <p className="text-gray-300 text-lg">
                            more than 370+<br />Project Done
                        </p>
                    </div>
                    <div>
                        <h3 className="text-5xl font-bold text-[#A044FF] mb-2">10+</h3>
                        <p className="text-gray-300 text-lg">
                            Years of<br />Experience
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

// "use client";

// import React from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-16 px-6">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left Content */}
//         <div>
//           <p className="text-lg text-gray-400 uppercase tracking-wide mb-2">Production</p>
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gray-200">Video</span> <span className="text-purple-500">Production</span>
//           </h1>
//           <p className="text-gray-400 mb-6">
//             ABResh Corporations brings together technology, entertainment, music, and event experiences under one dynamic roof.
//           </p>
//           <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-purple-500">
//             Get Started
//           </button>
//         </div>

//         {/* Right Content */}
//         <div className="grid grid-cols-2 gap-4">
//           <div className="row-span-2">
//             <Image
//               src="/path-to-your-image-1.jpg"
//               alt="Virtual Reality"
//               width={500}
//               height={600}
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <Image
//               src="/path-to-your-image-2.jpg"
//               alt="Innovation"
//               width={250}
//               height={250}
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <Image
//               src="/path-to-your-image-3.jpg"
//               alt="Technology"
//               width={250}
//               height={250}
//               className="w-full rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//         <div>
//           <h3 className="text-3xl font-bold text-purple-500">250+</h3>
//           <p className="text-gray-400 mt-2">Happy Customers</p>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold text-purple-500">370+</h3>
//           <p className="text-gray-400 mt-2">More than 370+ Projects Done</p>
//         </div>
//         <div>
//           <h3 className="text-3xl font-bold text-purple-500">10+</h3>
//           <p className="text-gray-400 mt-2">Years of Experience</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
