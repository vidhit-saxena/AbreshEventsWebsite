import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import HistorySection from './HistorySection'
import OurTeam from './OurTeam'
import FAQSection from '../TechnologyPage/FAQ'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import WhatWeBelieveIn from './WhatWeBelieveIn'
import OurValues from './OurValues'
import BrandLogos from '../TechnologyPage/BrandLogos'
import TimelineSection from './TimelineSection'

const AboutUsPage = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <BrandLogos/>
        <TimelineSection/>
        {/* <StatsSection/> */}
        <WhatWeBelieveIn/>
        <OurValues/>
        {/* <HistorySection/> */}
        <OurTeam/>
        <FAQSection/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default AboutUsPage
