import Image from 'next/image';
import daljit from '@/assets/images/Daljit.png'
import backgroundImage from "@/assets/images/background.png";

const teamMembers = [
    { name: 'Daljit Singh', img: daljit },
    { name: 'Shilpa Roy', img: daljit },
    { name: 'Sihan Singh', img: daljit },
    { name: 'Daljeet Kaur', img: daljit },
    { name: 'Sharmila Roy', img: daljit },
    { name: 'Jitendar Singh', img: daljit },
    { name: 'Ganpat Sharma', img: daljit },
    { name: 'Sukanya Singhaniya', img: daljit },
    { name: 'Jassu Sharma', img: daljit },
    { name: 'Nittya John', img: daljit },
];

const OurTeam: React.FC = () => {
    return (
        <section  style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
        className="text-white py-10 lg:py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Team</h2>
                <p className="text-gray-300 text-xl mb-10">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>Velit officia
                    consequat duis enim velit mollit.
                </p>

                {/* Team Members */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 overflow-hidden shadow-lg text-center"
                        >
                            <div className="relative w-full h-44">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className=""
                                />
                            </div>
                            <div className="bg-white py-2 text-black font-semibold hover:text-[#A044FF] hover:border-[#A044FF]">{member.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;



// const teamMembers = [
//     { name: 'Daljit Singh', img: '/images/daljit.png' },
//     { name: 'Shilpa Roy', img: '/images/shilpa.png' },
//     { name: 'Sihan Singh', img: '/images/sihan.png' },
//     { name: 'Daljeet Kaur', img: '/images/daljeet.png' },
//     { name: 'Sharmila Roy', img: '/images/sharmila.png' },
//     { name: 'Jitendar Singh', img: '/images/jitendar.png' },
//     { name: 'Ganpat Sharma', img: '/images/ganpat.png' },
//     { name: 'Sukanya Singhaniya', img: '/images/sukanya.png' },
//     { name: 'Jassu Sharma', img: '/images/jassu.png' },
//     { name: 'Nittya John', img: '/images/nittya.png' },
// ];