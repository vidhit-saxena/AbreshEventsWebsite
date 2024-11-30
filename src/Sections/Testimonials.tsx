import avatar1 from "@/assets/images/avatar-1.png"
import avatar2 from "@/assets/images/avatar-2.png"
import avatar3 from "@/assets/images/avatar-3.png"
import avatar4 from "@/assets/images/avatar-4.png"
import Image from "next/image";



const testimonials = [
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Nikunj Kumar",
        title: "Director @Google",
        avatarImg: avatar1,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Kushal Saxena",
        title: "Director @Microsoft",
        avatarImg: avatar2,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Vidhit Saxena",
        title: "Director @Apple",
        avatarImg: avatar3,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Somar",
        title: "Director @Tesla",
        avatarImg: avatar4,
    },
];


export const Testimonials =() => {
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="text-5xl text-center tracking-tighter font-medium">
                    What They Saying
                </h2>
                <p className="text-white/70 text-lg text-center mt-5">
                    Our services and Events have transformed out Clients strategies
                </p >
                {testimonials.map(testimonial => (
                    <div key={testimonial.name}>
                        <div>{testimonial.text}</div>
                        <Image src={testimonial.avatarImg} alt={'Avatar for ${testimonial.name}'} />
                        <div>{testimonial.name}</div>
                        <div>{testimonial.title}</div>
                    </div>
                ))}
            </div>
        </section>
        );
};