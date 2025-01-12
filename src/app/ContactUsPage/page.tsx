import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import SocialConnectSection from './SocialConnectSection'
import ScrollToTop from '@/Components/ScrollToTop'

const ContactUsPage = () => {
  return (
    <>
    <Banner/>
    <Navbar/>
    <HeroSection/>
    <ContactSection/>
    <SocialConnectSection/>
    <ContactUs/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default ContactUsPage
