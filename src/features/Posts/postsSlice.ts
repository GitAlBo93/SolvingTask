import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../main.tsx";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const InitialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const GET_POSTS_URL =
  "https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=10";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await axios.get(GET_POSTS_URL);
  return posts.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Error getPosts";
      });
  },
});

export const selectPostsState = (state: RootState) => state.posts;

export default postsSlice.reducer;
