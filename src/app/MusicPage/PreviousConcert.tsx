"use client"
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import opc from "@/assets/images/OPC.png"

interface City {
    name: string;
    image: string | StaticImageData;
    title: string;
    date: string;
    description: string;
}

const cities: City[] = [
    {
        name: "Delhi",
        image: opc,
        title: "Live Daljit Concert",
        date: "22 Nov, 2024",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        name: "Mumbai",
        image: opc,
        title: "Mumbai Night Bash",
        date: "18 Oct, 2024",
        description:
            "Experience the thrill of live music in Mumbai's vibrant atmosphere.",
    },
    {
        name: "Pune",
        image: opc,
        title: "Pune Rock Festival",
        date: "10 Sep, 2024",
        description:
            "Join us for an unforgettable night of music and celebration in Pune.",
    },
    {
        name: "Bangalore",
        image: opc,
        title: "Bangalore Beats",
        date: "5 Aug, 2024",
        description:
            "Feel the rhythm at Bangalore's premier live concert event.",
    },
    {
        name: "Jaipur",
        image: opc,
        title: "Jaipur Beats",
        date: "5 Aug, 2024",
        description:
            "Feel the rhythm at Bangalore's premier live concert event.",
    },
    {
        name: "Udaipur",
        image: opc,
        title: "Udaipur Beats",
        date: "25 Aug, 2024",
        description:
            "Feel the rhythm at Bangalore's premier live concert event.",
    },
    {
        name: "New Delhi",
        image: opc,
        title: "New Delhi Beats",
        date: "15 Aug, 2024",
        description:
            "Feel the rhythm at Bangalore's premier live concert event.",
    },
];

