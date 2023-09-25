import React from "react";

const MainArticle = ({ img, date, text, height = 400 }) => (
  <div className=" text-white flex flex-col ">
    <div
      style={{
        backgroundImage: `url(${img})`,
        height: height,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={` text-transparent rounded-t-[10px] max-lg:max-h-[250px] max-sm:max-h-[150px]`}
    >
      sup
    </div>
    <div className=" grid grid-rows-2 max-h-[405px] max-lg:max-h-[210px] max-sm:max-h-[160px] p-6 px-12 max-sm:p-5 max-sm:px-10 bg-gradient-to-b from-[#042C54] to-night-shade">
      <div className="row-span-1">
        <p className=" font-Manrope text-[12px] max-sm:text-[9px] font-bold md:mt-6">{date}</p>
        <h3 className=" font-Manrope text-[18px] max-sm:text-[13px] font-extrabold lg:mt-14 max-lg:mt-10 max-sm:mt-4  ">
          {text}
        </h3>
      </div>
      <p className="row-span-1 self-end font-Manrope text-[12px] font-bold">
        Read Full Article
      </p>
    </div>
  </div>
);

export default MainArticle;
