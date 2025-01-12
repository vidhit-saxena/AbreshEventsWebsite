import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import { OngoingProject } from './Ongoingprojects'
import OurServices from './OurServices'
import { Banner } from '../HomePage/Banner'
import HeroSection from './HeroSection'
import ScrollToTop from '@/Components/ScrollToTop'
import { Gallery } from '../HomePage/Gallery'
import WhyChooseUs from '../EventsPage/WhyChooseUs'
import FAQSection from '../HomePage/FAQs'
import NewsletterSignup from '../HomePage/NewsletterSignUp'
import LogoTicker from '../EventsPage/Logoticker'

const TechnologyPage = () => {
    return (
        <>
            <Banner/>
            <Navbar/>
            <HeroSection/>
            <LogoTicker/>
            <WhyChooseUs/>
            <OurServices/>
            <Gallery/>
            <OngoingProject/>
            <FAQSection/>
            <ContactUs/>
            <NewsletterSignup/>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default TechnologyPage
