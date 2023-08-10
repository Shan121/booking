import { monteserratFont } from "@/utils/fonts";
import React from "react";

const PostsBanner = () => {
  return (
    <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
      <div className="grid grid-cols-1 h-[314px] shrink-0 bg-posts-banner bg-contain bg-no-repeat opacity-80 text-white overflow-hidden">
        <div className="flex bg-[#182734CC]">
          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <h1
              className={
                "font-semibold text-[50px] leading-[60px] uppercase text-center" +
                " " +
                monteserratFont.className
              }
            >
              Posts
            </h1>
            <ul className="flex items-start pr-0">
              <li className="text-white font-medium text-xl leading-6 text-center">
                <a href="/">Home » Posts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsBanner;
