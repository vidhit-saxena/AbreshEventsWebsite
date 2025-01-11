import React from "react";
import { MapPin } from "lucide-react";

const CurrentOpenings = () => {
    const openings = [
        {
            id: 1,
            department: "IT Department",
            title: "Full Time/Part Time Specialist – Full Stack Developer",
            location: "Remote, Uttar Pradesh",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            daysAgo: "3 days ago",
            uploader: "Abresh event",
        },
        {
            id: 2,
            department: "IT Department",
            title: "Full Time/Part Time Specialist – UI UX Designer",
            location: "Remote, Uttar Pradesh",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            daysAgo: "3 days ago",
            uploader: "Abresh event",
        },
        {
            id: 3,
            department: "IT Department",
            title: "Full Time/Part Time Specialist – Back-end Developer",
            location: "Remote, Uttar Pradesh",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            daysAgo: "3 days ago",
            uploader: "Abresh event",
        },
    ];

    return (
        <section className="bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                    Current Openings
                </h2>
                <p className="text-gray-400 text-xl mb-12 max-w-5xl mx-auto text-center leading-relaxed">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {openings.map((opening) => (
                        <div
                            key={opening.id}
                            className="rounded-2xl border border-purple-600 overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-800/40 
                            transition-all duration-300 ease-in-out
                            hover:from-purple-700 hover:to-purple-800 
                            hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
                            group cursor-pointer"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex-grow">
                                    <p className="text-sm text-purple-300 mb-3 group-hover:text-purple-200 
                                    transition-transform duration-300 group-hover:translate-x-2">
                                        {opening.department}
                                    </p>
                                    <h3 className="text-xl font-bold mb-4 transition-colors duration-300 
                                    group-hover:text-purple-300">{opening.title}</h3>
                                    <div className="flex items-center gap-2 mb-4 text-gray-300">
                                        <MapPin size={16} className="text-purple-400 transition-transform 
                                        group-hover:scale-125 duration-300" />
                                        <span className="text-sm group-hover:text-purple-200 
                                        transition-colors duration-300">{opening.location}</span>
                                    </div>
                                    <p className="text-md text-gray-300 mb-8 transition-all duration-300 
                                    group-hover:text-gray-200 pl-0 group-hover:pl-2">
                                        {opening.description}
                                    </p>
                                </div>
                                <div>
                                    <button className="bg-purple-500 w-1/3 hover:bg-white hover:text-purple-600 
                                    font-semibold transition-all duration-300 text-white py-2 px-2 rounded-lg 
                                    text-sm mb-6 hover:scale-105 group-hover:shadow-lg">
                                        Apply Now
                                    </button>
                                    <hr className="w-full mb-2 bg-purple-600 transition-transform duration-300 
                                    group-hover:scale-x-110"></hr>
                                    <div className="text-sm text-purple-300/80">
                                        <span className="text-purple-600 mb-2 block transition-all duration-300 
                                        group-hover:text-purple-400 group-hover:translate-x-1">{opening.daysAgo}</span>
                                        <span className="text-white transition-all duration-300 
                                        group-hover:text-purple-200 group-hover:translate-x-1 inline-block">
                                            upload by {opening.uploader}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentOpenings;

// import React from "react";
// import { MapPin } from "lucide-react";

// const CurrentOpenings = () => {
//     const openings = [
//         {
//             id: 1,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – Full Stack Developer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//         {
//             id: 2,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – UI UX Designer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//         {
//             id: 3,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – Back-end Developer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//     ];

//     return (
//         <section className="bg-black text-white py-16 px-4">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
//                     Current Openings
//                 </h2>
//                 <p className="text-gray-400 text-xl mb-12 max-w-5xl mx-auto text-center leading-relaxed">
//                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
//                     Velit officia consequat duis enim velit mollit.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                     {openings.map((opening) => (
//                         <div
//                             key={opening.id}
//                             className="rounded-2xl border border-purple-600 overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-800/40 transition-all duration-300 hover:from-purple-700 hover:to-purple-800 group"
//                         >
//                             <div className="p-6 flex flex-col h-full">
//                                 <div className="flex-grow">
//                                     <p className="text-sm text-purple-300 mb-3 group-hover:text-purple-200">
//                                         {opening.department}
//                                     </p>
//                                     <h3 className="text-xl font-bold mb-4">{opening.title}</h3>
//                                     <div className="flex items-center gap-2 mb-4 text-gray-300">
//                                         <MapPin size={16} className="text-purple-400" />
//                                         <span className="text-sm">{opening.location}</span>
//                                     </div>
//                                     <p className="text-md text-gray-300 mb-8">
//                                         {opening.description}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <button className="bg-purple-500 hover:bg-white hover:text-purple-600 font-semibold transition-colors duration-200 text-white py-2 px-6 rounded-lg text-sm mb-6">
//                                         Apply Now
//                                     </button>
//                                     <hr className="w-full mb-2 bg-purple-600"></hr>
//                                     <div className="text-sm text-purple-300/80">
//                                         <span className="text-purple-600 mb-2">{opening.daysAgo}</span><br/>
//                                         {/* <span className="mx-1">·</span> */}
//                                         <span className="text-white">upload by {opening.uploader}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CurrentOpenings;


// import React from "react";

// const CurrentOpenings = () => {
//     const openings = [
//         {
//             id: 1,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – Full Stack Developer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//         {
//             id: 2,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – UI/UX Designer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//         {
//             id: 3,
//             department: "IT Department",
//             title: "Full Time/Part Time Specialist – Back-end Developer",
//             location: "Remote, Uttar Pradesh",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//             daysAgo: "3 days ago",
//             uploader: "Abresh event",
//         },
//     ];

//     return (
//         <div className="bg-black text-white py-16 px-4">
//             <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
//                 Current Openings
//             </h2>
//             <p className="text-center text-gray-400 mb-10">
//                 Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
//                 Velit officia consequat duis enim velit mollit.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//                 {openings.map((opening) => (
//                     <div
//                         key={opening.id}
//                         className="bg-purple-600 bg-opacity-20 border border-purple-500 rounded-xl p-6 flex flex-col justify-between"
//                     >
//                         <div>
//                             <h4 className="text-sm font-medium text-purple-400">
//                                 {opening.department}
//                             </h4>
//                             <h3 className="text-lg font-semibold mt-2">{opening.title}</h3>
//                             <p className="text-sm text-gray-300 mt-2 flex items-center">
//                                 <span className="material-icons text-purple-400 mr-1">
//                                     location_on
//                                 </span>
//                                 {opening.location}
//                             </p>
//                             <p className="text-sm text-gray-300 mt-4">{opening.description}</p>
//                         </div>
//                         <div className="mt-6">
//                             <button className="bg-purple-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-purple-400 transition">
//                                 Apply Now
//                             </button>
//                             <p className="text-xs text-gray-400 mt-4">
//                                 {opening.daysAgo} <span>upload by {opening.uploader}</span>
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CurrentOpenings;
