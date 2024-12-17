import { createRoot } from "react-dom/client";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postsReducer from "./features/Posts/postsSlice.ts";
import PostsList from "./features/Posts/PostsList.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

root.render(
  <Provider store={store}>
    <PostsList />
  </Provider>,
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
