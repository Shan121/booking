import { latoFont, openSansFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
      <div className="grid grid-cols-1 h-[870px] shrink-0 bg-banner bg-cover bg-no-repeat opacity-80 text-white overflow-hidden">
        <div className="flex bg-[#182734CC]">
          <div className="flex items-start pt-[120px] pr-3 pb-[100px] pl-3 w-[796px] max-w-[880px]">
            <div className="flex flex-col h-[260px] w-[716px] shrink-0 gap-6 ml-[87px] mt-[263px] mr-[482px] mb-[347px]">
              <strong
                className={
                  "font-normal text-[18px] w-[405px] leading-[26px] text-[#EAEAEA]" +
                  " " +
                  openSansFont.className
                }
              >
                Free changes for life.
              </strong>
              <h1
                className={
                  "flex items-start pr-0 text-white font-black text-[53.803px] leading-[64.563px] capitalize w-[716px] mr-[264px]" +
                  " " +
                  latoFont.className
                }
              >
                Hand-Made Website for Your Business
              </h1>
              <a
                href="/"
                className="flex items-center justify-center gap-[9.2px] py-[15px] pr-[25px] pl-[27px] w-[182px] bg-primary text-white"
              >
                <img
                  src="/images/doubleArrow.png"
                  alt="double arrow"
                  className="font-black text-white text-base text-center gap-1"
                />
                Book Call
              </a>
            </div>
          </div>
          <Image
            src="/images/image1.png"
            alt="Image 1"
            width={916}
            height={911}
            style={{
              objectFit: "contain",
              backgroundRepeat: "no-repeat",
              marginBottom: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
