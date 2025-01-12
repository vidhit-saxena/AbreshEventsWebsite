import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import { Banner } from '../HomePage/Banner'
import HeroSection from './HeroSection'
import Footer from '../HomePage/Footer'
import AskSection from '../FAQPage/AskSection'
import VideoProductionSection from './VideoProductionSection'
import OurProjectSection from './OurProjectSection'
import ScrollToTop from '@/Components/ScrollToTop'

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
        <ScrollToTop/>
        </>
    )
}

export default DescriptionPage
