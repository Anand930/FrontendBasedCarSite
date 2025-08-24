import React from 'react'
import Navbar from '../components/Home/Navbar.jsx'
import HeroSection from '../components/Home/HeroSection.jsx'
import FeaturedCars from '../components/Home/FeaturedCars.jsx'
import CarsCart from '../components/Home/CarsCart.jsx'
import car1 from '../assets/cars/car1.jpg'
import car2 from '../assets/cars/car2.jpg'
import car3 from '../assets/cars/car3.jpg'
import ViewCarsButton from '../components/Home/ViewCarsButton.jsx'
import AboutUs from '../components/Home/AboutUs.jsx'
import Blog from '../components/Home/Blog.jsx'
import DisplayBlog from '../components/Home/DisplayBlog.jsx'
import ContactUs from '../components/Home/ContactUs.jsx'
import Testimonials from '../components/Home/Testimonials.jsx'
import Footer from '../components/Home/Footer.jsx'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturedCars/>
      <div className='w-[80%] mx-auto mt-20 mb-10 grid lg:grid-cols-3 gap-8 grid-cols-1 place-items-center justify-center items-center '>
        <CarsCart carName={car1}/>
        <CarsCart carName={car2}/>
        <CarsCart carName={car3}/>
      </div>
      <ViewCarsButton/>
      <AboutUs/>
      <Blog/>
      <DisplayBlog/>
      <ContactUs/>
      <Testimonials/>
      <Footer/>
     </div>
  )
}

export default Home