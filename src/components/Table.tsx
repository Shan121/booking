"use client";

import { interFont, robotoFont } from "@/utils/fonts";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";
import Modal from "./Modal";

const Table = () => {
  const router = useRouter();

  const getPosts = useStore((state) => state.getPosts);
  const posts = useStore((state) => state.posts);
  const getPost = useStore((state) => state.getPost);
  const post = useStore((state) => state.post);
  const removePost = useStore((state) => state.removePost);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4;
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const tablePosts = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleSearch = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const searchQuery = (keyword: string) => (p: { title: string }) =>
    p.title.toLowerCase().includes(keyword);

  const changeCurrentPage = (n: number) => {
    setCurrentPage(n);
  };

  let middlePagination;

  if (nPage && nPage <= 3) {
    middlePagination = [...Array(nPage)].map((_, idx) => (
      //
      <li key={idx + 1} className="inline-flex items-start py-0 px-[10px]">
        <button
          className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
            currentPage === idx + 1 ? "bg-primary" : "bg-[#111]"
          } text-white`}
          onClick={() => changeCurrentPage(idx + 1)}
        >
          <span
            className={
              "text-base font-normal text-center" + " " + robotoFont.className
            }
          >
            {idx + 1}
          </span>
        </button>
      </li>
    ));
  } else {
    const startValue = Math.floor((currentPage - 1) / 3) * 3;

    middlePagination = (
      <>
        {[...Array(3)].map((_, idx) => (
          <li
            key={startValue + idx + 1}
            className="inline-flex items-start py-0 px-[10px]"
          >
            <button
              className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
                currentPage === startValue + idx + 1
                  ? "bg-primary"
                  : "bg-[#111]"
              } text-white ${
                currentPage === startValue + idx + 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={() => {
                setCurrentPage(startValue + idx + 1);
              }}
            >
              <span
                className={
                  "text-base font-normal text-center" +
                  " " +
                  robotoFont.className
                }
              >
                {startValue + idx + 1}
              </span>
            </button>
          </li>
        ))}
      </>
    );

    if (nPage && currentPage > 3) {
      if (nPage - currentPage >= 3) {
        middlePagination = (
          <>
            <li className="inline-flex items-start py-0 px-[10px]">
              <button
                className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
                  currentPage === startValue ? "bg-primary" : "bg-[#111]"
                } text-white`}
                onClick={() => {
                  setCurrentPage(startValue);
                }}
              >
                <span
                  className={
                    "text-base font-normal text-center" +
                    " " +
                    robotoFont.className
                  }
                >
                  {startValue}
                </span>
              </button>
            </li>
            {[...Array(3)].map((_, idx) => (
              <li
                key={startValue + idx + 1}
                className="inline-flex items-start py-0 px-[10px]"
              >
                <button
                  className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
                    currentPage === startValue + idx + 1
                      ? "bg-primary"
                      : "bg-[#111]"
                  } text-white ${
                    currentPage === startValue + idx + 1
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(startValue + idx + 1);
                  }}
                >
                  <span
                    className={
                      "text-base font-normal text-center" +
                      " " +
                      robotoFont.className
                    }
                  >
                    {startValue + idx + 1}
                  </span>
                </button>
              </li>
            ))}
          </>
        );
      } else if (nPage) {
        let amountLeft = nPage - currentPage + 3;
        middlePagination = (
          <>
            <li className="inline-flex items-start py-0 px-[10px]">
              <button
                className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
                  currentPage === startValue ? "bg-primary" : "bg-[#111]"
                } text-white`}
                onClick={() => {
                  setCurrentPage(startValue);
                }}
              >
                <span
                  className={
                    "text-base font-normal text-center" +
                    " " +
                    robotoFont.className
                  }
                >
                  {startValue}
                </span>
              </button>
            </li>
            {[...Array(amountLeft)].map((_, idx) => (
              <li
                key={startValue + idx + 1}
                className="inline-flex items-start py-0 px-[10px]"
              >
                <button
                  className={`w-10 flex justify-center items-center px-[15.5px] pt-[5px] pb-[7px] rounded-[50px] ${
                    currentPage === startValue + idx + 1
                      ? "bg-primary"
                      : "bg-[#111]"
                  } text-white ${
                    currentPage === startValue + idx + 1
                      ? "cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(startValue + idx + 1);
                  }}
                >
                  <span
                    className={
                      "text-base font-normal text-center" +
                      " " +
                      robotoFont.className
                    }
                  >
                    {startValue + idx + 1}
                  </span>
                </button>
              </li>
            ))}
          </>
        );
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-white shadow-lg w-[876px] h-[464px] pt-4 pr-5 pb-6 pl-5">
        <div>
          <div className="flex justify-between items-center pb-4 w-full border-b border-b-slate-300">
            <h4 className={"text-xl font-bold" + " " + interFont.className}>
              Posts
            </h4>
            <div className="w-[216px] h-[46px] relative mr-8">
              <input
                placeholder="Search..."
                className="flex items-start py-3 pr-3 pl-9 rounded-[10px] border border-gray-300 bg-white"
                value={keyword}
                onChange={handleSearch}
              />
              <img
                src="/images/search.svg"
                className="flex items-start w-4 pr-0 absolute left-3 top-[40%]"
              />
            </div>
          </div>
          <div className="flex items-start pb-0">
            <table className="flex flex-col items-start pb-0">
              <thead>
                <tr className="flex items-start justify-center h-14 w-[836px]">
                  <th
                    className={
                      "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] text-base font-bold text-[#212529]" +
                      " " +
                      robotoFont.className
                    }
                  >
                    ID
                  </th>
                  <th
                    className={
                      "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] text-base font-bold text-[#212529]" +
                      " " +
                      robotoFont.className
                    }
                  >
                    Title
                  </th>
                  <th
                    className={
                      "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[40%] text-base font-bold text-[#212529]" +
                      " " +
                      robotoFont.className
                    }
                  >
                    Description
                  </th>
                  <th
                    className={
                      "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] text-base font-bold text-[#212529]" +
                      " " +
                      robotoFont.className
                    }
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {tablePosts && keyword
                  ? tablePosts.filter(searchQuery(keyword)).map((p) => (
                      <tr
                        key={p.id}
                        className="flex items-start justify-center shrink-0 h-14 w-[836px]"
                      >
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-bold text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          {p.id}
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-normal text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <span className="truncate">{p.title}</span>
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[40%] shrink-0 text-base font-normal text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <span className="truncate">{p.body}</span>
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-bold text-[#212529] gap-5" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <img src="/images/edit.png"
                          onClick={() => {
                            getPost(p.id), setModalVisible((v) => !v);
                          }}
                          />
                          <img
                            src="/images/trash.png"
                            onClick={() => {
                              removePost(p.id);
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  : tablePosts.map((p) => (
                      <tr
                        key={p.id}
                        className="flex items-start justify-center shrink-0 h-14 w-[836px]"
                      >
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-bold text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          {p.id}
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-normal text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <span
                            onClick={() => router.push(`/post/${p.id}`)}
                            className="truncate cursor-pointer"
                          >
                            {p.title}
                          </span>
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[40%] shrink-0 text-base font-normal text-[#212529]" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <span className="truncate">{p.body}</span>
                        </td>
                        <td
                          className={
                            "flex items-center px-2 border-b border-[#DEE2E6] h-14 w-[20%] shrink-0 text-base font-bold text-[#212529] gap-5" +
                            " " +
                            robotoFont.className
                          }
                        >
                          <img
                            src="/images/edit.png"
                            onClick={() => {
                              getPost(p.id), setModalVisible((v) => !v);
                            }}
                          />
                          <img
                            src="/images/trash.png"
                            onClick={() => {
                              removePost(p.id);
                            }}
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          post={post}
        />

        {/* Pagination */}

        <ul className="flex items-center justify-center w-[836] h-10 shrink-0">
          <li className="inline-flex items-start py-0 px-[10px]">
            <button
              className={`w-10 flex justify-center items-center pt-3 pr-3 pb-3 pl-3 rounded-[50px] bg-[#111] ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (currentPage === 1) return null;
                setCurrentPage((currentPage) => currentPage - 1);
              }}
            >
              <img
                src="/images/prev.png"
                className="flex items-start shrink-0 w-[14px] pt-[2px] pr-[2px] pb-[2px] pl-0"
              />
            </button>
          </li>

          {middlePagination}

          <li className="inline-flex items-start py-0 px-[10px]">
            <button
              className={`w-10 flex justify-center items-center pt-3 pr-3 pb-3 pl-3 rounded-[50px] bg-[#111] text-white ${
                currentPage === nPage ? "cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (currentPage === nPage) return null;
                setCurrentPage((currentPage) => currentPage + 1);
              }}
            >
              <img
                src="/images/next.png"
                className="flex items-start shrink-0 w-[14px] pt-[2px] pr-[2px] pb-[2px] pl-0"
              />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Table;
