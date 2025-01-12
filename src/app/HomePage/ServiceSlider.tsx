import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ServiceDetails {
    name: string;
    description: string;
    image: StaticImageData;
}

import Image1 from "@/assets/images/Image1.jpg";
import Image2 from "@/assets/images/Image2.jpg";
import Image3 from "@/assets/images/Image3.jpg";

const services: ServiceDetails[] = [
    {
        name: 'Events',
        description: 'Event planning, management, and execution services for corporate and private clients.',
        image: Image1,
    },
    {
        name: 'Technology',
        description: 'Leverage cutting-edge technology to transform your business.',
        image: Image2,
    },
    {
        name: 'Production',
        description: 'Deliver high-quality productions tailored to your needs.',
        image: Image3,
    },
];

export default function ServicesCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);

    const swiperOptions = {
        spaceBetween: -160,
        slidesPerView: 3,
        centeredSlides: true,
        navigation: {
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
        },
        pagination: {
            el: '.custom-pagination',
            clickable: true,
            renderBullet: (index: number, className: string) =>
                `<span class="${className} w-3 h-3 bg-white/70 rounded-full mx-2"></span>`,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnHover: true,
        },
        loop: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: -0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: -160,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: -200,
            },
            1540: {
                slidesPerView: 2,
                spaceBetween: -60,
                centeredSlides: true,
            }
        },
        className: 'pb-12',
    };

    return (
        <section className="mt-10 md:mt-0 md:py-16 bg-black px-4 sm:px-6 lg:px-16 relative">
            <div className="container mx-auto">
                <div className="relative max-w-5xl mx-auto">
                    {/* Overlay for blur effect */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-black to-transparent hidden sm:block"></div>
                        <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-black to-transparent hidden sm:block"></div>
                    </div>

                    <Swiper
                        {...swiperOptions}
                        modules={[Navigation, Pagination, Autoplay]}
                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                        className="relative z-10"
                    >
                        {[...services, ...services, ...services, ...services, ...services].map((service, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`bg-gray-900 border border-gray-500 rounded-xl shadow-lg p-6 flex flex-col items-center text-center 
                                    transition-all duration-300 ease-in-out
                                    ${activeSlide === index 
                                        ? 'opacity-100 scale-100 z-20' 
                                        : (index < activeSlide 
                                            ? 'opacity-20 scale-75 -translate-x-4 z-10' 
                                            : 'opacity-20 scale-75 translate-x-4 z-10')
                                    }
                                    w-[300px] h-[420px] mx-auto overflow-hidden`} // Added overflow-hidden here
                                >
                                    <h3 className="text-2xl font-semibold text-white/90 mb-5 mt-1 h-8">{service.name}</h3>

                                    <div className="relative w-full h-40 mb-5">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            className="object-cover w-full h-full rounded-lg"
                                            priority={index === 0}
                                        />
                                    </div>

                                    <p className="text-gray-300 mb-4 text-sm md:text-[15px] min-h-[72px] line-clamp-3">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto ">
                                        <button className="px-5 py-2 bg-white/50 hover:bg-white text-black font-semibold rounded-lg shadow 
                                            hover:from-purple-700 hover:to-indigo-700 
                                            hover:opacity-90 
                                            hover:scale-110 transition duration-300 ease-in-out">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="absolute inset-0 flex justify-between items-center px-4 z-30 pointer-events-none">
                        <button className="custom-prev text-white/80 hover:text-indigo-400 transition-colors duration-300 pointer-events-auto 
                            bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/40">
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button className="custom-next text-white/80 hover:text-indigo-400 transition-colors duration-300 pointer-events-auto
                            bg-black/20 backdrop-blur-sm p-2 rounded-full hover:bg-black/40">
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}