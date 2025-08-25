import React from "react";
import carVideo from "../../assets/car_video.mp4";

const HeroSection = () => {
  return (
    <div className="h-screen hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src={carVideo} type="video/mp4" />
      </video>
        <div className="flex flex-col items-center justify-center w-4/5 mx-auto h-full text-center ">
            <p className="text-white text-lg text-center my-3 font-extrabold ">LOREM IPSUM DOLOR SIR AMET.</p>
            <p className="text-white text-5xl md:text-7xl font-extrabold my-2 leading-[5rem]">BEST <span className="text-custom1">CAR DEALER</span> IN TOWN!</p>
            <button className="hover:text-white my-4 bg-custom1 p-3 text-gray-600 hover:bg-red-500 rounded-xl">CONTACT US</button>
        </div>
    </div>
  );
};

export default HeroSection;
