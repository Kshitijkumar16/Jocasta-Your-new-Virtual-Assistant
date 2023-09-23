import React from "react";

const Possibility = () => {
  return (
    <div className=" flex justify-between items-center bg-gradient-to-r from-purple-500 to-orange-300 py-16 px-10 rounded-xl">
      <div>
        <p className="text-gray-950 font-bold capitalize font-palanquin">
          Request early access to get started
        </p>
        <h2 className="mt-2 font-extrabold font-Manrope text-3xl">
          Register today & start exploring the endless possibilities.
        </h2>
      </div>
      <div>
        <div className="font-bold bg-black rounded-full">
          <button className=" hover:text-white text-xl duration-300 bg-gradient-to-r from-purple-500 to-orange-300 bg-clip-text text-transparent px-12 py-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
