import React from 'react'
import CarHeroSection from '../components/Car/CarHeroSection'
import Navbar from '../components/Home/Navbar'
import SearchQuery from '../components/Car/SearchQuery'
import DisplayCars from '../components/Car/DisplayCars'
import PageNavigationButton from '../components/Car/PageNavigationButton'
import Footer from '../components/Home/Footer'

const Car = () => {
  return (
    <div>
        <Navbar/>
        <CarHeroSection/>
        <SearchQuery/>
        <DisplayCars/>
        <PageNavigationButton/>
        
        <Footer/>
    </div>
  )
}

export default Car