import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import HistorySection from './HistorySection'
import OurTeam from './OurTeam'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import WhatWeBelieveIn from './WhatWeBelieveIn'
import ScrollToTop from '@/Components/ScrollToTop'
import FAQSection from '../HomePage/FAQs'

const AboutUsPage = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <StatsSection/>
        <WhatWeBelieveIn/>
        <HistorySection/>
        <OurTeam/>
        <FAQSection/>
        <ContactUs/>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default AboutUsPage
