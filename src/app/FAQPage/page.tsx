import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import FAQSection from './FAQ'
import AskSection from './AskSection'
import Footer from '../HomePage/Footer'
import ScrollToTop from '@/Components/ScrollToTop'

const FAQPage = () => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <FAQSection/>
        <AskSection/>
        <Footer/>
        <ScrollToTop/>
        </>
    )
}

export default FAQPage
