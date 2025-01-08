import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import { MusicScroller } from './Scroller'
import WhyMusicServices from './WhyMusicServices'
import WhyMusicServicesSecond from './WhyMusicServicesSecond'
import RestartSection from './RestartSection'
import FAQSection from '../TechnologyPage/FAQ'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import VideoCarousel from './VideoCarousel'
import PortfolioSection from './PortfolioSection'
import PreviousConcert from './PreviousConcert'
import OurServices from './OurServices'

const MusicPage = () => {
  return (
    <>
        <Banner/>
        <Navbar/>
        <HeroSection/>
        <MusicScroller/>
        <PortfolioSection/>
        <WhyMusicServices/>
        <WhyMusicServicesSecond/>
        <OurServices/>
        <RestartSection/>
        <VideoCarousel/>
        <PreviousConcert/>
        <FAQSection/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default MusicPage
