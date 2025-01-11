import React from "react";
import Image from "next/image";

const ReasonsToWorkWithUs = () => {
    const reasons = [
        {
            id: 1,
            title: "New opportunities",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            icon: "/opportunity-icon.png",
        },
        {
            id: 2,
            title: "Employees care",
            description:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
            icon: "/employees-care-icon.png",
        },
        {
            id: 3,
            title: "Push the boundaries",
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.",
            icon: "/boundaries-icon.png",
        },
        {
            id: 4,
            title: "Maintain the reputation",
            description:
                "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum'.",
            icon: "/reputation-icon.png",
        },
    ];

    return (
        <section className="bg-[#272727] text-white py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10">
                    Reasons to work with us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-2 md:mx-4 lg:mx-auto px-4">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className="group bg-black rounded-xl p-4 shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500 
                            transition-all duration-300 ease-in-out
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
                            hover:border-purple-400 hover:scale-[1.02]
                            hover:bg-gradient-to-br from-black to-purple-900/30
                            cursor-pointer"
                        >
                            <div className="flex items-center gap-4 md:gap-4 lg:gap-8 mb-4">
                                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <Image
                                        src={reason.icon}
                                        alt={reason.title}
                                        width={42}
                                        height={42}
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                                    {reason.title}
                                </h3>
                            </div>
                            <p className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-gray-300 pl-0 group-hover:pl-4 transition-all">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReasonsToWorkWithUs;


// import React from "react";
// import Image from "next/image";

// const ReasonsToWorkWithUs = () => {
//     const reasons = [
//         {
//             id: 1,
//             title: "New opportunities",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//             icon: "/opportunity-icon.png",
//         },
//         {
//             id: 2,
//             title: "Employees care",
//             description:
//                 "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
//             icon: "/employees-care-icon.png",
//         },
//         {
//             id: 3,
//             title: "Push the boundaries",
//             description:
//                 "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.",
//             icon: "/boundaries-icon.png",
//         },
//         {
//             id: 4,
//             title: "Maintain the reputation",
//             description:
//                 "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum'.",
//             icon: "/reputation-icon.png",
//         },
//     ];

//     return (
//         <section className="bg-[#272727] text-white py-12">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10">
//                     Reasons to work with us
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-2 md:mx-4 lg:mx-auto px-4">
//                     {reasons.map((reason) => (
//                         <div
//                             key={reason.id}
//                             className="bg-black rounded-xl p-4 shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500"
//                         >
//                             <div className="flex items-center gap-4 md:gap-4 lg:gap-8">
//                                 <Image
//                                     src={reason.icon}
//                                     alt={reason.title}
//                                     width={42}
//                                     height={42}
//                                     className="rounded-lg"
//                                 />
//                                 <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
//                             </div>
//                             <p className="text-lg text-gray-400">{reason.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReasonsToWorkWithUs;


// import React from "react";
// import Image from "next/image";

// const ReasonsToWorkWithUs = () => {
//     const reasons = [
//         {
//             id: 1,
//             title: "New opportunities",
//             description:
//                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//             icon: "/opportunity-icon.png", // Replace with your icon path
//         },
//         {
//             id: 2,
//             title: "Employees care",
//             description:
//                 "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
//             icon: "/employees-care-icon.png", // Replace with your icon path
//         },
//         {
//             id: 3,
//             title: "Push the boundaries",
//             description:
//                 "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.",
//             icon: "/boundaries-icon.png", // Replace with your icon path
//         },
//         {
//             id: 4,
//             title: "Maintain the reputation",
//             description:
//                 "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum'.",
//             icon: "/reputation-icon.png", // Replace with your icon path
//         },
//     ];

//     return (
//         <section className="bg-[#272727] text-white py-12 ">
//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4">Reasons to work with us</h2>
//                 <p className="text-gray-400 text-xl text-center mb-12 max-w-5xl mx-auto leading-relaxed">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//                     industry's standard dummy text ever
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
//                     {reasons.map((reason) => (
//                         <div
//                             key={reason.id}
//                             className="bg-[#000000] border border-purple-500 rounded-lg p-6 flex flex-col md:flex-row items-center"
//                         >   
//                             <div className="w-12 h-12 flex-shrink-0 mb-4 md:mb-0 md:mr-4">
//                                 <Image
//                                     src={reason.icon}
//                                     alt={reason.title}
//                                     width={48}
//                                     height={48}
//                                     className="rounded-lg"
//                                 />
//                             </div>
//                             <div>
//                                 <h3 className="text-lg font-semibold">{reason.title}</h3>
//                                 <p className="text-sm text-gray-400 mt-2">{reason.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ReasonsToWorkWithUs;
