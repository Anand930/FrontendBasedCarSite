import React from "react";

import CommonHeader from "./CommonHeader.jsx";

const AboutUs = () => {
  return (
    <div className="relative my-10 h-screen bg-[url('/aboutSectionImage.jpg')] bg-auto bg-no-repeat bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[#3c3f42] before:w-full before:h-full before:opacity-90">
      <div className="flex items-center justify-center w-full mx-auto px-auto relative flex-col">
        <CommonHeader firstpart={"READ"} secondpart={"ABOUT US"} mainClassName={"md:pt-28 pt-16 pb-12 flex w-4/5 flex-col items-center justify-center mx-auto text-center z-10 relative"} descriptionText={"white leading-tight"} />
        <p className="text-white w-4/5 leading-tight text-center text-md sm:my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum quam expedita tempore architecto obcaecati eius aperiam cum ipsam odio impedit minima id ipsum voluptatibus at cumque, quos tempora.
        </p>
        <p className="text-white w-4/5 leading-tight text-center text-md my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur alias sapiente magnam, doloribus, sed enim quod deleniti eligendi tempora beatae omnis quia obcaecati? Itaque nesciunt, voluptatem enim magni autem necessitatibus rem dolore molestias deleniti officia, earum id quos. Nobis quo voluptatem sint suscipit? Eligendi, voluptatibus?
        </p>

      </div>
    </div>
  );
};

export default AboutUs;
