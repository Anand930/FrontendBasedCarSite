import React from "react";
import lineDec from "../../assets/line-dec.png";
import CommonHeader from "./CommonHeader";

const FeaturedCars = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-[80%] mx-auto flex items-center justify-center mt-20 ">
       <CommonHeader mainClassName={"flex flex-col text-center items-center justify-center"} firstpart={'FEATURED'} secondpart={'CARS'} text={"black"} />
      </div>
    </div>
  );
};

export default FeaturedCars;
