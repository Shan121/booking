"use client";
import React, { useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import useStore from "@/store/useStore";
import { interFont } from "@/utils/fonts";
import PostsBanner from "@/components/PostsBanner";

const Post = ({ params }: { params: { postId: number } }) => {
  const router = useRouter();
  const getPost = useStore((state) => state.getPost);
  const post = useStore((state) => state.post);

  const id = params.postId;

  useEffect(() => {
    getPost(id);
  }, []);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col justify-center">
      <PostsBanner />
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
        <div className="flex flex-col items-center gap-4 rounded-xl bg-white shadow-lg w-[876px] h-[464px] pt-4 pr-5 pb-6 pl-5">
          <div className="flex items-start pb-4 gap-[10px] w-full border-b border-b-slate-300">
            <img
              onClick={() => router.push("/posts")}
              src="/images/arrow-left.png"
              className="cursor-pointer"
            />
            <h4 className={"text-xl font-bold" + " " + interFont.className}>
              Posts
            </h4>
          </div>
          <form className="flex items-start justify-center pb-0 w-[836px]">
            <div className="flex flex-col items-start shrink-0 gap-5 w-[860px] p-3">
              <h3 className="text-2xl font-medium">{post.title}</h3>
              <p className="flex items-center justify-center shrink-0 h-7">
                {post.body}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
