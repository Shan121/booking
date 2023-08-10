import React from "react";
import Table from "./Table";

const Posts = () => {
  return (
    <div className="inline-flex justify-center gap-3 pt-[0px] pr-[12px] mt-32 pb-[45.8px] pl-[0px]">
      <div className="flex flex-col items-center w-[300px] h-[536.17px] pt-[0px] pr-[12px] pb-[104.17px] pl-[12px]">
        <div className="flex flex-col items-start w-[276px] gap-[23.39px] pt-[20px] pr-[20px] pb-[34.81px] pl-[20px] rounded-[10px] bg-white shadow-lg">
          <div className="flex flex-col justify-center items-center w-[236px] pt-[15px] pr-[47px] pb-[18.4px] pl-[47px] border-b-[1px] border-b-[#00000014]">
            <h5 className="font-bold text-[18px] text-center text-[#111]">
              David John
            </h5>
            <p className="text-center font-normal text-[#757F95] text-[16px]">
              john@example.com
            </p>
          </div>
          <ul className="flex flex-col items-center pb-0 w-[236px] h-[269.8px]">
            <li className="flex items-center shrink-0 gap-[7px] h-[40px] pt-[10px] pr-[121px] pb-[11px] pl-[15px] rounded-lg bg-primary">
              <img src="/images/vector.svg" />
              <span className="text-white">Posts</span>
            </li>
          </ul>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Posts;
