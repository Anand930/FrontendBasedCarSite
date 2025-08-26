import React, { useState } from "react";
import img1 from "../../assets/blogs/blog-image-1.jpg";
import img2 from '../../assets/blogs/blog-image-2.jpg'
import img3 from '../../assets/blogs/blog-image-3.jpg'
import { FaUser } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { FaComments } from "react-icons/fa";

const DisplayBlogRight = ({ img = img1, selected, button, paragraph, description, buttonClassName, classNameForIcons, paragraphClassName }) => {
  return (
    <div className={selected === button ? "block" : "hidden"}>
      <div className="image  ">
        <img className="rounded-md" src={button === "button1" ? img : button === "button2" ? img2 : button === "button3" ? img3 : img} alt="blogImage" />
      </div>
      <div className="blog-details">
        <p className={`my-6 text-xl font-extrabold ${paragraphClassName}`}>
          {paragraph}
        </p>
      </div>
      <div className="below-icons">
        <div className={`flex gap-3 ${classNameForIcons}`} >
          <div className="flex items-center justify-center gap-1">
            {" "}
            <FaUser color="gray" size={13} />
            <p className="text-gray-500 text-xs">John Doe</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdCalendarMonth color="gray" size={13} />
            <p className="text-gray-500 text-xs">27.07.2020 10:10</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaComments color="gray" size={13} />
            <p className="text-gray-500 text-xs">15 comments</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p className="my-8 text-sm text-gray-500">{description}</p>
      </div>
      <div className="continue-reading-btn">
        <button className={`text-white bg-red-500 py-2 px-4 text-sm ${buttonClassName}`}>
          CONTINUE READING
        </button>
      </div>
    </div>
  );
};

export default DisplayBlogRight;
