import React, { useState } from 'react'
import Box from '../Home/Box'
import DisplayBlogRight from '../Home/DisplayBlogRight'
import { IoFootball } from "react-icons/io5";
import { BsBagDashFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import aboutImage1 from '../../assets/about/about-image-1.jpg'
import aboutImage2 from '../../assets/about/about-image-2.jpg'
import aboutImage3 from '../../assets/about/about-image-3.jpg'

const AboutUsBlog = () => {
    const [buttonClicked, setButtonClicked] = useState('button1')
    const handleOnClick = (button) => {
        setButtonClicked(button)
    }
    return (
        <div className='flex lg:flex-row flex-col my-20 w-4/5 mx-auto gap-10 lg:gap-0'>
            <div
                className="flex items-center lg:flex-row flex-col justify-center lg:ml-0 lg:mx-auto gap-20 ">
                <div className="left flex flex-col gap-6 items-center justify-center">
                    <Box para="Our Goal" className={buttonClicked === "button1" ? "text-custom1" : ""} onClick={() => handleOnClick('button1')} icon={<IoFootball size={50} color='#ed563b' />} mainClassName={"flex items-center justify-start gap-4 w-full"} />
                    <Box para="Our Work" className={buttonClicked === "button2" ? "text-custom1" : ""} onClick={() => handleOnClick('button2')} icon={<BsBagDashFill size={50} color='#ed563b' />} mainClassName={"flex items-center justify-start gap-4 w-full"} />
                    <Box para="Our Passion" className={buttonClicked === "button3" ? "text-custom1" : ""} onClick={() => handleOnClick('button3')} icon={<FaHeart size={50} color='#ed563b' />} mainClassName={"flex items-center justify-start gap-4 w-full"} />
                </div>
            </div>

            <div className="right lg:w-[65%]">

                <DisplayBlogRight
                    img={aboutImage1}
                    paragraphClassName={"text-gray-700"}
                    paragraph={"Our Goal"}
                    selected={buttonClicked}
                    button={'button1'}
                    buttonClassName="hidden"
                    classNameForIcons={"hidden"}
                    description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
                <DisplayBlogRight
                    paragraphClassName={"text-gray-700"}
                    img={aboutImage2}
                    paragraph={"Our Work"}
                    selected={buttonClicked}
                    button={'button2'}
                    buttonClassName="hidden"
                    classNameForIcons={"hidden"}
                    description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
                <DisplayBlogRight
                    paragraphClassName={"text-gray-700"}
                    img={aboutImage3}
                    paragraph={"Our Passion"}
                    selected={buttonClicked}
                    button={'button3'}
                    buttonClassName="hidden"
                    classNameForIcons={"hidden"}
                    description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
            </div>

        </div>
    )
}

export default AboutUsBlog