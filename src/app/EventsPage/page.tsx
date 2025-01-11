import ScrollToTop from "@/Components/ScrollToTop";
import { Banner } from "../HomePage/Banner";
import ContactUs from "../HomePage/ContactUs";
import FAQSection from "../HomePage/FAQs";
import Footer from "../HomePage/Footer";
import { Navbar } from "../HomePage/Navbar";
import NewsletterSignup from "../HomePage/NewsletterSignUp";
import { TopEvents } from "../HomePage/TopEvents";
import UpcomingEvents from "../HomePage/UpcomingEvents";
import { DigitalMarketing } from "./DigitalMarketing";
import { Gallery } from "./Gallery";
import HeroSection from "./HeroSection";
import LogoTicker from "./Logoticker";
import OurWork from "./OurWork";
import { PublicRelation } from "./PublicRelation";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
    return (
      <div>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <LogoTicker/>
        <OurWork/>
        <DigitalMarketing/>
        <Gallery/>
        <PublicRelation/>
        <TopEvents/>
        <UpcomingEvents/>
        <WhyChooseUs/>
        <FAQSection/>
        <ContactUs/>
        <NewsletterSignup/>
        <Footer/>
        <ScrollToTop/>
      </div>
    );
  }
  