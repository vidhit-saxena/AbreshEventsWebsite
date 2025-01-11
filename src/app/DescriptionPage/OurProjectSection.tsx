"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import OP1 from "@/assets/images/OP1.png"
import OP2 from "@/assets/images/OP2.png"
import OP3 from "@/assets/images/OP3.png"

const OurProjectSection = () => {
    return (
        <section className="bg-[#1a1a1a] py-16">
            {/* Section Title */}
            <div className="container max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
                    Our Project
                </h2>
            </div>

            {/* Project Grid */}
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    {/* Main Project Image */}
                    <div className="md:col-span-6 relative h-[300px] md:h-[600px]  overflow-hidden">
                        <Image
                            src={OP1}
                            alt="Video editing suite"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>
                    <div className="md:col-span-3 relative h-[300px] md:h-[600px]  overflow-hidden">
                        <Image
                            src={OP2}
                            alt="Video editing suite"
                            fill
                            className="object-cover "
                            priority
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>
                    <div className="md:col-span-3 relative h-[300px] md:h-[600px] overflow-hidden">
                        <Image
                            src={OP3}
                            alt="Video editing suite"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 66vw"
                        />
                    </div>

                    {/* Side Images */}
                    {/* <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-2 gap-1 ">
                        <div className="relative h-[300px] md:h-[600px] rounded-xl overflow-hidden">
                            <Image
                                src={OP2}
                                alt="Professional camera equipment"
                                fill
                                className="object-cover brightness-90"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                        <div className="relative h-[300px] md:h-[600px] rounded-xl overflow-hidden">
                            <Image
                                src={OP3}
                                alt="Production control panel"
                                fill
                                className="object-cover brightness-90"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </section>
    );
};

export default OurProjectSection;

// "use client";

// import React from "react";
// import Image, {StaticImageData} from "next/image";
// import OP1 from "@/assets/images/OP1.png"
// import OP2 from "@/assets/images/OP2.png"
// import OP3 from "@/assets/images/OP3.png"

// const OurProjectSection = () => {
//   return (
//     <section className="bg-[#272727] py-16">
//       {/* Section Title */}
//       <div className="container max-w-7xl mx-auto mb-12">
//         <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center">
//           Our Project
//         </h2>
//       </div>

//       {/* Project Grid */}
//       <div className="container max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//           {/* Main Project Image */}
//           <div className="md:col-span-8 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
//             <Image
//               src={OP1}
//               alt="Video editing suite"
//               fill
//               className="object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>

//           {/* Side Images */}
//           <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 h-full">
//             <div className="relative h-[150px] md:h-[245px] rounded-2xl overflow-hidden">
//               <Image
//                 src={OP2}
//                 alt="Professional camera equipment"
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="relative h-[150px] md:h-[245px] rounded-2xl overflow-hidden">
//               <Image
//                 src={OP3}
//                 alt="Production control panel"
//                 fill
//                 className="object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProjectSection;