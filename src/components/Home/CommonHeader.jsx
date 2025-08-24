import React from "react";
import lineDec from "../../assets/line-dec.png";

const CommonHeader = ({firstpart, secondpart, text="white", btnClassname="", buttonTxt="", mainClassName, lineDecClassName, descriptionText,secondpartClassName,firstpartClassName }) => {
  return (
    <div>
      <div className={`${mainClassName}`}>
        <p className={`mt-4 text-3xl font-extrabold text-${text} ${firstpartClassName}`}>
          {firstpart} <span className={`text-custom1 ${secondpartClassName}`} >{secondpart}</span>
        </p>

        <div className={`w-16 flex items-center justify-center text-center mt-5 ${lineDecClassName}`}>
          <img src={lineDec} alt="" />
        </div>
        <p className={`mt-6 text-${descriptionText}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          officiis ab asperiores recusandae cum animi inventore repellat.
          Similique, voluptate praesentium.
        </p>
        <button className={`${btnClassname}`}>
          {buttonTxt}
        </button>
      </div>
    </div>
  );
};

export default CommonHeader;
