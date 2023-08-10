import useStore, { Post } from "@/store/useStore";
import React, { FC, useState, useEffect } from "react";

const Modal: FC<{
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  post: Post;
}> = ({ modalVisible, setModalVisible, post }) => {
  const updatePost = useStore((state) => state.updatePost);

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (post) {
      setId(post.id);
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  if (!modalVisible) return null;
  return (
    <div className="fixed inset-0 bg-[#182734] bg-opacity-40 flex justify-center items-center">
      <div className="flex flex-col items-start justify-center gap-5 py-4 px-5 bg-white rounded-[10px] shadow-md w-[880px]">
        <h4 className="flex items-start justify-between h-10 pb-0 border-b border-b-slate-300 w-full">
          <p className="text-[#111] font-bold text-xl">Edit</p>
          <img
            src="/images/x-circle.png"
            className="text-red-600 text-xl"
            onClick={() => setModalVisible((v) => !v)}
          />
        </h4>

        <form className="w-[836px] h-[348px]">
          <div className="flex flex-col items-start justify-center w-[860px]">
            <div className="flex items-start max-w-[860px] pt-0 pb-5 px-3">
              <div className="flex flex-col items-start justify-center gap-1">
                <label className="text-base font-normal text-[#111]">
                  Title
                </label>
                <input
                  className="appearance-none border rounded-[10px] w-[812px] py-4 px-5 text-gray-700"
                  id="title"
                  type="text"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-start max-w-[860px] w-[836px] pt-0 pb-5 px-3">
              <div className="flex flex-col items-start justify-center pr-0 gap-2">
                <label className="text-base font-normal text-[#111]">
                  Description
                </label>
                <textarea
                  className="flex items-start pt-4 w-[812px] min-h-[38px] pb-16 pl-5 border border-[#E8E8E8] rounded-[10px] bg-white font-normal text-base text-gray-700"
                  placeholder="Enter Description"
                  id="description"
                  rows={1}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            className="flex items-center justify-center gap-1 w-44 bg-primary text-[#111] text-center text-sm uppercase font-semibold py-4 px-6 rounded-[50px] shadow"
            type="button"
            onClick={() => {
              updatePost(id, title, body);
              setModalVisible(false);
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