export default function PreviousConcert() {
    const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

    return (
        <section className="bg-black text-white py-4 sm:py-6 lg:py-8">
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header - Responsive text sizes and spacing */}
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                        Our Previous Concert
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* City Tabs - Horizontal scrolling on mobile */}
                <div className="mt-6 sm:mt-8 lg:mt-10">
                    <div className="relative">
                        <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
                            <div className="inline-flex px-4 sm:px-0 min-w-full sm:flex sm:justify-start lg:justify-evenly gap-4 sm:gap-6 lg:gap-8">
                                {cities.map((city) => (
                                    <div key={city.name} className="relative">
                                        <button
                                            onClick={() => setSelectedCity(city)}
                                            className={`whitespace-nowrap text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 px-2 py-1 ${
                                                selectedCity.name === city.name 
                                                ? "text-[#A044FF]" 
                                                : "text-white hover:text-gray-300"
                                            }`}
                                            aria-selected={selectedCity.name === city.name}
                                        >
                                            {city.name}
                                        </button>
                                        {/* Base line (always visible) */}
                                        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-600" />
                                        {/* Animated purple line for selected city */}
                                        <div 
                                            className={`absolute bottom-0 left-0 h-0.5 bg-[#A044FF] transition-all duration-300 ease-in-out ${
                                                selectedCity.name === city.name ? "w-full" : "w-0"
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image and Details - Responsive layout and text */}
                <div className="mt-6 sm:mt-8 lg:mt-10">
                    <div className="relative rounded-lg overflow-hidden">
                        <Image
                            src={selectedCity.image}
                            alt={`Concert in ${selectedCity.name}`}
                            width={1200}
                            height={675}
                            className="w-full aspect-video object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
                                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">
                                        {selectedCity.title}
                                    </h3>
                                    <p className="text-sm sm:text-base lg:text-lg">
                                        {selectedCity.date}
                                    </p>
                                </div>
                                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl">
                                    {selectedCity.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// "use client"
// import { useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import opc from "@/assets/images/OPC.png"

// interface City {
//     name: string;
//     image: string | StaticImageData;
//     title: string;
//     date: string;
//     description: string;
// }

// const cities: City[] = [
//     {
//         name: "Delhi",
//         image: opc,
//         title: "Live Daljit Concert",
//         date: "22 Nov, 2024",
//         description:
//             "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//     },
//     {
//         name: "Mumbai",
//         image: opc,
//         title: "Mumbai Night Bash",
//         date: "18 Oct, 2024",
//         description:
//             "Experience the thrill of live music in Mumbai's vibrant atmosphere.",
//     },
//     {
//         name: "Pune",
//         image: opc,
//         title: "Pune Rock Festival",
//         date: "10 Sep, 2024",
//         description:
//             "Join us for an unforgettable night of music and celebration in Pune.",
//     },
//     {
//         name: "Bangalore",
//         image: opc,
//         title: "Bangalore Beats",
//         date: "5 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "Jaipur",
//         image: opc,
//         title: "Jaipur Beats",
//         date: "5 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "Udaipur",
//         image: opc,
//         title: "Udaipur Beats",
//         date: "25 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "New Delhi",
//         image: opc,
//         title: "New Delhi Beats",
//         date: "15 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
// ];

// export default function PreviousConcert() {
//     const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

//     return (
//         <section className="bg-black text-white py-4 sm:py-6 lg:py-8">
//             <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//                 {/* Header - Responsive text sizes and spacing */}
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                     <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
//                         Our Previous Concert
//                     </h2>
//                     <p className="text-base sm:text-lg lg:text-xl text-gray-400">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     </p>
//                 </div>

//                 {/* City Tabs - Horizontal scrolling on mobile */}
//                 <div className="mt-6 sm:mt-8 lg:mt-10">
//                     <div className="relative">
//                         <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
//                             <div className="inline-flex px-4 sm:px-0 min-w-full sm:flex sm:justify-start lg:justify-evenly gap-4 sm:gap-6 lg:gap-8">
//                                 {cities.map((city) => (
//                                     <button
//                                         key={city.name}
//                                         onClick={() => setSelectedCity(city)}
//                                         className={`whitespace-nowrap text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 px-2 py-1 ${
//                                             selectedCity.name === city.name 
//                                             ? "text-[#A044FF] border-b-2 border-[#A044FF]" 
//                                             : "text-white hover:text-gray-300"
//                                         }`}
//                                         aria-selected={selectedCity.name === city.name}
//                                     >
//                                         {city.name}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Image and Details - Responsive layout and text */}
//                 <div className="mt-6 sm:mt-8 lg:mt-10">
//                     <div className="relative rounded-lg overflow-hidden">
//                         <Image
//                             src={selectedCity.image}
//                             alt={`Concert in ${selectedCity.name}`}
//                             width={1200}
//                             height={675}
//                             className="w-full aspect-video object-cover"
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
//                             <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
//                                 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-4">
//                                     <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold">
//                                         {selectedCity.title}
//                                     </h3>
//                                     <p className="text-sm sm:text-base lg:text-lg">
//                                         {selectedCity.date}
//                                     </p>
//                                 </div>
//                                 <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl">
//                                     {selectedCity.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// "use client"
// import { useState } from "react";
// import Image, { StaticImageData } from "next/image";
// import opc from "@/assets/images/OPC.png"

// interface City {
//     name: string;
//     image: string | StaticImageData;
//     title: string;
//     date: string;
//     description: string;
// }

// const cities: City[] = [
//     {
//         name: "Delhi",
//         image: opc,
//         title: "Live Daljit Concert",
//         date: "22 Nov, 2024",
//         description:
//             "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//     },
//     {
//         name: "Mumbai",
//         image: opc,
//         title: "Mumbai Night Bash",
//         date: "18 Oct, 2024",
//         description:
//             "Experience the thrill of live music in Mumbai's vibrant atmosphere.",
//     },
//     {
//         name: "Pune",
//         image: opc,
//         title: "Pune Rock Festival",
//         date: "10 Sep, 2024",
//         description:
//             "Join us for an unforgettable night of music and celebration in Pune.",
//     },
//     {
//         name: "Bangalore",
//         image: opc,
//         title: "Bangalore Beats",
//         date: "5 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "Jaipur",
//         image: opc,
//         title: "Jaipur Beats",
//         date: "5 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "Udaipur",
//         image: opc,
//         title: "Udaipur Beats",
//         date: "25 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
//     {
//         name: "New Delhi",
//         image: opc,
//         title: "New Delhi Beats",
//         date: "15 Aug, 2024",
//         description:
//             "Feel the rhythm at Bangalore's premier live concert event.",
//     },
// ];

// export default function PreviousConcert() {
//     const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

//     return (
//         <div className="bg-black text-white py-8 px-4 max-w-7xl mx-auto">
//             {/* Header */}
//             <div className="flex flex-col justify-start items-start">
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Previous Concert</h2>
//                 <p className="text-gray-400 text-xl mb-10">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                 </p>
//             </div>

//             {/* City Tabs */}
//             <div role="tablist" className=" flex justify-evenly mt-4 overflow-x-auto">
//                 {cities.map((city) => (
//                     <button
//                         key={city.name}
//                         onClick={() => setSelectedCity(city)}
//                         className={`text-lg md:text-xl font-medium ${selectedCity.name === city.name ? "text-[#A044FF] border-b-2 border-[#A044FF]" : "text-white"
//                             } px-4`}
//                         aria-selected={selectedCity.name === city.name}
//                     >
//                         {city.name}
//                     </button>
//                 ))}
//             </div>

//             {/* Image and Details */}
//             <div className="mt-6">
//                 <div className="relative">
//                     <Image
//                         src={selectedCity.image}
//                         alt={`Concert in ${selectedCity.name}`}
//                         width={1200}
//                         height={1600}
//                         className="w-full  object-cover rounded-lg"
//                     />
//                     <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-lg">
//                         <div className="flex justify-between">
//                             <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">{selectedCity.title}</h3>
//                             <p className="mt-4 text-white text-sm md:text-lg lg:text-xl">{selectedCity.date}</p>
//                         </div>
//                         <p className="mt-2 text-white text-sm md:text-base lg:text-lg">{selectedCity.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
