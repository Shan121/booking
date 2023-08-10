import { monteserratFont, openSansFont } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegFolder,
  FaHome,
  FaRegEnvelopeOpen,
  FaPhoneSquare,
  FaGlobeAsia,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="flex items-start pt-[75px] pr-[52.5px] pb-[58px] pl-[52.5px] bg-[#233545]">
        <div className="flex items-start justify-between content-start shrink-0 flex-wrap w-[1320px]">
          <div className="flex items-start shrink-0 pt-0 pr-3 pb-[104px] pl-3 w-[330px] max-w-[330px]">
            <div className="flex flex-col shrink-0 items-start gap-5">
              <h3
                className={
                  "text-white text-[20px] leading-[26px] font-semibold capitalize" +
                  " " +
                  monteserratFont.className
                }
              >
                Logo
              </h3>
              <div className="flex items-start pr-0 w-[306px]">
                <p
                  className={
                    "text-[#7A8793] text-[15px] font-normal leading-6" +
                    " " +
                    openSansFont.className
                  }
                >
                  Search for will uncover many web sites variables onto of
                  passages of lorem ipsum available but the majority the words
                  all predefined humour to met chunks recently with desktop.
                </p>
              </div>
              <ul className="flex items-start w-[306px] gap-[13.16px] pt-[5px] pr-[106.53px] pb-[5px] pl-[0px]">
                <li className="flex items-center shrink-0 w-10 pt-[11px] px-[12px] pb-[13px] border-[1px] border-[#767676]">
                  <a
                    href="/"
                    className="text-[#D1D1D1] text-[16px] font-normal text-center leading-[16px]"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="flex items-center shrink-0 w-10 pt-[11px] px-[12px] pb-[13px] border-[1px] border-[#767676]">
                  <a
                    href="/"
                    className="text-[#D1D1D1] text-[16px] font-normal text-center leading-[16px]"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="flex items-center shrink-0 w-10 pt-[11px] px-[12px] pb-[13px] border-[1px] border-[#767676]">
                  <a
                    href="/"
                    className="text-[#D1D1D1] text-[16px] font-normal text-center leading-[16px]"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="flex items-center shrink-0 w-10 pt-[11px] px-[12px] pb-[13px] border-[1px] border-[#767676]">
                  <a
                    href="/"
                    className="text-[#D1D1D1] text-[16px] font-normal text-center leading-[16px]"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start shrink-0 pt-0 pr-3 pb-[34px] pl-3 w-[330px] max-w-[330px]">
            <div className="flex flex-col items-start shrink-0 w-[306px] gap-5">
              <h3
                className={
                  "text-white text-[20px] leading-[26px] font-semibold capitalize" +
                  " " +
                  monteserratFont.className
                }
              >
                Quick Links
              </h3>
              <ul className="flex flex-col items-start w-[306px] text-[#7A8793]">
                <li className="flex items-center gap-[15px] w-[306px] py-[10px] pr-[206px] pl-[0px]">
                  <FaRegFolder />
                  <Link href="/">
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] w-[306px] pt-[10px] pr-[181px] pb-[10px] pl-[0px]">
                  <FaRegFolder />
                  <Link href="/">
                    <span>Our Services</span>
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] w-[306px] pt-[10px] pr-[171px] pb-[10px] pl-[0px]">
                  <FaRegFolder />
                  <Link href="/">
                    <span>Featured Blog</span>
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] w-[306px] py-[10px] pr-[206px] pl-[0px]">
                  <FaRegFolder />
                  <Link href="/">
                    <span>Car Fleet</span>
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] w-[306px] py-[10px] pr-[206px] pl-[0px]">
                  <FaRegFolder />
                  <Link href="/">
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start shrink-0 pt-0 px-3 pb-[98px] w-[330px] max-w-[330px] text-[#7A8793]">
            <div className="flex flex-col items-start shrink-0 w-[306px] gap-5">
              <h3
                className={
                  "text-white text-[20px] leading-[26px] font-semibold capitalize" +
                  " " +
                  monteserratFont.className
                }
              >
                Contact Info
              </h3>
              <ul className="flex flex-col items-start w-[306px] gap-5 text-[#7A8793]">
                <li
                  className={
                    "flex items-center gap-[10px] w-[306px] py-[5px] px-[0px]" +
                    " " +
                    openSansFont.className
                  }
                >
                  <FaHome />
                  <span className="flex items-start shrink-0 w-[278] pr-0 leading-6">
                    10A, San Andreno, USA
                  </span>
                </li>
                <li
                  className={
                    "flex items-center gap-[10px] w-[306px] py-[5px] px-[0px]" +
                    " " +
                    openSansFont.className
                  }
                >
                  <FaRegEnvelopeOpen />
                  <span className="flex items-start shrink-0 w-[278] pr-0 leading-6">
                    example@booking.com
                  </span>
                </li>
                <li
                  className={
                    "flex items-center gap-[10px] w-[306px] py-[5px] px-[0px]" +
                    " " +
                    openSansFont.className
                  }
                >
                  <FaPhoneSquare />
                  <span className="flex items-start shrink-0 w-[278] pr-0 leading-6">
                    +1-333-444-555
                  </span>
                </li>
                <li
                  className={
                    "flex items-center gap-[10px] w-[306px] py-[5px] px-[0px]" +
                    " " +
                    openSansFont.className
                  }
                >
                  <FaGlobeAsia />
                  <span className="flex items-start shrink-0 w-[278] pr-0 leading-6">
                    www.example.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-start py-5 px-[52.5px] bg-[#1F303F]">
        <div className="flex items-start content-start shrink-0 flex-wrap w-[1320px] text-[#7A8793]">
          <div className="flex items-start shrink-0 w-[660px] max-w-[660px]">
            © Copyrights 2023 Logo. All Rights Reserved
          </div>
          <div className="flex items-start shrink-0 w-[660px] max-w-[660px] h-10 py-0 pr-[12px] pl-[420.75px]"></div>
        </div>
      </section>
    </>
  );
};

export default Footer;
