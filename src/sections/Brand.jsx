import React from "react";
import { brands } from "../constants/constants";

const Brand = () => {
  return (
    <section className="md:my-32 max-md:my-24">
      <div className="flex justify-center items-center gap-24 flex-wrap max-md:gap-10">
        {brands.map((brand) => (
          <img
            src={brand.img}
            alt={brand.label}
            key={brand.key}
            height={40}
            width={100}
            className="max-sm:w-[50px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Brand;
