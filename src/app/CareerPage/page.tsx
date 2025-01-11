import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import OurValue from './OurValue'
import ReasonsToWorkWithUs from './ReasonsToWorkWithUs'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import CurrentOpenings from './CurrentOpenings'

const CareerPage = () => {
    return (
        <>
            <Banner/>
            <Navbar/>
            <HeroSection/>
            <OurValue/>
            <ReasonsToWorkWithUs/>
            <CurrentOpenings/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default CareerPage
