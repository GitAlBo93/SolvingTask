import { useDispatch, useSelector } from "react-redux";
import { RootDispatch } from "../../main.tsx";
import { getPosts, selectPostsState } from "./postsSlice.ts";
import { useEffect } from "react";

export const PostsList = () => {
  const dispatch = useDispatch<RootDispatch>();
  const { posts, isLoading, error } = useSelector(selectPostsState);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <button>Main Page</button>
      <h1>View Posts</h1>

      {posts &&
        posts.map(({ id, title, body }) => (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostsList;
