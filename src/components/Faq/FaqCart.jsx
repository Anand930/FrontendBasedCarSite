import React from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'

const FaqCart = ({question, description,classNameForQuestionIcon, classNameForSr, Sr}) => {
  return (
    <div className='flex flex-col items-start justify-center mb-14'>
        <div className='flex items-center justify-start gap-2 mb-3'>
            <p className={`text-2xl font-extrabold text-gray-800 ${classNameForSr}`}>{Sr}</p>
            <HiQuestionMarkCircle color='1f2937' size={20} className={`${classNameForQuestionIcon}`}/>
            <p className='text-2xl font-extrabold text-gray-800'>{question}</p>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default FaqCart