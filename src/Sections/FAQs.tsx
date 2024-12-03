import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQData: FAQItem[] = [
  {
    question: "What services does your company offer?",
    answer: "We specialize in event management, offering end-to-end solutions including event planning, venue selection, catering, décor, entertainment, and more. Whether it's a corporate event, wedding, or a product launch, we've got you covered.",
  },
  {
    question: "Who are your primary clients?",
    answer: "We work with a diverse clientele ranging from individuals planning personal events to corporations organizing conferences, seminars, and team-building activities.",
  },
  {
    question: "Can you customize your services to fit our needs?",
    answer: "Absolutely! We pride ourselves on tailoring our services to meet the unique needs and preferences of our clients. Just let us know your vision, and we'll bring it to life.",
  },
];

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="
        group relative overflow-hidden 
        border border-white/40
        bg-white/10 
        rounded-lg 
        mb-4 
        shadow-lg 
        hover:shadow-white/20
        transition-all 
      "
    >
      <button 
        onClick={onClick}
        className="
          w-full 
          text-left 
          p-6 
          flex 
          items-center 
          justify-between 
          focus:outline-none
        "
      >
        <span className="text-lg font-semibold text-gray-200">
          {question}
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="
            p-2 
            bg-[#334155] 
            rounded-full 
            hover:bg-[#475569] 
            transition-all
          "
        >
          {isOpen ? (
            <MinusIcon className="text-gray-200" />
          ) : (
            <PlusIcon className="text-gray-200" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
            animate={{ opacity: 1, height: "auto", paddingTop: 16, paddingBottom: 16 }}
            exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-6 text-gray-300 text-sm leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-20 relative overflow-hidden">
      <div className="
        absolute 
        top-0 
        left-0 
        right-0 
        bottom-0 
        bg-black 
        opacity-80 
        pointer-events-none
      "></div>

      <div className="container relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            text-center 
            text-5xl 
            md:text-6xl 
            max-w-3xl 
            mx-auto 
            font-bold 
            tracking-tighter 
            mb-16 
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-white 
            to-white/50
            [-webkit-background-clip:text]
          "
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {FAQData.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
