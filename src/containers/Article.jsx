import React from "react";

const Article = ({ img, date, text, height = 130, width = "auto" }) => (
  <div className=" text-white flex flex-col ">
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: height,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={` text-transparent rounded-t-[10px] max-sm:max-h-[100px]`}
    >
      sup
    </div>
    <div className=" grid grid-rows-2 items-stretch max-h-[210px] max-lg:max-h-[165px] max-sm:max-h-[145px] p-6 px-12 max-lg:p-4 bg-gradient-to-b from-[#042C54] to-night-shade">
      <div className="row-span-1">
        <p className=" font-Manrope text-[12px] max-lg:text-[9px] max-sm:text-[8px] font-bold">
          {date}
        </p>
        <h3 className=" font-Manrope text-[18px] max-lg:text-[13px] max-sm:text-[10px] font-extrabold mt-4 ">
          {text}
        </h3>
      </div>
      <p className="row-span-1 self-end font-Manrope text-[12px] max-sm:text-[9px] font-bold">
        <a href="#">Read Full Article</a>
      </p>
    </div>
  </div>
);

export default Article;
