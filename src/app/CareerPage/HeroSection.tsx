import Image, {StaticImageData} from 'next/image';
import heroImage from "@/assets/images/CPHero.png"

const HeroSection = () => {
  return (
    <section className="relative bg-black pt-4 text-white">
      <div className="max-7-xl mx-auto inset-0 flex items-start justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#87878781] via-white to-[#FCA33D] text-transparent bg-clip-text leading-tight">
            Growing together through <span className="">Innovation Collaboration,</span> And Care
          </h1>
          <p className="text-lg sm:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
      </div>
      <div className="">
        <Image
          src={heroImage} // replace with your image path
          alt="Team collaboration"
          layout="responsive"
          width={1000}
          height={600}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
