"use client";
import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQData: FAQItem[] = [
    {
        question: "What is Abresh App Events?",
        answer: "Abresh App Events is a premier platform for event planning, helping individuals and organizations to streamline their events efficiently.",
    },
    {
        question: "Who can benefit from your services?",
        answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
    },
    {
        question: "What types of events do you support?",
        answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
    },
    {
        question: "How do I get started?",
        answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
    },
    {
        question: "What is Abresh App Events?",
        answer: "Abresh App Events is a premier platform for event planning, helping individuals and organizations to streamline their events efficiently.",
    },
    {
        question: "Who can benefit from your services?",
        answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
    },
    {
        question: "What types of events do you support?",
        answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
    },
    {
        question: "How do I get started?",
        answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
    },
];

type AccordionItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    answer,
    isOpen,
    onClick,
}) => {
    return (
        <div className="rounded-lg border border-white overflow-hidden">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-3 sm:p-4 text-left 
                ${isOpen ? "bg-purple-700 text-white" : "bg-black text-gray-300"}
                transition-all duration-300 hover:bg-purple-600`}
            >
                <span className="text-base sm:text-lg font-medium pr-4">{question}</span>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    {isOpen ? (
                        <MinusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                        <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 500, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="p-3 sm:p-4 bg-purple-700 text-white text-sm sm:text-base"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-black text-white">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
                    FAQ
                </h2>
                <div className="space-y-3 sm:space-y-4">
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
        </section>
    );
};

export default FAQSection;


// "use client";
// import React, { useState } from "react";
// import { PlusIcon, MinusIcon } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// type FAQItem = {
//     question: string;
//     answer: string;
// };

// const FAQData: FAQItem[] = [
//     {
//         question: "What is Abresh App Events?",
//         answer: "Abresh App Events is a premier platform for event planning, helping individuals and organizations to streamline their events efficiently.",
//     },
//     {
//         question: "Who can benefit from your services?",
//         answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
//     },
//     {
//         question: "What types of events do you support?",
//         answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
//     },
//     {
//         question: "How do I get started?",
//         answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
//     },
//     {
//         question: "What is Abresh App Events?",
//         answer: "Abresh App Events is a premier platform for event planning, helping individuals and organizations to streamline their events efficiently.",
//     },
//     {
//         question: "Who can benefit from your services?",
//         answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
//     },
//     {
//         question: "What types of events do you support?",
//         answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
//     },
//     {
//         question: "How do I get started?",
//         answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
//     },
// ];

// type AccordionItemProps = {
//     question: string;
//     answer: string;
//     isOpen: boolean;
//     onClick: () => void;
// };

// const AccordionItem: React.FC<AccordionItemProps> = ({
//     question,
//     answer,
//     isOpen,
//     onClick,
// }) => {
//     return (
//         <div className="rounded-lg border border-white overflow-hidden">
//             <button
//                 onClick={onClick}
//                 className={`w-full flex items-center justify-between p-4 text-left ${isOpen ? "bg-purple-700 text-white" : "bg-black text-gray-300"
//                     } transition-all duration-300`}
//             >
//                 <span className="text-lg font-medium">{question}</span>
//                 <motion.div
//                     initial={{ rotate: 0 }}
//                     animate={{ rotate: isOpen ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {isOpen ? <MinusIcon /> : <PlusIcon />}
//                 </motion.div>
//             </button>
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ maxHeight: 0, opacity: 0 }}
//                         animate={{ maxHeight: 200, opacity: 1 }}
//                         exit={{ maxHeight: 0, opacity: 0 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                         className="p-4 bg-purple-700 text-white"
//                     >
//                         {answer}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export const FAQSection: React.FC = () => {
//     const [activeIndex, setActiveIndex] = useState<number | null>(null);

//     const toggleIndex = (index: number) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <section className="py-16 bg-black text-white">
//             <div className="container mx-auto max-w-5xl px-28">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
//                     FAQ
//                 </h2>
//                 <div className="space-y-4">
//                     {FAQData.map((faq, index) => (
//                         <AccordionItem
//                             key={index}
//                             question={faq.question}
//                             answer={faq.answer}
//                             isOpen={activeIndex === index}
//                             onClick={() => toggleIndex(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQSection;
