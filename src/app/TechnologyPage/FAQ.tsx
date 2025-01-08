// "use client"
// import React, { useState } from 'react';
// import { PlusIcon, MinusIcon } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import TechFAQ from '@/assets/images/TechFAQ.png'
// import Image from 'next/image';

// type FAQItem = {
//     question: string;
//     answer: string;
// };

// type AccordionItemProps = {
//     question: string;
//     answer: string;
//     isOpen: boolean;
//     onClick: () => void;
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
//         question: "What types of events do you support?",
//         answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
//     },
//     {
//         question: "How do I get started?",
//         answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
//     },
//     {
//         question: "Who can benefit from your services?",
//         answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
//     },
// ];

// const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
//     return (
//         <div className="border border-white/50 rounded-lg overflow-hidden">
//             <button
//                 onClick={onClick}
//                 className={`w-full flex items-center justify-between p-4 bg-black text-left text-gray-300 ${
//                     isOpen ? 'bg-purple-700 text-white' : 'hover:bg-gray-800'
//                 } transition-all duration-300`}
//             >
//                 <span className="text-sm md:text-lg font-medium">{question}</span>
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
//                         animate={{ maxHeight: 300, opacity: 1 }}
//                         exit={{ maxHeight: 0, opacity: 0 }}
//                         transition={{ duration: 0.5, ease: 'easeInOut' }}
//                         className="p-4 text-gray-400 bg-black overflow-hidden"
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
//         <section className="relative py-12 lg:py-24 bg-gradient-to-b from-black to-[#121212] text-white">
//             <div className="relative z-10 max-w-7xl flex flex-col lg:flex-row items-center gap-8 mx-auto px-4">
//                 {/* Heading and Card Section */}
//                 <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
//                         Frequently <br />asked questions
//                     </h2>

//                     {/* Help Card */}
//                     <div className="w-full max-w-sm bg-gradient-to-br from-purple-600 via-purple-600 to-purple-700 rounded-lg p-6">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="relative w-32 h-32 mb-4">
//                                 <Image 
//                                     src={TechFAQ.src}  // Update this path to match your image location
//                                     alt="Help Illustration"
//                                     className="object-contain"
//                                     fill
//                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     priority
//                                 />
//                             </div>
//                             <h3 className="text-2xl font-semibold mb-2 text-white">We can help!</h3>
//                             <p className="text-white/90 text-sm mb-6">
//                                 Contact us and we'll get back to you as soon as possible.
//                             </p>
//                             <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all text-center uppercase">
//                                 Submit a Request
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* FAQ Questions Section */}
//                 <div className="md:w-2/3 lg:w-1/2 space-y-4">
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

"use client"
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TechFAQ from '@/assets/images/TechFAQ.png'
import Image from 'next/image';

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
        question: "What types of events do you support?",
        answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
    },
    {
        question: "How do I get started?",
        answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
    },
    {
        question: "Who can benefit from your services?",
        answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
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
        <div className="border border-white/50 rounded-lg overflow-hidden">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-4 bg-black text-left text-gray-300 ${isOpen ? 'bg-purple-700 text-white' : 'hover:bg-gray-800'
                    } transition-all duration-300`}
            >
                <span className="text-sm md:text-lg font-medium">{question}</span>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ maxHeight: 0, opacity: 0 }}
                        animate={{ maxHeight: 300, opacity: 1 }}
                        exit={{ maxHeight: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="p-4 text-gray-400 bg-black overflow-hidden"
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
        <section className="relative py-12 lg:py-24 bg-gradient-to-b from-black to-[#121212] text-white">
            <div className="relative z-10 max-w-7xl  flex flex-col lg:flex-row items-center gap-8 mx-auto">
                {/* Heading and Card Section */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                        Frequently <br/>asked questions
                    </h2>
                    <div className="w-3/5 md:w-3/5 bg-gradient-to-b from-purple-500 to-purple-700 p-2 rounded-2xl shadow-lg text-center text-white">
                        <div className="flex flex-col items-center p-2">
                            <div className="">
                                <Image
                                    src={TechFAQ.src}
                                    alt='xyz'
                                    height={200}
                                    width={450}
                                    className='relative -top-8 -right-16' 
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-2">We can help!</h3>
                            <p className="text-sm mb-2">Contact us and we’ll get back to you as soon as possible.</p>
                            <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-semibold transition-all">
                                Submit a Request
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAQ Questions Section */}
                <div className="md:w-3/4 lg:w-1/2 space-y-4">
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