import { getPosts, getPost } from "@/api/posts";
import { create } from "zustand";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const updatePost = (
  posts: Post[],
  id: number,
  title: string,
  body: string
): Post[] =>
  posts.map((post) => ({
    ...post,
    title: post.id === id ? title : post.title,
    body: post.id === id ? body : post.body,
  }));

export const removePost = (posts: Post[], id: number): Post[] =>
  posts.filter((post) => post.id !== id);

// Zustand implementation
type Store = {
  posts: Post[];
  post: Post;
  isLoading: boolean;
  error: string;
  newPost: string;
  getPosts: () => void;
  getPost: (id:number) => void;
  // addPost: () => void;
  updatePost: (id: number, title: string, body: string) => void;
  removePost: (id: number) => void;
  // setNewPost: (newPost: string) => void;
};

export const useStore = create<Store>(
  (set): Store => ({
    posts: [],
    post: {userId: 0, id: 0, title: "", body: ""},
    isLoading: false,
    error: "",
    newPost: "",
    getPosts: async () => {
      try {
        set({ isLoading: true });
        const res = await getPosts();
        set({ isLoading: false, posts: res.data });
      } catch (err: any) {
        set({ error: err.message });
      }
    },
    getPost: async (id: number) => {
      try {
        console.log("iddd ", id)
        set({ isLoading: true });
        const res = await getPost(id);
        console.log("res ", res)
        set({ isLoading: false, post: res.data });
      } catch (err: any) {
        console.log("error", err.message)
        set({ error: err.message });
      }
    },
    removePost: (id: number) =>
      set((state) => ({
        ...state,
        posts: removePost(state.posts, id),
      })),
    updatePost: (id: number, title: string, body: string) =>
      set((state) => ({
        ...state,
        posts: updatePost(state.posts, id, title, body),
      })),
  })
);

export default useStore;
