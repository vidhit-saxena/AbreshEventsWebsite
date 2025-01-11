// components/ScrollToTop.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-[#2A64AD] hover:bg-[#F9CD05] 
                 text-white hover:text-[#13253a] rounded-full p-3 shadow-lg 
                 transition-all duration-300 ease-in-out transform hover:scale-110
                 focus:outline-none focus:ring-2 focus:ring-[#2A64AD] focus:ring-opacity-50
                 z-50
                 ${showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;