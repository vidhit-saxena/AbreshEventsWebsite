import Image from 'next/image';
import hero from '@/assets/images/ContactUs.png'

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-svh flex flex-col items-center justify-center bg-gradient-to-r from-[#AA00FF] via-black to-[#1E50FF]">
            {/* Background Map */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={hero} // Replace with your actual background image path
                    alt="Background Map"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    className=""
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#131313] via-white to-[#FCA33D] text-transparent bg-clip-text leading-tight">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;


// import Image from 'next/image';


// const HeroSection: React.FC = () => {
//     return (
//         <section className="relative min-h-svh flex items-center justify-center bg-gradient-to-r from-[#AA00FF] via-black  to-[#1E50FF]">

//         <div className="text-center px-4">
//             <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#87878781] via-white to-[#FCA33D] text-transparent bg-clip-text">
//                 Contact Us 
//             </h1>
//             <p className="mt-3 text-lg lg:text-xl max-w-4xl mx-auto text-white">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//             </p>
//         </div>
//     </section>
//     );
// };

// export default HeroSection;
