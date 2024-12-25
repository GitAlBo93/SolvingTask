import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

export const Task_140 = ({ data }) => {
  const other = data
    .filter((elem) => elem.feature === "other")
    .sort((a, b) => b.id - a.id);
  const penultimate = data
    .filter((elem) => elem.feature === "penultimate")
    .sort((a, b) => b.id - a.id);
  const last = data
    .filter((elem) => elem.feature === "last")
    .sort((a, b) => b.id - a.id);

  const elements = [...other, ...penultimate, ...last];

  return (
    <div data-container>
      {elements.map(({ id, feature }) => {
        const attr = { [`data-feature-${feature}`]: true, id };
        return <div key={id} {...attr}>{`${id} ${feature}`}</div>;
      })}
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
