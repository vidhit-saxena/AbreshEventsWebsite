import React from 'react';
import { Target, Gem, Trophy, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur transition-all group-hover:blur-xl" />
    <div className="relative bg-gray-900/90 p-8 rounded-xl border border-gray-800 transition-all duration-500 group-hover:bg-gradient-to-r from-purple-900/90 to-indigo-900/90 group-hover:scale-[1.02] group-hover:border-purple-500/50 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-6 mx-auto">
        <div className="text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:scale-110">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-all duration-300">
        {description}
      </p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Target,
      title: "Proven Strategies",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      icon: Trophy,
      title: "Tailored Campaigns",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      icon: Gem,
      title: "Industry Experience",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    }
  ];

  return (
    <section className="bg-black py-20 px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,20,90,0.15),transparent_70%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;