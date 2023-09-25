import React from "react";
import { Article } from "../containers";
import { blogData } from "../constants/constants";
import { mainblog } from "../constants/constants";
import MainArticle from "../containers/MainArticle";

const Blog = () => {
  return (
    <section className=" lg:pt-40 lg:pb-10 max-lg:py-24 max-lg:pb-0">
      <div id="blog-section-heading">
        <h2 className="purp_orange font-Manrope lg:tracking-tight bg-clip-text text-transparent text-[72px] leading-[90px] max-lg:text-[52px] max-lg:leading-[70px] max-sm:text-[32px] max-sm:leading-[45px] font-extrabold ">
          A Lot is Happening,
          <br />
          We are blogging about it.
        </h2>
      </div>
      <div
        id="blogs-list"
        className="flex max-lg:flex-wrap lg:gap-24 max-lg:gap-10 py-32 max-sm:py-16 "
      >
        <div className="lg:w-1/3 max-lg:w-full">
          {mainblog.map((data) => (
            <MainArticle
              key={data.key}
              img={data.IMG}
              date={data.date}
              text={data.title}
            />
          ))}
        </div>
        <div className="lg:w-2/3 max-lg:w-full grid lg:gap-16 max-lg:gap-8 lg:grid-cols-lgfluid max-lg:grid-cols-mdfluid max-sm:grid-cols-smfluid">
          {blogData.map((data) => (
            <div>
              <Article
                key={data.key}
                img={data.IMG}
                date={data.date}
                text={data.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
