import { useDispatch, useSelector } from "react-redux";
import { RootDispatch } from "../../main.tsx";
import { getPosts, selectPostsState } from "./postsSlice.ts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

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
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
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
