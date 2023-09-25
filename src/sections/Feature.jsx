import React from "react";
import { gridIndexRectangle } from "../assets";
import { griddata } from "../constants/constants";

const Feature = () => {
  return (
    <section className="pt-48 pb-16 flex max-lg:flex-wrap justify-between items-start">
      <div id="label-subdiv" className="relative top-8">
        <p className="font-extrabold lg:pr-32 leading-[50px] text-transparent text-[45px] font-Manrope bg-gradient-to-r from-purple-600 via-orange-300 to-orange-400 bg-clip-text max-sm:text-[28px] max-sm:leading-[39px] lg:w-[600px]">
          The Future is Now <br /> Realise It{" &"}
          <br />{" "}
          {/*and You Just Need to . Step Into the
          Future Today &*/}{" "}
          Make It Happen
        </p>
        <p className="md:text-lg font-montserrat text-subtext-shade md:mt-20 text-sm mt-6">
          <a href="#">Request Early Access to Get Started</a>
        </p>
      </div>
      <div
        id="grid-subdiv"
        className="grid grid-rows-4 max-lg:pt-40 max-sm:pt-20 "
      >
        {griddata.map((dataset) => (
          <div
            key={dataset.key}
            className="mt-10 row-span-1 grid grid-cols-12 md:gap-10 max-sm:gap-3 max-sm:flex max-sm:flex-wrap "
          >
            <div id="label-div" className="col-span-4">
              <img
                src={gridIndexRectangle}
                alt="grid-index"
                width={60}
                height={20}
              />
              <p className="pr-6 text-white text-[18px] leading-[24px] font-Manrope font-extrabold tracking-tight relative left-1">
                {dataset.label}
              </p>
            </div>
            <div id="data-div" className="col-span-8">
              <p className="text-text-shade text-justify max-sm:text-left max-sm:my-0 font-Manrope text-[14px] leading-[24px] max-sm:relative left-1 max-sm:pr-10">
                {dataset.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
