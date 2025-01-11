import Image from 'next/image';
import hero from '@/assets/images/AboutUs.png'

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
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#87878781] via-white to-[#FCA33D] text-transparent bg-clip-text leading-tight">
                    About Abresh Events
                </h1>
                <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                </p>
                {/* Stats Section */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">546+</h2>
                        <p className="text-gray-300 text-lg">Our Clients</p>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-500 mb-2"></div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold">42+</h2>
                        <p className="text-gray-300 text-lg">Services</p>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-500 mb-2"></div>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold">10+</h2>
                        <p className="text-gray-300 text-lg">Country</p>
                    </div>
                </div>
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
//             <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-[#A044FF]">
//                 About Us
//             </h1>
//             <p className="mt-3 text-lg lg:text-xl max-w-4xl mx-auto bg-gradient-to-r from-[#AA00FF] via-white to-[#1E50FF] text-transparent bg-clip-text">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//             </p>
//         </div>
//     </section>
//     );
// };

// export default HeroSection;
