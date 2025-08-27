import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaBehance } from 'react-icons/fa6'
import memberImage1 from '../../assets/team/team-image-1.jpg'

const TeamMemberCart = ({ img = memberImage1, designation, fullName, description, mainDivClassName, cartParentClassName }) => {
    return (
        <div className={`${mainDivClassName}`}>
            <div className={`${cartParentClassName} flex flex-col items-start justify-center p-4`}>
                <div className='w-full flex items-center justify-center'>

                    <img className='w-52' src={img} alt="" />
                </div>
                <p className='text-xs font-semibold text-custom1 mt-5 mb-3'>{designation}</p>
                <p className='text-xl font-bold text-gray-800'>{fullName}</p>
                <p className='my-5 text-sm text-gray-500'>{description}</p>
                <div className='social-links flex items-center justify-center gap-2'>
                    <FaFacebook color='black' size={15} />
                    <FaTwitter color='black' size={15} />
                    <FaLinkedin color='black' size={15} />
                    <FaBehance color='black' size={15} />
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCart