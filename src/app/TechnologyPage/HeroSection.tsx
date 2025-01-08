import Image from 'next/image';
import heroImage from '@/assets/images/hero-image-removebg-preview.png'; // Replace with the actual image path in your public directory

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={heroImage}
                    alt="Technology Services"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50 blur-none"
                    priority
                />
            </div>

            {/* Centered Content */}
            <div className="text-center px-4">
                <p className="text-xl lg:text-2xl mb-3 font-semibold">
                    Welcome to ABResh Technologies
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-purple-500 leading-tight">
                    Technology
                    <span className="text-white">Services</span>
                </h1>
                <p className="text-gray-200 mt-3 text-lg lg:text-xl max-w-2xl mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;


// import Image from 'next/image';
// import heroImage from '@/assets/images/hero-image-removebg-preview.png'; // Replace with the actual image path in your public directory

// const HeroSection: React.FC = () => {
//     return (
//         <section className="bg-[#010001] text-white md:mt-4 md:mb-6">
//             <div className="max-w-7xl mx-auto  py-12 lg:py-16 px-4 lg:px-0 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-4">
                

//                 {/* Left Image Section */}
//                 <div className="relative  w-2/3 md:w-2/3 lg:w-3/4 h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
//                     <Image
//                         src={heroImage}
//                         alt="Technology Services"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                     />
//                 </div>

//                 {/* Right Content Section */}
//                 <div className="w-full md:w-1/2 text-center md:text-left lg:ml-20">
//                     <p className="text-white text-xl lg:text-2xl mb-3 font-semibold">Welcome to ABResh Technologies</p>
//                     <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-purple-500 leading-[0.9]">
//                         Technology <br/><span className="text-white">Services</span>
//                     </h1>
//                     <p className="text-gray-300 mt-3 text-lg lg:text-xl">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting
//                         industry. Lorem Ipsum has been the industry's standard dummy text.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
