import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";

const HelpSection: React.FC = () => {
    const contactDetails = [
        {
            icon: <MapPin className="text-white w-6 h-6" />,
            title: "Visit Our Office",
            description: "Company name Ltd. 86 Beehive Lane, Greater London, United Kingdom",
            buttonText: "View on google map",
            buttonLink: "#", // Replace with the actual Google Maps link
        },
        {
            icon: <Mail className="text-white w-6 h-6" />,
            title: "Mail for Work",
            description: "info@Company.com",
            buttonText: "Mail for Work",
            buttonLink: "mailto:info@Company.com",
        },
        {
            icon: <Phone className="text-white w-6 h-6" />,
            title: "Call Us",
            description: "+91123 456 7890\nMon to Sat 9 am to 5 pm",
            buttonText: "Call Us",
            buttonLink: "tel:+911234567890",
        },
        {
            icon: <MessageSquare className="text-white w-6 h-6" />,
            title: "We are here to help",
            description: "support@abresh.com",
            buttonText: "Send Message",
            buttonLink: "mailto:support@abresh.com",
        },
    ];

    return (
        <section className=" bg-black text-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 ">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">We’re here to help</h2>
                <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
                    Ask us anything about our products, services, and/or any questions you may have.
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {contactDetails.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D926] text-white rounded-lg p-6 shadow-lg flex flex-col items-center"
                        >
                            {/* Icon */}
                            <div className="bg-[#A044FF] p-4 rounded-full mb-8 ">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold">{item.title}</h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mt-4 mb-4 whitespace-pre-line text-center">
                                {item.description}
                            </p>

                            {/* Button */}
                            <a
                                href={item.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-4 py-2 w-11/12 justify-center bg-[#A044FF] text-white rounded-2xl text-base hover:bg-purple-700 transition"
                            >
                                {item.buttonText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
