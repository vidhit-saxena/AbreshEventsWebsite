import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import FAQSection from './FAQ'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import { OngoingProject } from './Ongoingprojects'
import { Gallery } from './Gallery'
import WhyChooseUs from './WhyChooseUs'
import OurServices from './OurServices'
import { Banner } from '../HomePage/Banner'
import HeroSection from './HeroSection'
import BrandLogos from './BrandLogos'

const TechnologyPage = () => {
    return (
        <>
            <Banner/>
            <Navbar/>
            <HeroSection/>
            <BrandLogos/>
            <WhyChooseUs/>
            <OurServices/>
            <Gallery/>
            <OngoingProject/>
            <FAQSection/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default TechnologyPage
