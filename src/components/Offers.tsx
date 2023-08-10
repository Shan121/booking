import { monteserratFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const Offers = () => {
  return (
    <div
      className="flex justify-center items-center gap-[21px] shrink-0 bg-white h-[190px] border-[1px] border-[#DDD]"
    >
      <div className="flex flex-shrink-0 h-[80px] w-[1329px] gap-[21px]">
        <div className="flex justify-center items-center gap-[21px] shrink-0">
          <Image
            src="/images/dollar-sign.svg"
            alt="dollar sign"
            width={64}
            height={64}
            style={{ flexShrink: "0" }}
          />
          <div className="flex flex-col items-start gap-[10px] w-[231.75px]">
            <div
              className={
                "font-medium text-[18px] leading-[22px] text-[#444]" +
                " " +
                monteserratFont.className
              }
            >
              Best Price Guaranteed
            </div>
            <div
              className={
                "font-normal text-[15px] leading-6 text-[#777]" +
                " " +
                monteserratFont.className
              }
            >
              A more recently with desktop softy like aldus page maker.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[21px] shrink-0">
          <Image
            src="/images/headphones.svg"
            alt="headphones"
            width={64}
            height={64}
            style={{ flexShrink: "0" }}
          />
          <div className="flex flex-col items-start gap-[10px] w-[231.75px]">
            <div
              className={
                "font-medium text-[18px] leading-[22px] text-[#444]" +
                " " +
                monteserratFont.className
              }
            >
              24/7 Customer Care
            </div>
            <div
              className={
                "font-normal text-[15px] leading-6 text-[#777]" +
                " " +
                monteserratFont.className
              }
            >
              A more recently with desktop softy like aldus page maker.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[21px] shrink-0">
          <Image
            src="/images/home.svg"
            alt="home"
            width={64}
            height={64}
            style={{ flexShrink: "0" }}
          />
          <div className="flex flex-col items-start gap-[10px] w-[231.75px]">
            <div
              className={
                "font-medium text-[18px] leading-[22px] text-[#444]" +
                " " +
                monteserratFont.className
              }
            >
              Home Pickups
            </div>
            <div
              className={
                "font-normal text-[15px] leading-6 text-[#777]" +
                " " +
                monteserratFont.className
              }
            >
              A more recently with desktop softy like aldus page maker.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[21px] shrink-0">
          <Image
            src="/images/calendar.svg"
            alt="calendar"
            width={64}
            height={64}
            style={{ flexShrink: "0" }}
          />
          <div className="flex flex-col items-start gap-[10px] w-[231.75px]">
            <div
              className={
                "font-medium text-[18px] leading-[22px] text-[#444]" +
                " " +
                monteserratFont.className
              }
            >
              Easy Bookings
            </div>
            <div
              className={
                "font-normal text-[15px] leading-6 text-[#777]" +
                " " +
                monteserratFont.className
              }
            >
              A more recently with desktop softy like aldus page maker.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
