import axios from "axios";

export const getPosts = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/posts");

export const getPost = async (id: number) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

export const updatePost = (id: number) => {
  const data = axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};
