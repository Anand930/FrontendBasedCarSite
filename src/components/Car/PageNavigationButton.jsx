import React from 'react'
import ButtonComponent from './ButtonComponent'

const PageNavigationButton = () => {
  return (
    <div className='flex w-4/5 mx-auto items-center justify-center my-20'>
        <ButtonComponent value="<<" buttonClassName={"w-14 h-12"}/>
        <ButtonComponent value="1" buttonClassName={"w-14 h-12"}/>
        <ButtonComponent value="2" buttonClassName={"w-14 h-12"}/>
        <ButtonComponent value="3" buttonClassName={"w-14 h-12"}/>
        <ButtonComponent value=">>" buttonClassName={"w-14 h-12"}/>
    </div>
  )
}

export default PageNavigationButton