import React from "react";
import { useState, useEffect } from "react";
// import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <header className="pt-12 lg:padding-x text-white w-full ">
      <nav className="flex justify-between items-center max_container">
        <div id="logo-section" className="jocasta text-4xl">
          <p className="">JOCASTA</p>
        </div>

        {/* {toggle && ()} */}
        <div
          id="-desktop-links-section"
          className="nav_links items-center gap-24 hidden 2xl:flex "
        >
          {navLinks.map((link) => (
            <a className="font-bold nav_a_tags" key={link.key} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div id="signin-section" className="flex gap-4">
          <button className="transparent_btn max-sm:hidden">Sign In</button>
          <button className="orange_btn ">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
