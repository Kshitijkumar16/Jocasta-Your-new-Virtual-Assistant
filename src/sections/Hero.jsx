import React from "react";
import { headerImg, group } from "../assets";

const Hero = () => {
  return (
    <section className=" lg:max_container md:mt-6 pb-24">
      <div id="container-1" className="md:flex items-center justify-between">
        <div className="">
          <h3 className="header_text text-[58px] max-sm:text-[30px] max-sm:leading-[40px] py-6 mt-16">
            <span className="">Say hello to your first</span>
            <br /> Augmented Reality Virtual Assistant
          </h3>
          <img
            id="sm-image"
            src={headerImg}
            alt="Header Image"
            height={400}
            width={350}
            className="hidden max-md:block "
          />

          <p className="text-text-shade lg:pr-4 text-xl leading-8 font-palanquin max-sm:w-full lg:text-justify">
            Unveil the brilliant AR of Jocasta,
            <span className="max-sm:hidden ">
              {" "}
              a cutting-edge AGI VA system designed
            </span>{" "}
            to enhance your productivity, streamline your tasks. Have the best
            personal assistant you can ask for!
          </p>
          <div className="flex mt-10 ">
            <input
              type="text"
              placeholder="Your Email Address"
              className="header_input  w-4/5 rounded-l-lg"
            />
            <button
              type="button"
              className="orange_btn rounded-l-none max-sm:text-sm"
            >
              Get Started
            </button>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <img
              src={group}
              alt="people-profiles"
              height={50}
              width={200}
              className="px-1 max-md:px-0 max-sm:w-[100px]"
            />
            <p className="text-sm font-montserrat text-white max-sm:text-xs">
              1600 people requested access in last 24 hours
            </p>
          </div>
        </div>
        <div id="container-2" className="max-lg:hidden">
          <img src={headerImg} width={1300} height={1400} className="mr-24" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
