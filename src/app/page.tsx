'use client';

import ModelViewer from '@/app/HomePage/ModelViewer';
import { Banner } from "@/app/HomePage/Banner";
import { Navbar } from "@/app/HomePage/Navbar";
import {Hero} from "@/app/HomePage/Hero"
import LogoTicker from "@/app/HomePage/LogoTicker";
import Introduction  from "@/app/HomePage/Introduction";
import AllEvents from "@/app/HomePage/AllEvents";
import  Services   from "@/app/HomePage/Services";
import { Testimonials } from '@/app/HomePage/Testimonials';
import  FAQs  from '@/app/HomePage/FAQs';
import { Gallery} from '@/app/HomePage/Gallery';
import {TopEvents} from '@/app/HomePage/TopEvents';
import Footer from '@/app/HomePage/Footer';
import NewsletterSignup from '@/app/HomePage/NewsletterSignUp';
import ContactUs from '@/app/HomePage/ContactUs';
import  UpcomingEvents  from '@/app/HomePage/UpcomingEvents';



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
