import React from "react";

const FootMessage = ({ textcolor}) => {
  return (
    <section className={`pb-12 pt-24 text-center`}>
      <div id="footer-container-1">
        <h3 className=" footer_message md:px-[200px] text-[62px] font-extrabold font-montserrat max-sm:text-[48px] max-sm:leading-[52px] max-md:text-left">
          Do you want to step in to the future before others
        </h3>
        <button
          type="button"
          className={`footer_btn mt-24 ${textcolor} max-md:flex`}
        >
          Request Early Access
        </button>
      </div>
    </section>
  );
};

export default FootMessage;
