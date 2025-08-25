import React from 'react'
import CarHeroSection from '../components/Car/CarHeroSection'
import Navbar from '../components/Home/Navbar'
import SearchQuery from '../components/Car/SearchQuery'
import DisplayCars from '../components/Car/DisplayCars'
import PageNavigationButton from '../components/Car/PageNavigationButton'
import Footer from '../components/Home/Footer'
import FormAndMap from '../components/Contact/FormAndMap'

const Car = () => {
  return (
    <div>
        <Navbar/>
        <CarHeroSection/>
        <SearchQuery/>
        <DisplayCars/>
        <PageNavigationButton/>
        <FormAndMap/>
        <Footer/>
    </div>
  )
}

export default Car