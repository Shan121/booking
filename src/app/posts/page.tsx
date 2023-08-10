import Posts from "@/components/Posts";
import PostsBanner from "@/components/PostsBanner";
import React from "react";

const PostsPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <PostsBanner />
      <Posts />
    </div>
  );
};

export default PostsPage;
