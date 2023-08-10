"use client";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { openSansFont } from "@/utils/fonts";
import { FaEnvelope, FaHome, FaPhoneVolume } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      {/* Desktop view */}
      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
        <div className="grid grid-cols-1 h-[188px] overflow-hidden w-full z-50 top-0">
          <div className="flex-col">
            <div className="flex justify-between items-center h-[120px] w-full bg-white">
              <div className="flex items-center ml-12 w-[330px]">
                <h1
                  className={
                    "font-extrabold text-[42px] leading-6 italic" +
                    " " +
                    openSansFont.className
                  }
                >
                  Logo
                </h1>
              </div>
              <div className="flex items-start shrink-0 gap-3 py-[33px] pr-[81.67px] pl-[0px] w-[330px]">
                <FaHome className="text-primary text-[45px] flex items-start w-[45px] shrink-0 border-[#FECE01] border-[1px] rounded-[45px] pt-[1px] pr-[10.75px] pb-[2px] pl-[11.25px]" />
                <div className="flex flex-col items-start shrink-0 w-[167.33px]">
                  <div className="text-primary text-[18px]">Address</div>
                  <div className="text-textBlack text-[15px]">
                    Example England
                  </div>
                </div>
              </div>
              <div className="flex items-start shrink-0 gap-3 py-[33px] pr-[81.67px] pl-[0px] w-[330px]">
                <FaEnvelope className="text-primary text-[45px] flex items-start w-[45px] shrink-0 border-[#FECE01] border-[1px] rounded-[45px] pt-[1px] pr-[10.75px] pb-[2px] pl-[11.25px]" />
                <div className="flex flex-col items-start shrink-0 w-[167.33px]">
                  <div className="text-primary text-[18px]">Email Us</div>
                  <div className="text-textBlack text-[15px]">
                    example@booking.com
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center shrink-0 px-[12px] pt-[0px] pb-[15px] w-[330px] h-[120px]">
                <div className="flex items-center justify-center w-[306px] h-[105px] shrink-0 relative">
                  <img
                    src="/images/pseudo.png"
                    className="w-[60px] h-[85px] absolute top-0 left-0 bg-[#374B5D] rounded-b-[25px]"
                  />
                  <FaPhoneVolume className="text-white text-[45px] flex items-start w-[45px] left-2 shrink-0 absolute z-10 bg-[#253747] border-[#495D6F] border-[2px] rounded-[45px] pt-[1px] pr-[10.75px] pb-[2px] pl-[11.25px]" />

                  <span className="font-semibold text-[20px] text-[#1C2B39] ml-2 mt-6">
                    +1-234-000-2345
                  </span>
                </div>
              </div>
            </div>
            <Nav />
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
        <div className="grid grid-cols-1 h-16 overflow-hidden fixed w-full z-50 top-0 bg-[#081630] text-white">
          <div className="flex justify-between items-center mx-12">
            <div className="logo">
              <h1 className="logo">Logo</h1>
            </div>
            <button onClick={() => setMenuOpen((v) => !v)}>Menu</button>
            {menuOpen && (
              <div className="navlinks grid grid-cols-1 h-screen overflow-hidden fixed w-6/12 z-50 right-0 top-0 bg-[#081630] text-white">
                <div className="flex justify-center items-center">
                  <div>
                    <Link href="/" className="flex justify-center items-center">
                      Home
                    </Link>
                    <Link
                      href="/posts"
                      className="flex justify-center items-center"
                    >
                      Posts
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
