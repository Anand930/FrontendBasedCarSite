import React from 'react'
import CarsCart from '../Home/CarsCart'
import car1 from '../../assets/cars/car1.jpg'
import car2 from '../../assets/cars/car2.jpg'
import car3 from '../../assets/cars/car3.jpg'

const DisplayCars = () => {
    return (
        <div><div className='w-[80%] mx-auto  mb-10 grid lg:grid-cols-3 gap-8 grid-cols-1 place-items-center justify-center items-center '>
            <CarsCart carName={car1} />
            <CarsCart carName={car2} />
            <CarsCart carName={car3} />
            <CarsCart carName={car3} />
            <CarsCart carName={car3} />
            <CarsCart carName={car3} />
        </div></div>
    )
}

export default DisplayCars