import React from 'react'
import Navbar from '../components/Home/Navbar'
import CarHeroSectionForContact from '../components/Contact/CarHeroSectionForContact'
import Footer from '../components/Home/Footer'
import ContactInfo from '../components/Contact/ContactInfo'
import FormAndMap from '../components/Contact/FormAndMap'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <CarHeroSectionForContact/>
      <ContactInfo/>
      <FormAndMap/>
      <Footer/>
      </div>
  )
}

export default Contact