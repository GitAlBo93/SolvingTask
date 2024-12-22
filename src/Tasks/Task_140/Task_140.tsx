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
      {/*<div data-container>*/}
      {/*  <div id="2" data-featured-other>*/}
      {/*    2 other*/}
      {/*  </div>*/}
      {/*  <div id="1" data-featured-other>*/}
      {/*    1 other*/}
      {/*  </div>*/}
      {/*  <div id="0" data-featured-other>*/}
      {/*    0 other*/}
      {/*  </div>*/}
      {/*  <div id="4" data-featured-penultimate>*/}
      {/*    4 penultimate*/}
      {/*  </div>*/}
      {/*  <div id="4" data-featured-penultimate>*/}
      {/*    3 penultimate*/}
      {/*  </div>*/}
      {/*  <div id="6" data-featured-last>*/}
      {/*    6 last*/}
      {/*  </div>*/}
      {/*  <div id="5" data-featured-last>*/}
      {/*    5 last*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
