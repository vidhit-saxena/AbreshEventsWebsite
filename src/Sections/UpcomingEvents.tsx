import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollSpeed = 50; // Pixels per second
    let animationFrameId: number;

    const scrollSlider = () => {
      slider.scrollLeft += scrollSpeed / 60;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // Reset to start
      }
      animationFrameId = requestAnimationFrame(scrollSlider);
    };

    animationFrameId = requestAnimationFrame(scrollSlider);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative bg-black text-white  overflow-hidden">
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
        className="flex overflow-hidden whitespace-nowrap relative"
      >
        {/* Duplicated content for seamless scrolling */}
        {[...data, ...data].map((item, index) => (
          <div
            key={index}
            className="inline-block min-w-[400px] max-w-[400px] rounded-lg overflow-hidden shadow-lg border border-purple-700 relative p-5 mx-4 hover:bg-purple-700 hover:bg-opacity-40 transition-colors duration-300"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={220}
              className="w-full h-[220px] object-cover rounded-md"
            />
            
            {/* Content */}
            <div className="pt-4">
              {/* Date and Button */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-white flex items-center">
                  {/* Updated Calendar Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V5.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V7M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v12.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.25V6.75z"
                    />
                  </svg>
                  {item.date}
                </span>
                <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-white hover:text-purple-800 border-2 border-transparent hover:border-purple-800 transition-all duration-300">
                  Book Ticket
                </button>
              </div>
            
              {/* Title */}
              <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
            
              {/* Description */}
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.description}</p>
            </div>
          </div>
        ))}
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
      `}</style>
    </div>
  );
};

export default UpcomingEventsSlider;
