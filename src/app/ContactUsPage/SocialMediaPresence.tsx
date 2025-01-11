import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import customer from "@/assets/images/CustomerSupport.png"
import backgroundImage from "@/assets/images/background2.png";

const SocialMediaPresence: React.FC = () => {
    const socialMediaLinks = [
        {
            icon: <Facebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
            name: "Abresh events",
            platform: "Facebook",
            link: "https://facebook.com",
        },
        {
            icon: <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
            name: "@Abreshevents",
            platform: "Instagram",
            link: "https://instagram.com",
        },
        {
            icon: <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
            name: "Abresh events",
            platform: "LinkedIn",
            link: "https://linkedin.com",
        },
        {
            icon: <Youtube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
            name: "Abresh events",
            platform: "YouTube",
            link: "https://youtube.com",
        },
    ];

    return (
        <section 
            style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="text-white py-8 sm:py-12 md:py-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-[5/4]">
                            <Image
                                src={customer}
                                alt="Person working"
                                fill
                                className="rounded-lg object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Social Media Links Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        {/* Section Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                            Social Media Presence
                        </h2>

                        {/* Social Media Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {socialMediaLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-[#272727] text-white rounded-lg p-3 sm:p-4 hover:bg-gray-700 transition-colors duration-300"
                                >
                                    {/* Icon */}
                                    <div className="p-2 sm:p-3 bg-[#A044FF] rounded-full mr-3 sm:mr-4 flex items-center justify-center">
                                        {item.icon}
                                    </div>

                                    {/* Details */}
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400">
                                            {item.platform}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaPresence;


// import Image from "next/image";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
// import customer from "@/assets/images/CustomerSupport.png"
// import backgroundImage from "@/assets/images/background2.png"; // Import your background image


// const SocialMediaPresence: React.FC = () => {
//     const socialMediaLinks = [
//         {
//             icon: <Facebook className="text-white w-8 h-8" />,
//             name: "Abresh events",
//             platform: "Facebook",
//             link: "https://facebook.com", // Replace with actual link
//         },
//         {
//             icon: <Instagram className="text-white w-8 h-8" />,
//             name: "@Abreshevents",
//             platform: "Instagram",
//             link: "https://instagram.com", // Replace with actual link
//         },
//         {
//             icon: <Linkedin className="text-white w-8 h-8" />,
//             name: "Abresh events",
//             platform: "LinkedIn",
//             link: "https://linkedin.com", // Replace with actual link
//         },
//         {
//             icon: <Youtube className="text-white w-8 h-8" />,
//             name: "Abresh events",
//             platform: "YouTube",
//             link: "https://youtube.com", // Replace with actual link
//         },
//     ];

//     return (
//         <section  style={{
//             backgroundImage: `url(${backgroundImage.src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//         }}
//         className="text-white lg:py-16">
//             <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
//                 {/* Left Image Section */}
//                 <div className="relative w-full lg:w-1/2">
//                     <Image
//                         src={customer} // Replace with your image path
//                         alt="Person working"
//                         width={500}
//                         height={400}
//                         className="rounded-lg"
//                     />
//                 </div>

//                 {/* Right Social Media Links Section */}
//                 <div className="w-full lg:w-1/2 text-center lg:text-left">
//                     {/* Section Heading */}
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//                         Social Media Presence
//                     </h2>

//                     {/* Social Media Links */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                         {socialMediaLinks.map((item, index) => (
//                             <a
//                                 key={index}
//                                 href={item.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center bg-[#272727] text-white rounded-lg p-4 pr-10 shadow-lg hover:bg-gray-700 transition"
//                             >
//                                 {/* Icon */}
//                                 <div className="p-3 bg-[#A044FF] rounded-full mr-4">
//                                     {item.icon}
//                                 </div>

//                                 {/* Details */}
//                                 <div>
//                                     <h3 className="text-xl font-semibold mb-2">
//                                         {item.name}
//                                     </h3>
//                                     <p className="text-base text-gray-400">
//                                         {item.platform}
//                                     </p>
//                                 </div>
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SocialMediaPresence;
