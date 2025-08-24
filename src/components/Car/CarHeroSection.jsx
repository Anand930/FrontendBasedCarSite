import React from 'react'
import CommonHeader from '../Home/CommonHeader'

const CarHeroSection = () => {
    return (
        <div>
            <div className="relative  w-full h-96 bg-[url('/banner-image-1.jpg')] items-center bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[#3c3f42] before:w-full before:h-full before:opacity-75 ">
                <div className='flex flex-col items-center justify-center relative z-10 w-4/5 h-full mx-auto my-auto text-center'>
                    <CommonHeader firstpart={"SEND US A"} secondpart={"MESSAGE"} buttonTxt='CONTACT US' btnClassname=' my-4 bg-custom1 text-white cursor-pointer p-2 hidden ' mainClassName={"flex items-center justify-center flex-col"} lineDecClassName={"hidden"} descriptionText={"white"} />
                    {/* <button className='z-10 bg-custom1 text-white cursor-pointer p-2 '>CONTACT US</button> */}
                </div>
            </div>
        </div>
    )
}

export default CarHeroSection