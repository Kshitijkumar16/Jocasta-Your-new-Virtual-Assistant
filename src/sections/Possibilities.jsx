import React from "react";
import { possibility } from "../assets";

const Possibilities = () => {
  return (
    <section className="pb-16 flex max-sm:flex-wrap justify-between items-center  gap-10 mt-16 mb-24">
      <div className=" md:w-1/2">
        <img
          src={possibility}
          alt="possibilities image"
          width={1700}
          height={1000}
          className="rounded-b-2xl"
        />
      </div>
      <div className="flex flex-col md:w-1/2 items-start justify-between lg:pr-32 lg:pt-32">
        <p className="text-[#71E5FF] font-montserrat text-lg max-lg:text-[17px] max-lg:hidden">
          Discover how Jocasta can transform your life
        </p>
        <h3 className="mt-20 lg:pr-32 lg:leading-[50px] text-transparent text-[42px] max-lg:text-[30px] max-sm:text-[26px] font-montserrat bg-gradient-to-r from-purple-600 via-orange-300 to-orange-400 bg-clip-text font-bold">
          The possibilities are beyond your imagination
        </h3>
        <p className="text-text-shade mt-10 text-[17px] text-left leading-[36px] font-Manrope max-sm:text-[14px] max-sm:leading-[27px]">
          <span className="font-bold text-[#71E5FF]">
            Enhanced Productivity:{" "}
          </span>
          Get more done in less time with Jocasta handling routine tasks.
          <br className="lg:hidden" />
          <span className="font-bold text-[#71E5FF]">
            Immersive Experiences:{" "}
          </span>
          Experience VR like never before, with Jocasta as your guide.
          <br className="lg:hidden" />
          <span className="font-bold text-[#71E5FF]">Personalization: </span>
          Jocasta understands your needs and tailors its responses to you.
        </p>
        <p className="text-lg font-montserrat text-subtext-shade mt-24 max-lg:mt-16">
          <a href="#">Request Early Access to Get Started</a>
        </p>
      </div>
    </section>
  );
};

export default Possibilities;
