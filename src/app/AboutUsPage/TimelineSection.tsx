import Image from "next/image";
import TL from "@/assets/images/TimeLine.png"
import Timeline1 from "@/assets/images/timeline1.jpg"; // Add your actual image paths
import Timeline2 from "@/assets/images/timeline2.jpg";
import Timeline3 from "@/assets/images/timeline3.jpg";
import Timeline4 from "@/assets/images/timeline4.jpg";

const TimelineSection: React.FC = () => {
    const timelineData = [
        {
            year: "2021",
            title: "Idea lanched",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageSrc: TL,
        },
        {
            year: "2022",
            title: "features",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageSrc: TL,
        },
        {
            year: "2023",
            title: "National Presence",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageSrc: TL,
        },
        {
            year: "2024",
            title: "International Presence",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            imageSrc: TL,
        },
    ];

    return (
        <section className="bg-black py-24">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Timeline */}
                <div className="relative">
                    {/* Main horizontal line */}
                    <div className="absolute top-[40px] left-0 w-full h-[2px] bg-purple-600"></div>
                    
                    {/* Timeline items container */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Year with dot */}
                                <div className="relative mb-16">
                                    {/* Year box */}
                                    <div className="inline-block bg-black text-white border border-gray-700 rounded-lg px-4 py-1 text-lg mb-2">
                                        {item.year}
                                    </div>
                                    {/* Timeline dot */}
                                    <div className="absolute top-[40px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-purple-600"></div>
                                </div>

                                {/* Image */}
                                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-purple-600 text-xl font-semobold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-md leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;

// import Image from "next/image";

// const TimelineSection: React.FC = () => {
//     const timelineData = [
//         {
//             year: "2021",
//             title: "Idea Launched",
//             description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//             imageSrc: "/timeline-image.png", // Replace with the actual image path
//         },
//         {
//             year: "2022",
//             title: "Features",
//             description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//             imageSrc: "/timeline-image.png", // Replace with the actual image path
//         },
//         {
//             year: "2023",
//             title: "National Presence",
//             description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//             imageSrc: "/timeline-image.png", // Replace with the actual image path
//         },
//         {
//             year: "2024",
//             title: "International Presence",
//             description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
//             imageSrc: "/timeline-image.png", // Replace with the actual image path
//         },
//     ];

//     return (
//         <section className="bg-black py-16">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Timeline */}
//                 <div className="relative flex justify-between items-center space-x-4">
//                     {/* Line */}
//                     <div className="absolute top-12 left-0 w-full h-1 bg-purple-600 z-0"></div>
                    
//                     {timelineData.map((item, index) => (
//                         <div
//                             key={index}
//                             className="relative flex flex-col items-center space-y-4 text-center z-10"
//                         >
//                             {/* Year */}
//                             <div className="bg-black text-white border border-purple-600 rounded-full px-4 py-2 text-md">
//                                 {item.year}
//                             </div>

//                             {/* Image */}
//                             <div className="relative w-64 h-40 rounded-lg overflow-hidden">
//                                 <Image
//                                     src={item.imageSrc}
//                                     alt={item.title}
//                                     layout="fill"
//                                     objectFit="cover"
//                                 />
//                             </div>

//                             {/* Title and Description */}
//                             <h3 className="text-xl font-semibold text-purple-600">
//                                 {item.title}
//                             </h3>
//                             <p className="text-gray-400 text-md max-w-xs">
//                                 {item.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TimelineSection;
