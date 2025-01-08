import Image from 'next/image';
import musicHero from '@/assets/images/MusicHero.png'; // Update if needed based on your actual project structure

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={musicHero}
                    alt="Music Services Background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50 blur-none"
                    priority
                />
            </div>

            {/* Centered Content */}
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                    Music <span className="text-white">Services</span>
                </h1>
                <p className="text-gray-200 mt-3 text-lg lg:text-xl max-w-2xl mx-auto">
                    Explore the world of music with our premium services. Discover
                    your rhythm and unleash your inner musician.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;


// import Image from 'next/image';
// import musicHero from '@/assets/images/MusicHero.png'; // Replace with the actual image path in your public directory

// const HeroSection: React.FC = () => {
//     return (
//         <section className="relative min-h-screen flex items-center justify-center text-white">
//             {/* Background Image */}
//             <div className="absolute inset-0 -z-10">
//                 <Image
//                     src={musicHero}
//                     alt="Technology Services"
//                     layout="fill"
//                     objectFit="cover"
//                     className="brightness-50 blur-sm"
//                     priority
//                 />
//             </div>

//             {/* Centered Content */}
//             <div className="text-center px-4">
//                 {/* <p className="text-xl lg:text-2xl mb-3 font-semibold">
//                     Welcome to ABResh Technologies
//                 </p> */}
//                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
//                     Music 
//                     <span className="text-white">Services</span>
//                 </h1>
//                 <p className="text-gray-200 mt-3 text-lg lg:text-xl max-w-2xl mx-auto">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting
//                     industry. Lorem Ipsum has been the industry's standard dummy text.
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;