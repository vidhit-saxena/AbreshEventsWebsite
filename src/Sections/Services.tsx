import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from "@dotlottie/react-player";
import { 
    ChevronRight, 
    Target, 
    MousePointer, 
    Globe, 
    MailOpen, 
    Users, 
    BarChart,
    Megaphone, 
    ShieldAlert, 
    Feather, 
    Calendar, 
    Award, 
    Newspaper,
    Mic2
} from 'lucide-react';

const tabs = [
    {
        icon: "/assets/lottie/marketing.lottie",
        title: "Digital Marketing",
        description: "Harness the power of online tools to reach your audience effectively.",
        features: [
            { name: "Social Media Management", icon: Users },
            { name: "Search Engine Optimization (SEO)", icon: Target },
            { name: "Pay-Per-Click (PPC) Ads", icon: MousePointer },
            { name: "Content Creation", icon: Feather },
            { name: "Email Marketing", icon: MailOpen },
            { name: "Influencer Marketing", icon: Mic2 },
            { name: "Analytics and Reporting", icon: BarChart },
        ],
        gradient: "from-purple-900 to-indigo-900",
        borderColor: "border-purple-500",
        ringColor: "ring-purple-500"
    },
    {
        icon: "/assets/lottie/public.lottie",
        title: "Public Relations",
        description: "Shape public perception and build trust through strategic communication.",
        features: [
            { name: "Media Relations", icon: Newspaper },
            { name: "Crisis Management", icon: ShieldAlert },
            { name: "Brand Storytelling", icon: Feather },
            { name: "Event Promotion", icon: Calendar },
            { name: "Reputation Management", icon: Award },
            { name: "Press Release Distribution", icon: Megaphone },
            { name: "Thought Leadership", icon: Globe },
        ],
        gradient: "from-blue-900 to-cyan-900",
        borderColor: "border-blue-500",
        ringColor: "ring-blue-500"
    },
];

export const Services = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-black relative overflow-hidden py-[72px] px-4">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-50 blur-3xl"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent mb-4 text-white">
                        Our Services
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Transforming your digital presence with cutting-edge strategies and innovative communication solutions.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tabs.map((tab, index) => (
                        <motion.div
                            key={tab.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ 
                                opacity: activeTab === index ? 1 : 0.7, 
                                scale: activeTab === index ? 1 : 0.95 
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActiveTab(index)}
                            className={`
                                cursor-pointer 
                                rounded-2xl 
                                border-2 
                                ${activeTab === index 
                                    ? `${tab.borderColor} ring-4 ${tab.ringColor}/50` 
                                    : 'border-white/20 hover:border-white/40'}
                                bg-gradient-to-br ${tab.gradient} 
                                p-6 
                                transform 
                                transition-all 
                                duration-300 
                                hover:scale-105 
                                hover:shadow-2xl
                            `}
                        >
                            {/* Service Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center">
                                        <DotLottiePlayer
                                            src={tab.icon}
                                            className="h-12 w-12"
                                            autoplay
                                            loop
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{tab.title}</h3>
                                </div>
                                <ChevronRight 
                                    className={`
                                        text-white 
                                        transition-transform 
                                        ${activeTab === index ? 'rotate-90' : ''}
                                    `} 
                                    size={24} 
                                />
                            </div>

                            {/* Description */}
                            <p className="text-white/80 mb-6">{tab.description}</p>

                            {/* Features List */}
                            {activeTab === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-3"
                                >
                                    {tab.features.map((feature, featureIndex) => {
                                        const FeatureIcon = feature.icon;
                                        return (
                                            <div 
                                                key={featureIndex} 
                                                className="flex items-center space-x-3 text-white/90"
                                            >
                                                <FeatureIcon 
                                                    size={20} 
                                                    className="text-blue-400" 
                                                />
                                                <span>{feature.name}</span>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;