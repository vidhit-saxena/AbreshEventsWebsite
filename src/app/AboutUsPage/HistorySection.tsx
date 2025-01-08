import Image, { StaticImageData } from 'next/image';
import history from '@/assets/images/HistoryAboutUs.png';

const HistorySection: React.FC = () => {
    return (
        <section className="bg-[#272727] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                    {/* Image Section */}
                    {/* <div className="w-full lg:w-1/3">
                        <div className="relative aspect-square w-full max-w-2xl mx-auto lg:max-w-none overflow-hidden rounded-lg">
                            <Image
                                src={history}
                                alt="Event History"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div> */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative w-full aspect-square lg:aspect-[3/4] max-w-2xl mx-auto lg:max-w-none overflow-hidden rounded-lg">
                            <Image
                                src={history}
                                alt="Event History"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-2/3 space-y-6 mt-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Our History <br className="hidden sm:block" />
                            of Abresh Events
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;

// import Image,{StaticImageData} from 'next/image';
// import history from '@/assets/images/HistoryAboutUs.png'

// const HistorySection: React.FC = () => {
//     return (
//         <section className="bg-[#272727] text-white py-16 ">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
//                 {/* Image Section */}
//                 <div className="flex-shrink-0 w-full lg:w-1/3">
//                     <div className="relative overflow-hidden">
//                         <Image
//                             src={history} // Replace with the actual image path
//                             alt="Event History"
//                             width={800}
//                             height={800}
//                             className="object-cover shadow-lg"
//                         />
//                     </div>
//                 </div>

//                 {/* Text Section */}
//                 <div className="w-full lg:w-2/3">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                         Our History <br />
//                         of Abresh Events
//                     </h2>
//                     <p className="text-gray-400 text-lg mb-2">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                         aliquip ex ea commodo consequat.
//                     </p>
//                     <p className="text-gray-400 text-lg">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//                         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//                         aliquip ex ea commodo consequat.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HistorySection;
