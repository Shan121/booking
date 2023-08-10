import { monteserratFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const AboutInfo = () => {
  return (
    <div className="flex items-center justify-center pt-[101px] pr-[52px] pb-[100px] pl-[53px] bg-white">
      <section className="flex items-start justify-start shrink-0 flex-wrap w-[1320px]">
        <div className="flex items-start shrink-0 w-[770px] max-w-[770px] py-0 px-3">
          <div className="flex flex-col items-start shrink-0 gap-2 w-[746px] pr-0">
            <div className="w-[681px] h-[364]">
              <strong
                className={
                  "flex flex-col items-start w-[681px] pr-0 capitalize leading-6 text-[16px] font-bold text-[#212529]" +
                  " " +
                  monteserratFont.className
                }
              >
                Like always. Like never before.
                <img
                  src="/images/pseudo1.png"
                  alt="line"
                  className="bg-primary"
                />
              </strong>
              <h3
                className={
                  "text-[28px] font-bold leading-[35px] my-3 text-[#444] capitalize" +
                  " " +
                  monteserratFont.className
                }
              >
                Bespoke Software & Digital Transformation.
              </h3>
              <p className="flex items-start w-[681px] font-normal text-[15px] my-6 pt-[0px] pr-[48px] pb-[1px] pl-[0px]">
                By automating processes and tasks, businesses can reduce costs
                and improve productivity. Additionally, custom software tailored
                to the specific needs of a business can give them a significant
                advantage over their competitors.
              </p>
              <p className="flex items-start w-[681px] font-normal text-[15px] my-6 pt-[0px] pr-[48px] pb-[1px] pl-[0px]">
                Our software development agency has a team of experienced and
                skilled professionalswho can create custom software solutions
                for your business. We understand the unique requirements of each
                business and create tailor-made solutions that can help them
                achieve their goals.
              </p>

              <a
                href="/"
                className="flex items-center gap-[9.2px] py-[15px] pr-[25px] pl-[27px] w-[182px] bg-primary text-white"
              >
                Get A Quote{" "}
                <img
                  src="/images/arrow.png"
                  alt="arrow"
                  className="font-black text-white text-base text-center"
                />
              </a>
            </div>
            <ul className="flex items-start gap-[89px] w-[681px] pt-[50px] pr-[124px] pb-[0px] pl-[0px]">
              <li className="flex flex-col items-end gap-[15px] relative">
                <div className="flex items-start justify-center py-0 px-[38px]">
                  <span className="flex items-center w-[75px] h-[75px] pt-[13px] pr-[24px] pb-[7px] pl-[22px] bg-[#FCFCFC] border-[1px] border-[#DDD] rounded-[37px]">
                    <img
                      src="/images/smiley.png"
                      alt="smiley"
                      className="text-primary text-center leading-[55px]"
                    />
                  </span>
                  <strong className="flex items-start py-1 px-[16px] absolute top-[-24px] right-[-0.25px] border-[1px] rounded border-[#DDD] bg-white">
                    <span className="text-2xl leading-9 font-semibold">
                      500
                    </span>
                  </strong>
                </div>
                <p className="font-semibold text-base leading-[26px] text-[#777]">
                  Happy Customers
                </p>
                <img
                  src="/images/pseudo1.png"
                  alt="line"
                  className="bg-primary"
                />
              </li>
              <li className="flex flex-col items-end gap-[15px] relative">
                <div className="flex items-start justify-center py-0 px-[38px]">
                  <span className="flex items-center w-[75px] h-[75px] pt-[13px] pr-[24px] pb-[7px] pl-[22px] bg-[#FCFCFC] border-[1px] border-[#DDD] rounded-[37px]">
                    <img
                      src="/images/car.png"
                      alt="car"
                      className="text-primary text-center leading-[55px]"
                    />
                  </span>
                  <strong className="flex items-start py-1 px-[16px] absolute top-[-24px] right-[-0.25px] border-[1px] rounded border-[#DDD] bg-white">
                    <span className="text-2xl leading-9 font-semibold">
                      200
                    </span>
                  </strong>
                </div>
                <p className="font-semibold text-base leading-[26px] text-[#777]">
                  Luxury Cars
                </p>
                <img
                  src="/images/pseudo1.png"
                  alt="line"
                  className="bg-primary"
                />
              </li>
              <li className="flex flex-col items-end gap-[15px] relative">
                <div className="flex items-start justify-center py-0 px-[38px]">
                  <span className="flex items-center w-[75px] h-[75px] pt-[13px] pr-[24px] pb-[7px] pl-[22px] bg-[#FCFCFC] border-[1px] border-[#DDD] rounded-[37px]">
                    <img
                      src="/images/driver.png"
                      alt="driver"
                      className="text-primary text-center leading-[55px]"
                    />
                  </span>
                  <strong className="flex items-start py-1 px-[16px] absolute top-[-24px] right-[-0.25px] border-[1px] rounded border-[#DDD] bg-white">
                    <span className="text-2xl leading-9 font-semibold">
                      150
                    </span>
                  </strong>
                </div>
                <p className="font-semibold text-base leading-[26px] text-[#777]">
                  Expert Drivers
                </p>
                <img
                  src="/images/pseudo1.png"
                  alt="line"
                  className="bg-primary"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start shrink-0 w-[550px] max-w-[550px] pt-0 pb-[14px] px-3">
          <div className="w-[526px] h-[526px] shrink-0 relative">
            <Image
              src={"/images/about-style-fimg.png"}
              alt="about"
              height={526}
              width={526}
              className="shrink-0"
            />
            <div className="flex flex-col items-center justify-center h-[220px] w-[220px] shrink-0 -rotate-2 bg-primary absolute right-0 top-[72%] rounded-[110px] border-[8px] border-[#EEE]">
              <Image
                src="/images/badge.png"
                alt="badge"
                height={40}
                width={34}
                className="font-black text-white text-[44px] text-center"
              />
              <strong className="flex flex-col items-center gap-[2.6px] w-[170px] font-bold leading-[27px] text-[19.8px] text-center text-white pt-[0.1px] pr-[4.7px] pb-[2.5px] pl-[5.6px]">
                Won Award In <br />
                Year 2023
              </strong>
            </div>
            <a className="flex items-start w-[120px] h-[70px] py-[0px] px-[23px] absolute left-[40%] top-1/2">
              <img
                src="/images/Link.png"
                alt="play"
                className="font-black text-white w-full h-full text-center"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;
