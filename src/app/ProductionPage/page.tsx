import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import WhyChooseUs from './WhyChooseUs'
import VideoCarousel from './VideoCarousel'
import OurTopEvents from './OurTopEvents'
import OurWork from './OurWork'
import ServicesSection from './ServicesSection'
import ScrollToTop from '@/Components/ScrollToTop'
import FAQSection from '../HomePage/FAQs'

const ProductionPage = () => {
  return (
    <>
    <Banner/>
    <Navbar/>
    <HeroSection/>
    <WhyChooseUs/>
    <OurWork/>
    <ServicesSection/>
    <VideoCarousel/>
    <OurTopEvents/>
    <FAQSection/>
    <ContactUs/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default ProductionPage
