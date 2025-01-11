import React from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import SocialConnectSection from './SocialConnectSection'
import HelpSection from './HelpSection'
import SocialMediaPresence from './SocialMediaPresence'

const ContactUsPage = () => {
  return (
    <>
    <Banner/>
    <Navbar/>
    <HeroSection/>
    <HelpSection/>
    <SocialMediaPresence/>
    {/* <ContactSection/> */}
    {/* <SocialConnectSection/> */}
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default ContactUsPage
