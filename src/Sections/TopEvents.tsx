'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

// Import event images
import Image1 from "@/assets/images/Image1.jpg"
import Image2 from "@/assets/images/Image2.jpg"
import Image3 from "@/assets/images/Image3.jpg"
import Image4 from "@/assets/images/Image4.jpg"
import Image5 from "@/assets/images/Image5.jpg"
import Image6 from "@/assets/images/Image6.jpg"

// Define the event type
interface TopEvent {
  id: number;
  src: any;
  alt: string;
  name: string;
  date: string;
  type: 'National' | 'International';
  link: string;
}

// Sample events data
const topEvents: TopEvent[] = [
  {
    id: 1,
    src: Image1,
    alt: "Event 1",
    name: "Tech Innovation Summit",
    date: "15 Dec 2024",
    type: "International",
    link: "/events/tech-innovation-summit"
  },
  {
    id: 2,
    src: Image2,
    alt: "Event 2",
    name: "Startup Expo",
    date: "20 Jan 2025",
    type: "National",
    link: "/events/startup-expo"
  },
  {
    id: 3,
    src: Image3,
    alt: "Event 3",
    name: "Leadership Conference",
    date: "10 Feb 2025",
    type: "International",
    link: "/events/leadership-conference"
  },
  {
    id: 4,
    src: Image4,
    alt: "Event 4",
    name: "Digital Transformation Forum",
    date: "05 Mar 2025",
    type: "National",
    link: "/events/digital-transformation-forum"
  },
  {
    id: 5,
    src: Image5,
    alt: "Event 5",
    name: "Innovation Workshop",
    date: "15 Apr 2025",
    type: "International",
    link: "/events/innovation-workshop"
  },
  {
    id: 6,
    src: Image6,
    alt: "Event 6",
    name: "Networking Gala",
    date: "20 May 2025",
    type: "National",
    link: "/events/networking-gala"
  }
]

export const TopEvents: React.FC = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Ensure smooth infinite scroll
    const handleAnimation = async () => {
      await controls.start({
        x: `-${scrollContainer.scrollWidth / 2}px`,
        transition: {
          duration: isHovering ? 20 : 10, // Slower when hovering
          repeat: Infinity,
          ease: 'linear'
        }
      })
    }

    handleAnimation()
  }, [isHovering, controls])

  return (
    <section className='relative bg-black w-full overflow-hidden py-16 lg:py-32'>
      <div className='container mx-auto px-4 py-16 sm:py-20 md:py-20'>
        <div className='text-center mb-8 sm:mb-10'>
          <h2 className='text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-4'>
            Top Events
          </h2>
          <p className='max-w-xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg'>
            Discover our most prestigious and impactful events
          </p>
        </div>

        {/* Increased padding to prevent clipping */}
        <div 
          className='relative w-full overflow-hidden py-2'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div 
            ref={scrollRef}
            className='flex space-x-4 will-change-transform'
            animate={controls}
          >
            {/* Duplicate events to create seamless infinite scroll */}
            {[...topEvents, ...topEvents].map((event, index) => (
              <Link 
                href={event.link} 
                key={`${event.id}-${index}`}
                className='block'
              >
                <motion.div 
                  className={`relative w-72 h-72 flex-shrink-0 cursor-pointer transition-all duration-300 
                    ${hoveredEvent === event.id 
                      ? 'scale-110 z-10 shadow-2xl' 
                      : 'scale-100 z-0'
                    }`}
                  onHoverStart={() => setHoveredEvent(event.id)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  whileHover={{ 
                    scale: 1.1,
                    // Add z-index to ensure hover state is on top
                    zIndex: 50 
                  }}
                  // Add margin to prevent clipping
                  style={{ margin: '20px 0' }}
                >
                  <div className='absolute inset-0'>
                    <Image 
                      src={event.src} 
                      alt={event.alt}
                      fill
                      className='object-cover rounded-lg'
                      placeholder='blur'
                    />
                  </div>
                  
                  {/* Event Overlay */}
                  <div className='absolute inset-0 bg-black/40 rounded-lg'>
                    {/* Top Left: Event Type */}
                    <div className='absolute top-4 left-4 bg-white/20 px-2 py-1 rounded-md'>
                      <span className='text-white text-xs font-semibold'>
                        {event.type} Event
                      </span>
                    </div>
                    
                    {/* Top Right: Date */}
                    <div className='absolute top-4 right-4 bg-white/20 px-2 py-1 rounded-md'>
                      <span className='text-white text-xs font-semibold'>
                        {event.date}
                      </span>
                    </div>
                    
                    {/* Bottom: Event Name */}
                    <div className='absolute bottom-4 left-4 right-4'>
                      <h3 className='text-white text-lg font-bold truncate'>
                        {event.name}
                      </h3>
                    </div>

                    {/* Hover CTA */}
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50'>
                      <span className='text-white text-sm font-medium bg-white/60 px-4 py-2 rounded-lg'>
                        Explore
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Responsive Indicator */}
        <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:hidden'>
          <div className='w-8 h-full bg-gradient-to-r from-black to-transparent'></div>
          <div className='w-8 h-full bg-gradient-to-l from-black to-transparent'></div>
        </div>
      </div>
    </section>
  )
}