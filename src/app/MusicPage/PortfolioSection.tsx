"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import nextarrow from "@/assets/images/next-arrow2.png";

import portfolio1 from "@/assets/images/portfolio1.jpg";
import portfolio2 from "@/assets/images/portfolio2.jpg";
import portfolio3 from "@/assets/images/portfolio3.jpg";
import portfolio4 from "@/assets/images/portfolio4.jpg";

interface PortfolioItem {
    text: string;
    image: StaticImageData;
}

type PositionType = "main" | "second" | "third" | "fourth" | "hidden";

const PortfolioSection = () => {
    const portfolioData: PortfolioItem[] = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            image: portfolio1,
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: portfolio2,
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
            image: portfolio3,
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: portfolio4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
    };

    const getPositionClass = (idx: number): PositionType => {
        const relativePosition = (idx - currentIndex + portfolioData.length) % portfolioData.length;
        
        // Responsive visibility based on screen size is handled in the className
        if (relativePosition >= 4) return "hidden";
        
        switch (relativePosition) {
            case 0:
                return "main";
            case 1:
                return "second";
            case 2:
                return "third";
            case 3:
                return "fourth";
            default:
                return "hidden";
        }
    };

    return (
        <section className="bg-[#A044FF] text-white py-10 px-4 sm:px-6 md:h-[650px] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
                            Our Portfolio
                        </h2>
                    </div>
                    <button
                        onClick={handleNext}
                        className="flex-shrink-0 bg-transparent"
                    >
                        <Image
                            src={nextarrow}
                            alt="Next"
                            width={60}
                            height={60}
                            className="text-white w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-20 hover:opacity-75 transition-opacity"
                        />
                    </button>
                </div>

                {/* Description */}
                <p className="text-white text-md sm:text-lg mr-4 sm:mr-16 md:mr-32 mb-6 sm:mb-8 md:mb-10">
                    {portfolioData[currentIndex].text}
                </p>

                {/* Image Carousel */}
                <div className="relative h-64 sm:h-72 md:h-80">
                    <div className="absolute inset-0 flex items-center">
                        {portfolioData.map((item, idx) => {
                            const position = getPositionClass(idx);
                            return (
                                <div
                                    key={idx}
                                    className={`absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden
                                        ${position === "main" ? "w-[60%] sm:w-[50%] md:w-[45%] h-64 sm:h-72 md:h-80 left-0 z-40 opacity-100" : ""}
                                        ${position === "second" ? "w-[40%] sm:w-[40%] md:w-[35%] h-56 sm:h-64 md:h-72 left-[55%] sm:left-[45%] md:left-[40%] z-30 opacity-100" : ""}
                                        ${position === "third" ? "hidden sm:block w-[30%] md:w-[25%] h-48 sm:h-56 md:h-64 left-[80%] sm:left-[75%] md:left-[70%] z-20 opacity-100" : ""}
                                        ${position === "fourth" ? "hidden md:block w-[20%] h-56 left-[85%] z-10 opacity-80" : ""}
                                        ${position === "hidden" ? "w-0 opacity-0" : ""}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`Portfolio ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        priority={position === "main"}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import nextarrow from "@/assets/images/next-arrow2.png";

// import portfolio1 from "@/assets/images/portfolio1.jpg";
// import portfolio2 from "@/assets/images/portfolio2.jpg";
// import portfolio3 from "@/assets/images/portfolio3.jpg";
// import portfolio4 from "@/assets/images/portfolio4.jpg";
// // Import additional images here
// // import portfolio5 from "@/assets/images/portfolio5.jpg";
// // import portfolio6 from "@/assets/images/portfolio6.jpg";

// interface PortfolioItem {
//     text: string;
//     image: StaticImageData;
// }

// type PositionType = "main" | "second" | "third" | "fourth" | "hidden";

// const PortfolioSection = () => {
//     const portfolioData: PortfolioItem[] = [
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
//             image: portfolio1,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//             image: portfolio2,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
//             image: portfolio3,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//             image: portfolio4,
//         },
//         // Add more items here
//         // {
//         //     text: "Fifth item description",
//         //     image: portfolio5,
//         // },
//         // {
//         //     text: "Sixth item description",
//         //     image: portfolio6,
//         // },
//     ];

//     const [currentIndex, setCurrentIndex] = useState<number>(0);

//     const handleNext = (): void => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
//     };

//     const getPositionClass = (idx: number): PositionType => {
//         const relativePosition = (idx - currentIndex + portfolioData.length) % portfolioData.length;
        
//         // Only show 4 images at a time
//         if (relativePosition >= 4) return "hidden";
        
//         switch (relativePosition) {
//             case 0:
//                 return "main";
//             case 1:
//                 return "second";
//             case 2:
//                 return "third";
//             case 3:
//                 return "fourth";
//             default:
//                 return "hidden";
//         }
//     };

//     return (
//         <section className="bg-[#A044FF] text-white py-10 px-6 md:h-[650px] overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-4">
//                     <div className="flex-1">
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
//                             Our Portfolio
//                         </h2>
//                         {/* <p className="text-sm opacity-80">
//                             {currentIndex + 1} / {portfolioData.length}
//                         </p> */}
//                     </div>
//                     <button
//                         onClick={handleNext}
//                         className="flex-shrink-0 bg-transparent"
//                     >
//                         <Image
//                             src={nextarrow}
//                             alt="Next"
//                             width={80}
//                             height={80}
//                             className="hover:opacity-75 transition-opacity"
//                         />
//                     </button>
//                 </div>

//                 {/* Description */}
//                 <p className="text-white text-md mr-32 mb-10">
//                     {portfolioData[currentIndex].text}
//                 </p>

//                 {/* Image Carousel */}
//                 <div className="relative h-80">
//                     <div className="absolute inset-0 flex items-center">
//                         {portfolioData.map((item, idx) => {
//                             const position = getPositionClass(idx);
//                             return (
//                                 <div
//                                     key={idx}
//                                     className={`absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden
//                                         ${position === "main" ? "w-[45%] h-80 left-0 z-40 opacity-100" : ""}
//                                         ${position === "second" ? "w-[35%] h-72 left-[40%] z-30 opacity-100" : ""}
//                                         ${position === "third" ? "w-[25%] h-64 left-[70%] z-20 opacity-100" : ""}
//                                         ${position === "fourth" ? "w-[20%] h-56 left-[85%] z-10 opacity-80" : ""}
//                                         ${position === "hidden" ? "w-0 opacity-0" : ""}`}
//                                 >
//                                     <Image
//                                         src={item.image}
//                                         alt={`Portfolio ${idx + 1}`}
//                                         fill
//                                         className="object-cover transition-transform duration-500 hover:scale-105"
//                                         priority={position === "main"}
//                                     />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioSection;

// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import nextarrow from "@/assets/images/next-arrow2.png";

// import portfolio1 from "@/assets/images/portfolio1.jpg";
// import portfolio2 from "@/assets/images/portfolio2.jpg";
// import portfolio3 from "@/assets/images/portfolio3.jpg";
// import portfolio4 from "@/assets/images/portfolio4.jpg";

// interface PortfolioItem {
//     text: string;
//     image: StaticImageData;
// }

// type PositionType = "main" | "next" | "farNext" | "hidden";

// const PortfolioSection = () => {
//     const portfolioData: PortfolioItem[] = [
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
//             image: portfolio1,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//             image: portfolio2,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//             image: portfolio3,
//         },
//         {
//             text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//             image: portfolio4,
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState<number>(0);

//     const handleNext = (): void => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
//     };

//     const getPositionClass = (idx: number): PositionType => {
//         if (idx === currentIndex) return "main";
//         if (idx === (currentIndex + 1) % portfolioData.length) return "next";
//         if (idx === (currentIndex + 2) % portfolioData.length) return "farNext";
//         return "hidden";
//     };

//     return (
//         <section className="bg-[#A044FF] text-white py-12 px-6 md:h-[650px] overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-4">
//                     <div className="flex-1">
//                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">
//                             Our Portfolio
//                         </h2>
//                     </div>
//                     <button
//                         onClick={handleNext}
//                         className="flex-shrink-0 bg-transparent"
//                     >
//                         <Image
//                             src={nextarrow}
//                             alt="Next"
//                             width={80}
//                             height={80}
//                             className="hover:opacity-75 transition-opacity"
//                         />
//                     </button>
//                 </div>

//                 {/* Description */}
//                 <p className="text-white text-md mr-32 mb-10">
//                     {portfolioData[currentIndex].text}
//                 </p>

//                 {/* Image Carousel */}
//                 <div className="relative h-80 mb-10">
//                     <div className="absolute inset-0 flex items-center">
//                         {portfolioData.map((item, idx) => {
//                             const position = getPositionClass(idx);
//                             return (
//                                 <div
//                                     key={idx}
//                                     className={`absolute transition-all duration-700 ease-in-out rounded-lg overflow-hidden
//                                         ${position === "main" ? "w-[45%] h-80 left-0 z-30 opacity-100" : ""}
//                                         ${position === "next" ? "w-[35%] h-72 left-[40%] z-20 opacity-100" : ""}
//                                         ${position === "farNext" ? "w-[25%] h-64 left-[70%] z-10 opacity-100" : ""}
//                                         ${position === "hidden" ? "w-0 opacity-0" : ""}`}
//                                 >
//                                     <Image
//                                         src={item.image}
//                                         alt={`Portfolio ${idx + 1}`}
//                                         fill
//                                         className="object-cover transition-transform duration-700 hover:scale-105"
//                                         priority={position === "main"}
//                                     />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PortfolioSection;

