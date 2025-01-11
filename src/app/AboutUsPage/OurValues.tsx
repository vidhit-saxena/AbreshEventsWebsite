import Image from 'next/image';
import ourvalue from '@/assets/images/OurValueAboutUs.png';

const OurValues = () => {
    return (
        <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10 sm:mb-16 md:mb-20">
                    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12'>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Our Values</h2>
                        <p className="text-gray-400 max-w-3xl text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 md:mb-20">
                    {[
                        {
                            title: "Trust",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                        },
                        {
                            title: "Believe",
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Honesty",
                            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        }
                    ].map((value, index) => (
                        <div key={index} className="relative border-t-4 border-purple-600 pt-6 sm:pt-8">
                            <div className="absolute top-0 left-0 w-16 sm:w-20 h-1 bg-purple-600"></div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image */}
                <div className="mb-10 sm:mb-12 md:mb-16">
                    <div className="relative w-full aspect-[3/2]">
                        <Image
                            src={ourvalue}
                            alt="Team Meeting"
                            fill
                            className="rounded-lg object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            priority
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center px-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 max-w-5xl mx-auto leading-tight">
                        We believe supporting personal development
                        <span className="block mt-2">create a positive culture and environment for everyone</span>
                    </h3>
                    <button className="bg-purple-600 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg hover:bg-purple-700 transition duration-300">
                        Join Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurValues;


// import Image from 'next/image';
// import ourvalue from '@/assets/images/OurValueAboutUs.png';

// const OurValues = () => {
//     return (
//         <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="mb-20 max-w-7xl mx-auto">
//                     <div className='flex justify-between'>
//                         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Values</h2>
//                         <p className="text-gray-400 max-w-3xl text-base sm:text-lg lg:text-xl">
//                             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
//                             consequat duis enim velit mollit Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//                             commodo consequat.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Values */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//                     <div className="relative border-t-4 border-purple-600 pt-8">
//                         <div className="absolute top-0 left-0 w-20 h-1 bg-purple-600"></div>
//                         <h3 className="text-3xl font-bold mb-4">Trust</h3>
//                         <p className="text-gray-400">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                             incididunt ut labore et.
//                         </p>
//                     </div>
//                     <div className="relative border-t-4 border-purple-600 pt-8">
//                         <div className="absolute top-0 left-0 w-20 h-1 bg-purple-600"></div>
//                         <h3 className="text-3xl font-bold mb-4">Believe</h3>
//                         <p className="text-gray-400">
//                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//                             ea commodo consequat.
//                         </p>
//                     </div>
//                     <div className="relative border-t-4 border-purple-600 pt-8">
//                         <div className="absolute top-0 left-0 w-20 h-1 bg-purple-600"></div>
//                         <h3 className="text-3xl font-bold mb-4">Honesty</h3>
//                         <p className="text-gray-400">
//                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//                             ea commodo consequat.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Image */}
//                 <div className="mb-16">
//                     <Image
//                         src={ourvalue}
//                         alt="Team Meeting"
//                         width={1200}
//                         height={800}
//                         className="w-full h-auto rounded-lg"
//                         priority
//                     />
//                 </div>

//                 {/* Footer */}
//                 <div className="text-center">
//                     <h3 className="text-4xl font-semibold mb-8 max-w-5xl mx-auto">
//                         We believe supporting personal development
//                         <span className="block">create a positive culture and environment for evryone</span>
//                     </h3>
//                     <button className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300">
//                         Join Now
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurValues;