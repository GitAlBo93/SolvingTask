import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postsReducer from "./features/Posts/postsSlice.ts";
import PostsList from "./features/Posts/PostsList.tsx";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </Provider>
  </Router>,
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
