import Image from 'next/image';
import aiImage from '@/assets/images/ai-image.png';

const OurServices: React.FC = () => {
    return (
        <section className="bg-black text-white py-12 px-5 mb-6 md:py-5 md:px-10 lg:py-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">Our Services</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 border-[1px] border-purple-600 rounded-md bg-white/20">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 lg:w-1/3 h-60 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={aiImage}
                            alt="Artificial Intelligence"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 md:mt-4  mb-4 lg:mb-0 pl-2 md:pl-8 sm:mr-2 lg:mr-4">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                            Artificial Intelligence & Machine Learning
                        </h3>
                        <p className="text-lg mb-2 leading-relaxed text-white">
                            Lorem Ipsum has been the industry's standard dummy text. Lorem
                            Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            for decades.
                        </p>
                        <button
                            className="flex items-center px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-purple-500 hover:text-white hover:border-purple-500 focus:outline-none text-sm"
                            aria-label="See more about AI and Machine Learning"
                        >
                            See More
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
