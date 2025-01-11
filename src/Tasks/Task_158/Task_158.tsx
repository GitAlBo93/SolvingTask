import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

const getData = async (URL: string) => {
  const data = await axios.get(URL);
  return data.data;
};

export const Task_158 = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await getData(URL_USERS));
    })();
    (async () => {
      setPosts(await getData(URL_TODOS));
    })();
  }, []);

  return (
    <div>
      <h1>Task_158</h1>
      <p>
        Реализовать React-приложение которое получает эти данные и выводит их в
        таблицу
      </p>
      <div>
        {users.map(({ id, name }) => {
          const countTodo = posts.filter(({ userId }) => userId === id);
          return (
            <ul key={id}>
              <li>{name}</li>
              <li>{countTodo.length}</li>
            </ul>
          );
        })}
      </div>
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
