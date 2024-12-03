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
  { src: Image5, alt: 'Event Image 5' }
]

export const Gallery: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null)
  return (
    <section className='relative bg-black w-full '>
      <div className='container mx-auto px-4 py-16 sm:py-20 md:py-20'>
        <div className='text-center mb-8 sm:mb-10'>
          <h2 className='text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-4'>
            Our Gallery
          </h2>
          <p className='max-w-xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg'>
            Explore the memorable moments from our events
          </p>
        </div>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-4 sm:mb-6'>
            <ul className='flex gap-2 sm:gap-4 overflow-x-auto pb-4 justify-center'>
              {eventImages.map((image, index) => (
                <li key={index}>
                  <button
                    onClick={() => swiper && swiper.slideTo(index)}
                    className='relative block h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-lg hover:scale-105 transition-transform'
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='block h-full w-full object-cover'
                      placeholder='blur'
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={setSwiper}
            className='h-[250px] sm:h-[350px] md:h-[500px] w-full rounded-lg'
          >
            {eventImages.map((image, index) => (
              <SwiperSlide key={index} className='relative'>
                <div className='h-full w-full flex items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-cover'
                    placeholder='blur'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}