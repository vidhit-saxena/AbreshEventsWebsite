import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import { Banner } from '../HomePage/Banner'
import HeroSection from './HeroSection'
import Footer from '../HomePage/Footer'
import AskSection from '../FAQPage/AskSection'
import VideoProductionSection from './VideoProductionSection'
import OurProjectSection from './OurProjectSection'

const DescriptionPage = () => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <OurProjectSection/>
        <VideoProductionSection/>
        <AskSection/>
        <Footer/>
        </>
    )
}

export default DescriptionPage
