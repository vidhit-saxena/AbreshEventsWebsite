'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// Import event images
import Image1 from "@/assets/images/Image1.jpg"
import Image2 from "@/assets/images/Image2.jpg"
import Image3 from "@/assets/images/Image3.jpg"
import Image4 from "@/assets/images/Image4.jpg"
import Image5 from "@/assets/images/Image5.jpg"
import Image6 from "@/assets/images/Image6.jpg"

// Define the image type
interface EventImage {
    src: any;
    alt: string;
}

// Create an array of event images
const eventImages: EventImage[] = [
    { src: Image1, alt: 'Event Image 1' },
    { src: Image2, alt: 'Event Image 2' },
    { src: Image3, alt: 'Event Image 3' },
    { src: Image4, alt: 'Event Image 4' },
    { src: Image5, alt: 'Event Image 5' },
    { src: Image6, alt: 'Event Image 6' }
]

export const Gallery: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [swiper, setSwiper] = useState<any>(null)

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex)
    }

    const handleThumbnailClick = (index: number) => {
        if (swiper) {
            swiper.slideTo(index)
        }
    }

    return (
        <section id="our-gallery" className='relative bg-black w-full'>
            <div className='container mx-auto max-w-7xl  py-12'>
                <div className='text-center mb-8 sm:mb-10'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Gallery
                    </h2>
                    {/* <p className='max-w-xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg'>
                        Explore the memorable moments from our events
                    </p> */}
                </div>
                <div className='max-w-6xl mx-auto'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.custom-prev-button',
                            nextEl: '.custom-next-button',
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'custom-pagination-bullet',
                            bulletActiveClass: 'custom-pagination-bullet-active'
                        }}
                        onSwiper={setSwiper}
                        onSlideChange={handleSlideChange}
                        loop={true}
                        className='h-[250px] sm:h-[350px] lg:h-[500px]  md:w-[90%] lg:w-[100%] w-full rounded-lg relative group'
                    >
                        {/* Custom Navigation Buttons */}
                        <div className='custom-prev-button absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className='custom-next-button absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {eventImages.map((image, index) => (
                            <SwiperSlide key={index} className='relative'>
                                <div className='h-full w-full flex items-center justify-center'>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className='block h-full w-full object-cover rounded-lg'
                                        placeholder='blur'
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnails at the bottom */}
                    <div className='mt-4 sm:mt-6'>
                        <ul className='flex gap-2 sm:gap-4 overflow-x-auto py-4 justify-start sm:justify-center scrollbar-hide'>
                            {eventImages.map((image, index) => (
                                <li key={index} className='flex-shrink-0'>
                                    <button
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`relative block h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-lg 
                                                hover:scale-105 transition-transform
                                                ${activeIndex === index
                                                ? 'border-4 border-white/80 scale-105'
                                                : 'border-2 border-transparent'
                                            }`}
                                    >
                                        <div className='w-full h-full overflow-hidden rounded-md'>
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                className='block h-full w-full object-cover'
                                                placeholder='blur'
                                            />
                                        </div>
                                        {activeIndex === index && (
                                            <div className='absolute inset-0 rounded-lg'></div>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Custom global styles for pagination and scrollbar */}
            <style jsx global>{`
        .custom-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255,255,255,0.3);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination-bullet-active {
          background-color: #fff;
          width: 20px;
          border-radius: 10px;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
        </section>
    );
};

// "use client";
// import React, { useState } from "react";
// import Image from "next/image"; // Import Next.js Image component
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Bitcoin from '@/assets/images/Bitcoin.jpg';
// import globe from '@/assets/images/globe.jpg';
// import workspace from '@/assets/images/workspace.jpg'

// const GallerySlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//         {
//             src: globe,
//             alt: "Digital globe with tech interface",
//         },
//         {
//             src: Bitcoin,
//             alt: "Bitcoin on circuit board",
//         },
//         {
//             src: workspace,
//             alt: "Developer workspace",
//         },
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? images.length - 1 : prevIndex - 1
//         );
//     };

//     return (
//         <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
//             <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
//                 Gallery
//             </h2>
//             <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
//                 <div
//                     className="flex transition-transform duration-500 ease-out"
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                     {images.map((image, index) => (
//                         <div key={index} className="w-full flex-shrink-0">
//                             <div className="relative aspect-[16/9] overflow-hidden">
//                                 {/* Use Next.js Image component */}
//                                 <Image
//                                     src={image.src}
//                                     alt={image.alt}
//                                     layout="fill" // Ensures the image fills the container
//                                     className="object-cover transform transition-transform duration-300 hover:scale-105"
//                                     priority={index === 0} // Prioritize the first image
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Navigation Buttons */}
//                 <button
//                     onClick={prevSlide}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-200 bg-opacity-50 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                     aria-label="Previous slide"
//                 >
//                     <ChevronLeft className="w-6 h-6 text-purple-900" />
//                 </button>

//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-200 bg-opacity-50 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
//                     aria-label="Next slide"
//                 >
//                     <ChevronRight className="w-6 h-6 text-purple-900" />
//                 </button>

//                 {/* Dots Indicators */}
//                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//                     {images.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 ${currentIndex === index
//                                     ? "bg-purple-600 w-4"
//                                     : "bg-purple-200"
//                                 }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GallerySlider;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Import your images
// import Image from "next/image";
// import Image1 from "@/assets/images/Image1.jpg";
// import Image2 from "@/assets/images/Image2.jpg";
// import Image3 from "@/assets/images/Image3.jpg";

// const images = [Image1, Image2, Image3];

// export default function GallerySlider() {
//     return (
//         <section className="py-12 bg-black">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
//                     Gallery
//                 </h2>

//                 <div className="relative">
//                     <Swiper
//                         modules={[Navigation, Pagination]}
//                         spaceBetween={50}
//                         slidesPerView={1}
//                         centeredSlides={true}
//                         navigation
//                         pagination={{ clickable: true }}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 1.5,
//                             },
//                             1024: {
//                                 slidesPerView: 3,
//                             },
//                         }}
//                     >
//                         {images.map((image, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="flex justify-center">
//                                     <div className="w-[300px] h-[420px] relative">
//                                         <Image
//                                             src={image}
//                                             alt={`Gallery Image ${index + 1}`}
//                                             className=" object-cover"
//                                             fill
//                                             priority={index === 0}
//                                         />
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     );
// }



// "use client";
// import React, { useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

// // Import your images
// import Image1 from "@/assets/images/Image1.jpg";
// import Image2 from "@/assets/images/Image2.jpg";
// import Image3 from "@/assets/images/Image3.jpg";

// // Gallery details
// const gallery: StaticImageData[] = [Image1, Image2, Image3];

// export default function GalleryCarousel() {
//     const [activeSlide, setActiveSlide] = useState(0);

//     const swiperOptions = {
//         spaceBetween: -200,
//         slidesPerView: 3,
//         centeredSlides: true,
//         navigation: {
//             prevEl: ".custom-prev",
//             nextEl: ".custom-next",
//         },
//         pagination: {
//             el: ".custom-pagination",
//             clickable: true,
//             renderBullet: (index: number, className: string) =>
//                 `<span class="${className} w-3 h-3 bg-white/70 rounded-full mx-2"></span>`,
//         },
//         loop: true,
//         watchSlidesProgress: true,
//         breakpoints: {
//             0: {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//             },
//             640: {
//                 slidesPerView: 2,
//                 spaceBetween: -160,
//             },
//             1024: {
//                 slidesPerView: 2,
//                 spaceBetween: -200,
//             },
//             1540: {
//                 slidesPerView: 2,
//                 spaceBetween: -60,
//                 centeredSlides: true,
//             },
//         },
//         className: "pb-12",
//     };

//     return (
//         <section className="py-16 bg-black px-4 sm:px-6 lg:px-16 relative">
//             <div className="container mx-auto">
//                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 text-center">
//                     Gallery
//                 </h2>
//                 <div className="relative max-w-5xl mx-auto">
//                     {/* Overlay for blur effect */}
//                     <div className="absolute inset-0 z-20 pointer-events-none">
//                         <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-black to-transparent hidden sm:block"></div>
//                         <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black to-transparent hidden sm:block"></div>
//                     </div>

//                     <Swiper
//                         {...swiperOptions}
//                         modules={[Navigation, Pagination]}
//                         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//                         className="relative z-10"
//                     >
//                         {[...gallery, ...gallery].map((image, index) => (
//                             <SwiperSlide key={index}>
//                                 <div
//                                     className={`bg-gray-900 border rounded shadow-lg flex items-center justify-center
//                                 transition-all duration-300 ease-in-out
//                                 ${activeSlide === index
//                                             ? "opacity-100 scale-100 z-20"
//                                             : index < activeSlide
//                                                 ? "opacity-20 scale-75 -translate-x-4 z-10"
//                                                 : "opacity-20 scale-75 translate-x-4 z-10"
//                                         }
//                                 w-[300px] h-[420px] mx-auto overflow-hidden`}
//                                 >
//                                     <div className="relative w-full h-full">
//                                         <Image
//                                             src={image}
//                                             alt={`Gallery Image ${index + 1}`}
//                                             className="object-cover w-full h-full"
//                                             priority={index === 0}
//                                         />
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>

//                     {/* Custom Navigation */}
//                     <div className="absolute inset-0 flex justify-between items-center px-4 z-30 pointer-events-none">
//                         <button className="custom-prev text-white hover:text-purple-600 transition-colors duration-300 pointer-events-auto">
//                             <ArrowLeftCircle className="w-10 h-10" />
//                         </button>

//                         <button className="custom-next text-white hover:text-purple-600 transition-colors duration-300 pointer-events-auto">
//                             <ArrowRightCircle className="w-10 h-10" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


