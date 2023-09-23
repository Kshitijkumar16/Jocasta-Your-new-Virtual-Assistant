import React from "react";
// import { headerLogo } from "../assets";
import { copyrightLogo } from "../assets";
import { footerLinks } from "../constants/constants";
import { socialMedia } from "../constants/constants";


const Footer = () => {
  return (
    <footer id="footer" className="max-container pt-32 pb-12 padding-x ">
      <div
        id="footer-container-2"
        className="flex justify-between items-start lg:gap-52  max-md:gap-8 max-lg:flex-col text-white "
      >
        <div id="sub-container-1" className="relative bottom-5">
          <h3 className="header_text font-extrabold font-montserrat text-[36px] hover:cursor-pointer">
            JOCASTA
          </h3>
          <p className=" font-montserrat text-white-400 text-base sm:max-w-sm leading-7">
            Embrace the next generation of AI
          </p>
          <div id="social-links" className="mt-6 flex gap-6 ">
            {socialMedia.map((social) => (
              <img
                key={social.key}
                src={social.img}
                alt={social.alt}
                className="bg-white rounded-full w-[40px] h-[40px] p-3"
              />
            ))}
          </div>
        </div>

        <div
          id="sub-container-2"
          className="flex flex-1 flex-wrap justify-between items-start gap-16 max-sm:gap-10"
        >
          {footerLinks.map((section) => (
            <div key={section.title} className="">
              <h4 className=" font-montserrat text-3xl font-medium text-transparent bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text">
                {section.title}
              </h4>
              <ul className="mt-4 font-palanquin text-white-400">
                {section.links.map((link) => (
                  <li className="mt-2">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="footer-bottom" className="mt-24 ">
        <div className="flex gap-3 items-center justify-center">
          <img
            src={copyrightLogo}
            alt="copyright icon"
            width={20}
            height={20}
            className="text-white"
          />
          <p className="text-white font-montserrat ">
            Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
