import React, { useState } from "react";
import Box from "./Box";
import ReadMore from "./ReadMore";
import DisplayBlogRight from "./DisplayBlogRight";

const DisplayBlog = () => {
  const [selected, setSelected] = useState("button1");
  const handleOnClick = (button) => {
    setSelected(button)
  }
  return (
    <div className="lg:flex lg:items-center lg:justify-center max-w-[80%] mx-auto gap-16 ">
      <div className="left lg:w-[35%] flex flex-col gap-6">
        <>
          <Box
            para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, libero?"}
            onClick={() => handleOnClick("button1")}
            className={selected === "button1" ? "text-red-500" : ""}
          />

          <Box
            para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, libero?"}
            onClick={() => handleOnClick("button2")}
            className={selected === "button2" ? "text-red-500" : ""}
          />

          <Box
            para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, libero?"}
            onClick={() => handleOnClick("button3")}
            className={selected === "button3" ? "text-red-500" : ""}
          />
        </>

        <ReadMore />
      </div>
      <div className="right lg:w-[65%]">

        <DisplayBlogRight
          selected={selected}
          button={'button1'}
          paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod est sit, facilis, odio neque accusantium, iure perferendis beatae aperiam dolorum delectus saepe!"}
          description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
        <DisplayBlogRight
          selected={selected}
          button={'button2'}
          paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod est sit, facilis, odio neque accusantium, iure perferendis beatae aperiam dolorum delectus saepe!"}
          description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
        <DisplayBlogRight
          selected={selected}
          button={'button3'}
          paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod est sit, facilis, odio neque accusantium, iure perferendis beatae aperiam dolorum delectus saepe!"}
          description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis facere dolore doloremque est in laudantium fugiat ratione magni accusantium esse et nostrum officiis ducimus numquam, ipsa assumenda, officia velit praesentium quo sit distinctio. Sit, cupiditate."} />
      </div>
    </div>
  );
};

export default DisplayBlog;
