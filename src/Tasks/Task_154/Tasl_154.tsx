import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";
import { useEffect } from "react";

export const Task_154 = () => {
  const root = document.getElementById("root");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      console.log(target.id);
    };
    root!.addEventListener("click", handleClick);

    return () => {
      root!.removeEventListener("click", handleClick);
    };
  }, [root]);

  return (
    <div>
      <h1>Task_154</h1>
      <p>
        Напишите код, который при клике на любой div внутри root будет выводить
        в консоль его id.
      </p>
      <p>Результат в консоли</p>
      <div id="root" style={{ background: "red" }}>
        root
        <span id="id1" style={{ background: "lightblue" }}>
          id1
        </span>
        <div id="id2" style={{ background: "green" }}>
          id2
          <div id="id3" style={{ background: "yellow" }}>
            id3
          </div>
        </div>
      </div>

      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
