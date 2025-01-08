"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Image1 from "@/assets/images/Image1.jpg";
import Image2 from "@/assets/images/Image2.jpg";
import Image3 from "@/assets/images/Image3.jpg";
import Image4 from "@/assets/images/Image4.jpg";
import Image5 from "@/assets/images/Image5.jpg";
import Image6 from "@/assets/images/Image6.jpg";

export interface EventItem {
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
}

const data: EventItem[] = [
  {
    title: "ABResh Events | Crafting Unforgettable Experiences",
    date: "Dec 20, 2024",
    description: "Experience an unforgettable night of music and magic.",
    image: Image1,
  },
  {
    title: "New Year Gala | A Celebration to Remember",
    date: "Jan 21, 2025",
    description: "Ring in the New Year with style and excitement.",
    image: Image2,
  },
  {
    title: "Spring Festival | Colors of Joy",
    date: "March 15, 2025",
    description: "Celebrate the season with fun, food, and festivities.",
    image: Image3,
  },
  {
    title: "Tech Con 2025 | Innovate and Inspire",
    date: "April 10, 2025",
    description: "Join the leading minds in technology and innovation.",
    image: Image4,
  },
  {
    title: "Summer Beats | Outdoor Music Festival",
    date: "July 22, 2025",
    description: "Enjoy the best live music under the summer skies.",
    image: Image5,
  },
  {
    title: "Autumn Serenade | Classical Music Evening",
    date: "Oct 5, 2025",
    description: "Indulge in an evening of timeless classical music.",
    image: Image6,
  },
];

const UpcomingEventsSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 to increase scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    setStartX(touch.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    const x = touch.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Infinite carousel effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const scrollStep = 1; // Adjust for speed of animation

    const autoScroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollStep;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const startAutoScroll = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const stopAutoScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Start auto-scroll when not dragging
    if (!isDragging) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isDragging]);

  // Duplicate data for infinite scroll effect
  const infiniteData = [...data, ...data];

  return (
    <div className="relative bg-black text-white overflow-hidden py-12">
      {/* Heading Section */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
          Upcoming Events
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg">
          Discover our most prestigious and impactful events
        </p>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="flex">
          {infiniteData.map((item, index) => (
            <div
              key={index}
              className="inline-block min-w-[300px] max-w-[300px] rounded-lg overflow-hidden shadow-lg border border-white/50 relative p-4 mx-3 hover:bg-purple-700/80 hover:bg-opacity-40 transition-colors duration-300"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={180}
                className="w-full h-[180px] object-cover rounded-md"
              />
              
              {/* Content */}
              <div className="pt-3">
                {/* Date and Button */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V5.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V7M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v12.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.25V6.75z"
                      />
                    </svg>
                    {item.date}
                  </span>
                  <button className="px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-full hover:bg-white hover:text-purple-800 border-2 border-transparent hover:border-purple-800 transition-all duration-300">
                    Book
                  </button>
                </div>
              
                {/* Title */}
                <h3 className="text-base font-semibold line-clamp-2">{item.title}</h3>
              
                {/* Description */}
                <p className="text-xs text-gray-300 mt-1 line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default UpcomingEventsSlider;