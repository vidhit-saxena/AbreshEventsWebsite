import Image from "next/image";
import profileImage from "@/assets/images/profile-image-aboutus.png";
import backgroundImage from "@/assets/images/background.png";

export default function WhatWeBelieveIn() {
    return (
        <section
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex-1 w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
                        What we believe in
                    </h2>
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="relative w-full max-w-xl mx-auto">
                        {/* Purple background shape */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] h-[80%] 
                            bg-purple-600 rounded-l-3xl 
                            sm:w-[90%] sm:h-[85%] 
                            md:h-[90%]"
                        ></div>

                        {/* Image container */}
                        <div className="relative z-10 w-full aspect-[4/5]">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// import Image from "next/image";
// import profileImage from "@/assets/images/profile-image-aboutus.png";
// import backgroundImage from "@/assets/images/background.png"; // Import your background image

// export default function WhatWeBelieveIn() {
//     return (
//         <section
//             style={{
//                 backgroundImage: `url(${backgroundImage.src})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//             }}
//             className="text-white lg:pt-24 px-6 md:px-20"
//         >
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
//                 {/* Left Content */}
//                 <div className="flex-1">
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">What we believe in</h2>
//                     <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                     <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                 </div>

//                 {/* Right Image */}
//                 <div className="flex-1 flex justify-center relative">
//                     {/* Purple background shape */}
//                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-purple-600 rounded-l-3xl"></div>

//                     {/* Image container */}
//                     <div className="relative z-10">
//                         <Image
//                             src={profileImage}
//                             alt="Profile"
//                             width={400}
//                             height={400}
//                             className="rounded-none object-cover"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

{/* <div className="flex-1 flex justify-center">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={profileImage}
                            alt="Profile"
                            className="rounded-lg bg-gradient-to-r from-purple-800 to-purple-900"
                            width={300}
                            height={300}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-700 opacity-50 rounded-lg -z-10"></div>
                    </div>
                </div> */}


// import Image from "next/image";
// import profileImage from "@/assets/images/profile-image-aboutus.png";

// export default function WhatWeBelieveIn() {
//     return (
//         <section className="bg-black text-white lg:pt-16 px-6 md:px-20 lg:py-10">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
//                 {/* Left Content */}
//                 <div className="flex-1">
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">What we believe in</h2>
//                     <p className="text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                     <p className="text-white text-base sm:text-lg lg:text-xl mb-6 leading-relaxed">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                 </div>

//                 {/* Right Image */}
//                 <div className="flex-1 flex justify-center">
//                     <div className="relative rounded-lg overflow-hidden">
//                         <Image
//                             src={profileImage}
//                             alt="Profile"
//                             className="rounded-lg bg-gradient-to-r from-purple-800 to-purple-900"
//                             width={300}
//                             height={300}
//                         />
//                         <div className="absolute top-0 left-0 w-full h-full bg-purple-700 opacity-50 rounded-lg -z-10"></div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
