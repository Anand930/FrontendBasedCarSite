import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import DisplayBlogCart from '../components/Blog/DisplayBlogCart'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <DisplayBlogCart/>
      <Footer/>
    </div>
  )
}

export default Blog