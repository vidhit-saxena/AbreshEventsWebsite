'use client';

import ModelViewer from '@/Sections/ModelViewer';
import { Banner } from "@/Sections/Banner";
import { Navbar } from "@/Sections/Navbar";
import {Hero} from "@/Sections/Hero"
import LogoTicker from "@/Sections/LogoTicker";
import Introduction  from "@/Sections/Introduction";
import AllEvents from "@/Sections/AllEvents";
import  Services   from "@/Sections/Services";
import { Testimonials } from '@/Sections/Testimonials';
import  FAQs  from '@/Sections/FAQs';
import { Gallery } from '@/Sections/Gallery';
import {TopEvents} from '@/Sections/TopEvents';
import Footer from '@/Sections/Footer';
import NewsletterSignup from '@/Sections/NewsletterSignUp';
import ContactUs from '@/Sections/ContactUs';
import  UpcomingEvents  from '@/Sections/UpcomingEvents';



export default function Home() {
  return (
    <>
      <Banner/>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <ModelViewer/>
      <Introduction/>
      <AllEvents/>
      <Services/>
      <Testimonials/>
      <Gallery/>
      <TopEvents/>
      <UpcomingEvents/>
      <FAQs/>
      <ContactUs/>
      <NewsletterSignup/>
      <Footer/>
      
    </>
  );
}
