import React from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { FaCube } from "react-icons/fa6";
import { BsGearFill } from "react-icons/bs";

const CarsCart = ({ carName }) => {
  return (
    <div className="w-full">
      <div className="shadow-md p-3 border-2 border-gray-100 rounded-lg">
        <div>
          <img className="rounded-lg" src={carName} alt="" />
        </div>
        <div className="flex gap-2 py-2">
            <div className="line-through text-custom1">
                oldPrice
            </div>
            <div className="text-custom1">
                newPrice
            </div>
        </div>
        <div>
            <p className="text-xl font-bold">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex gap-3 my-4">
            <div className="flex items-center justify-center gap-1"> <MdOutlineSpeed color="gray"/><p className="text-gray-500">speed</p></div>
            <div className="flex items-center justify-center gap-1"><FaCube color="gray"/><p className="text-gray-500">cc</p></div>
            <div className="flex items-center justify-center gap-1"><BsGearFill color="gray" /><p className="text-gray-500">manual</p></div>
        </div>
        <div>
            <p>+  View Car</p>
        </div>
      </div>
    </div>
  );
};

export default CarsCart;
