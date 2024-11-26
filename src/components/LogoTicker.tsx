import Image from "next/image";
import HappyCustomer from '../assets/images/Happy-customer.png'
import ProjectDone from '../assets/images/Project-done.png'
import YearsExperience from '../assets/images/Year-experience.png'
import HappyCustomer1 from '../assets/images/Happy-customer1.png'
import ProjectDone1 from '../assets/images/Project-done1.png'
import YearsExperience1 from '../assets/images/Year-experience1.png'

const images = [
  { id: 1, src: HappyCustomer, alt: "Happy Customer" }, 
  { id: 2, src: ProjectDone, alt: "Project Done" }, 
  { id: 3, src: YearsExperience, alt: "Years Experience" },
  { id: 4, src: HappyCustomer1, alt: "Years Experience 1" },
  { id: 5, src: ProjectDone1, alt: "Years Experience 1" },
  { id: 6, src: YearsExperience1, alt: "Years Experience 1" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text=white py-[72px] sm-py-24">
      <div className="container ">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]  after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex gap-16">
            {images.map(({id, src, alt}) => (
              <Image
                key={id}
                src={src}
                alt={alt}
                className="flex-none h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};