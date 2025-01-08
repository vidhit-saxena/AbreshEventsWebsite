'use client'
import React, { useState, useRef } from "react";
import Image from "next/image"; // Import the Image component
import prevarrow from '@/assets/images/prev-arrow.png';
import nextarrow from '@/assets/images/next-arrow.png'

const videos = [
    { id: 1, src: "/video1.mp4", thumbnail: "/thumbnail1.jpg" },
    { id: 2, src: "/video2.mp4", thumbnail: "/thumbnail2.jpg" },
    { id: 3, src: "/video3.mp4", thumbnail: "/thumbnail3.jpg" },
];

export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsPlaying(false);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
        );
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-4">
            <div className="relative flex flex-col items-center w-full h-96 md:h-[600px]">
                {/* Previous Button with Image */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                    <button onClick={handlePrev} className="rounded-full p-2 text-white">
                        <Image
                            src={prevarrow}
                            alt="Previous"
                            width={34}
                            height={34}
                            className="hover:opacity-75"
                        />
                    </button>
                </div>

                {/* Video */}
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        key={videos[currentIndex].id}
                        src={videos[currentIndex].src}
                        className="w-full h-full object-cover rounded-lg"
                        poster={videos[currentIndex].thumbnail}
                    />
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlayPause}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-4 hover:bg-opacity-75"
                    >
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M6 19h4.5V5H6v14zm7.5-14v14H18V5h-4.5z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M8 5v14l11-7L8 5z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Next Button with Image */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                    <button onClick={handleNext} className="rounded-full p-2 text-white">
                        <Image
                            src={nextarrow}
                            alt="Next"
                            width={34}
                            height={34}
                            className="hover:opacity-75"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}


// 'use client'
// import React, { useState, useRef } from "react";

// const videos = [
//     { id: 1, url: "/video1.mp4", thumbnail: "/thumbnail1.jpg" },
//     { id: 2, url: "/video2.mp4", thumbnail: "/thumbnail2.jpg" },
//     { id: 3, url: "/video3.mp4", thumbnail: "/thumbnail3.jpg" },
// ];

// export default function VideoCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Explicitly define videoRef as HTMLVideoElement or null
//     const videoRef = useRef<HTMLVideoElement | null>(null);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
//         setIsPlaying(false); // Pause the next video initially
//     };

//     const handlePrev = () => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
//         );
//         setIsPlaying(false); // Pause the previous video initially
//     };

//     const togglePlayPause = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     return (
//         <section className="max-w-7xl mx-auto px-4 py-4">
//             <div className="relative flex flex-col items-center w-full h-96 md:h-[600px]">
//                 {/* Previous Button */}
//                 <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
//                     <button
//                         onClick={handlePrev}
//                         className="bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                             className="w-6 h-6"
//                         >
//                             <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Video */}
//                 <div className="relative w-full h-full">
//                     <video
//                         ref={videoRef}
//                         key={videos[currentIndex].id}
//                         src={videos[currentIndex].url}
//                         className="w-full h-full object-cover rounded-lg"
//                         poster={videos[currentIndex].thumbnail}
//                     />
//                     {/* Play/Pause Button */}
//                     <button
//                         onClick={togglePlayPause}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-4 hover:bg-opacity-75"
//                     >
//                         {isPlaying ? (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                                 className="w-8 h-8"
//                             >
//                                 <path d="M6 19h4.5V5H6v14zm7.5-14v14H18V5h-4.5z" />
//                             </svg>
//                         ) : (
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                                 className="w-8 h-8"
//                             >
//                                 <path d="M8 5v14l11-7L8 5z" />
//                             </svg>
//                         )}
//                     </button>
//                 </div>

//                 {/* Next Button */}
//                 <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
//                     <button
//                         onClick={handleNext}
//                         className="bg-black bg-opacity-50 rounded-full p-3 text-white hover:bg-opacity-75"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             fill="currentColor"
//                             className="w-6 h-6"
//                         >
//                             <path d="M10 6l-1.41 1.41L14.17 12l-5.58 5.59L10 18l6-6z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client"
// import React, { useState } from "react";

// const videos = [
//     { id: 1, url: "/video1.mp4", thumbnail: "/thumbnail1.jpg" },
//     { id: 2, url: "/video2.mp4", thumbnail: "/thumbnail2.jpg" },
//     { id: 3, url: "/video3.mp4", thumbnail: "/thumbnail3.jpg" },
// ];

// export default function VideoCarousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex(
//             (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
//         );
//     };

//     return (
//         <section className="max-w-7xl mx-auto px-4 py-4">
//             <div className="relative flex items-center justify-center w-full h-76 md:h-96">
//                 <button
//                     onClick={handlePrev}
//                     className="absolute left-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 text-xl"
//                 >
//                     &#8249;
//                 </button>
//                 <video
//                     key={videos[currentIndex].id}
//                     src={videos[currentIndex].url}
//                     controls
//                     className="w-full h-full object-cover rounded-lg"
//                     poster={videos[currentIndex].thumbnail}
//                 />
//                 <button
//                     onClick={handleNext}
//                     className="absolute right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 text-xl"
//                 >
//                     &#8250;
//                 </button>
//             </div>

//         </section>

//     );
// }
