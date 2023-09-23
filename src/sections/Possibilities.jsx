import React from "react";
import { possibility } from "../assets";

const Possibilities = () => {
  return (
    <section className="pb-16 flex justify justify-between items-center  gap-10 mt-16 mb-24">
      <div className="">
        <img
          src={possibility}
          alt="possibilities image"
          width={1700}
          height={1000}
          className="rounded-b-2xl"
        />
      </div>
      <div className="flex flex-col items-start justify-between pr-32 pt-32">
        <p className="text-[#71E5FF] font-montserrat text-lg">
          Discover how Jocasta can transform your life
        </p>
        <h3 className="mt-6 pr-24 leading-[50px] text-transparent text-[42px] font-montserrat bg-gradient-to-r from-purple-600 via-orange-300 to-orange-400 bg-clip-text font-bold">
          The possibilities are beyond your imagination
        </h3>
        <p className="pr-18  text-text-shade mt-10 text-[18px] text-left leading-[36px] font-Manrope">
          <span className="font-bold text-[#71E5FF]">
            Enhanced Productivity:{" "}
          </span>
          Get more done in less time with JARVIS handling routine tasks.{" "}
          <span className="font-bold text-[#71E5FF]">
            Immersive Experiences:{" "}
          </span>
          Experience AR/VR like never before, with JARVIS as your guide.{" "}
          <span className="font-bold text-[#71E5FF]">Personalization: </span>
          JARVIS understands your needs and tailors its responses to you.
        </p>
        <p className="text-lg font-montserrat text-subtext-shade mt-10 ">
          Request Early Access to Get Started
        </p>
      </div>
    </section>
  );
};

export default Possibilities;
