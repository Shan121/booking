import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="h-[68px] flex items-center bg-[#1C2B39] text-textNav">
      <div className="flex items-center mx-12 gap-10">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <Link href="/posts" className="hover:text-primary">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Nav;
