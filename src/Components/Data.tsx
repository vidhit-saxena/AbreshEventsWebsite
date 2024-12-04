import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/images/Image1.jpg"; // Static image for all events

export interface EventItem {
  title: string;
  date: string;
  description: string;
}

const UpcomingEvents: React.FC = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Sample data with static image for all events
  const data: EventItem[] = [
    {
      title: "AI & Data Science Symposium",
      date: "12 Dec 2024",
      description: "Join us for an exciting exploration of AI and Data Science!",
    },
    {
      title: "Tech Connect 2025",
      date: "25 Jan 2025",
      description: "Connecting the best minds in technology.",
    },
    {
      title: "Global Sustainability Summit",
      date: "18 Feb 2025",
      description: "Discuss global sustainability issues with industry leaders.",
    },
    {
      title: "Cybersecurity & Innovation Expo",
      date: "22 Mar 2025",
      description: "Innovating the future of cybersecurity solutions.",
    },
    {
      title: "Innovation in Healthcare Conference",
      date: "05 Apr 2025",
      description: "Advances in healthcare and medical technologies.",
    },
    {
      title: "Tech Entrepreneurs Meetup",
      date: "30 May 2025",
      description: "Networking with tech entrepreneurs around the world.",
    },
  ];

  // Duplicate the events data for seamless looping
  const sliderData = [...data, ...data];

  useEffect(() => {
    const sliderElement = sliderRef.current;
    let animationFrameId: number;

    // Scroll the slider continuously
    const scrollSlider = () => {
      if (sliderElement) {
        const scrollWidth = sliderElement.scrollWidth / 2;
        sliderElement.scrollLeft += 1; // Scroll by 1px
        if (sliderElement.scrollLeft >= scrollWidth) {
          sliderElement.scrollLeft = 0; // Reset position when reaching the end
        }
      }
      animationFrameId = requestAnimationFrame(scrollSlider); // Keep animating
    };

    if (!isMouseOver) {
      animationFrameId = requestAnimationFrame(scrollSlider); // Start scrolling when not hovered
    }

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup animation frame when component unmounts
    };
  }, [isMouseOver]);

  return (
    <div
      className="relative bg-black text-white py-7 overflow-hidden"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-800 shadow-lg border-2 border-purple-500 relative p-4"
          >
            {/* Image */}
            <Image
              src={Image1} // Use the same image for all events
              alt={item.title}
              width={300}
              height={180}
              className="w-full h-[150px] md:h-[180px] object-cover rounded-md"
            />
            
            {/* Content */}
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white flex items-center">
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
                      d="M8.25 12.75h7.5m-7.5 3h4.5m-4.5-6h5.25M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                    />
                  </svg>
                  {item.date}
                </span>
                <button className="px-3 py-1 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-800 hover:text-black transition duration-300">
                  Book Ticket
                </button>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
