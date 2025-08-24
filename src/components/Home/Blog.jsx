import React from 'react'
import CommonHeader from './CommonHeader'

const Blog = () => {
  return ( 
    <div className='flex flex-col items-center justify-center'>
        
        <CommonHeader mainClassName={"flex flex-col items-center justify-center text-center my-20 w-3/5 mx-auto "} firstpart={"READ"} secondpart={"OUR BLOGS"} text='black' firstpartClassName={"text-2xl"} descriptionText={"text-gray-200"}/>
    </div>
  )
}

export default Blog