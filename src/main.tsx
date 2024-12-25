import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postsReducer from "./features/Posts/postsSlice.ts";
import PostsList from "./features/Posts/PostsList.tsx";
import App from "./App.tsx";
import { AppRoutes } from "./shared/routes.ts";
import { Task_133 } from "./Tasks/Task_133/Task_133.tsx";
import { Task_135 } from "./Tasks/Task_135/Task_135.tsx";
import { data } from "./Tasks/Task_140/data.json";
import { Task_140 } from "./Tasks/Task_140/Task_140.tsx";
import { Task_138 } from "./Tasks/Task_138/Task_138.tsx";


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
        <Route path={AppRoutes.HOME} element={<App />} />
        <Route path={AppRoutes.POSTS} element={<PostsList />} />
        <Route path={AppRoutes.TASK133} element={<Task_133 />} />
        <Route path={AppRoutes.TASK135} element={<Task_135 />} />
        <Route path={AppRoutes.TASK138} element={<Task_138 />} />
        <Route path={AppRoutes.TASK140} element={<Task_140 data={data} />} />
      </Routes>
    </Provider>
  </Router>,
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
