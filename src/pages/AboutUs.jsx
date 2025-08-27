import React from 'react'
import CarHeroSectionForContact from '../components/Contact/CarHeroSectionForContact'
import AboutUsCarHero from '../components/About/AboutUsCarHero'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import AboutUsBlog from '../components/About/AboutUsBlog'
import ContactUs from '../components/Home/ContactUs'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <AboutUsCarHero/>
        <AboutUsBlog/>
        <ContactUs/>
        <Footer/>
        </div>

  )
}

export default AboutUs