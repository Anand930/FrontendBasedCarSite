import React from 'react'
import DisplayBlogRight from '../Home/DisplayBlogRight.jsx'
import ContactUs from '../Home/ContactUs.jsx'
import img2 from '../../assets/blogs/blog-image-2.jpg'
import img3 from '../../assets/blogs/blog-image-3.jpg'
import { FaComments, FaUser } from 'react-icons/fa6'
import { MdCalendarMonth } from 'react-icons/md'
import RecentPost from './RecentPost.jsx'

const DisplayBlogCart = () => {
  return (
    <div>
      <ContactUs mainDivClassName={"my-0"} />
      <div className='w-4/5 mx-auto my-10 '>
        <div className='flex'>
          <div className="left w-3/5 flex flex-col items-center justify-center gap-10">

            <DisplayBlogRight paragraph={"Lorem ipsum dolor sit amet."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus unde voluptas recusandae iusto accusamus labore ad cum blanditiis rem temporibus, placeat neque eligendi dolor nemo minus incidunt hic aspernatur. Error dolorum omnis esse!"} />
            <DisplayBlogRight img={img2} paragraph={"Lorem ipsum dolor sit amet."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus unde voluptas recusandae iusto accusamus labore ad cum blanditiis rem temporibus, placeat neque eligendi dolor nemo minus incidunt hic aspernatur. Error dolorum omnis esse!"} />
            <DisplayBlogRight img={img3} paragraph={"Lorem ipsum dolor sit amet."} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus unde voluptas recusandae iusto accusamus labore ad cum blanditiis rem temporibus, placeat neque eligendi dolor nemo minus incidunt hic aspernatur. Error dolorum omnis esse!"} />
          </div>
          <div className="right w-2/5 pl-8 ">
            <div className='flex flex-col items-start justify-center gap-2'>
              <p className='font-bold text-xl'>
                Search
              </p>
              <input type="text" placeholder='type to search...' className='h-10 p-2 outline-none border-[1px] border-gray-300 w-full rounded-sm' />
            </div>
            <div className='mt-8'>
              <p className='font-semibold text-xl text-gray-800'>Recent Posts</p>
            </div>
            <div className='flex flex-col gap-4'>
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayBlogCart