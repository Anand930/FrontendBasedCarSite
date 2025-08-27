import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import CarHeroForTestimonials from '../components/Testimonials/CarHeroForTestimonials'
import TestimonialCart from '../components/Home/TestimonialCart'

const Testimonials = () => {
  return (
    <div><div>
      <Navbar />
      <CarHeroForTestimonials />
      <div className='my-20 w-4/5 mx-auto '>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        <TestimonialCart />
        <TestimonialCart />
        <TestimonialCart />
        <TestimonialCart />
      </div>
      </div>
      
      <Footer />
    </div></div>
  )
}

export default Testimonials