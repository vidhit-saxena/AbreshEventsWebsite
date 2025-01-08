import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import FAQSection from '../TechnologyPage/FAQ'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import WhyChooseUs from './WhyChooseUs'
import VideoCarousel from './VideoCarousel'
import OurTopEvents from './OurTopEvents'
import OurWork from './OurWork'
import ServicesSection from './ServicesSection'

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
    </>
  )
}

export default ProductionPage
