import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

export const Task_149 = () => {
  const arrayForCustomReduce = [1, 2, 3, 4, 5];

  Array.prototype.customReduce = function (cb: any, initialValue = 0) {
    let accum = initialValue;
    for (let i = 0; i < this.length; i++) {
      accum = cb(accum, this[i]);
    }
    return accum;
  };

  const arrCustomReduce = arrayForCustomReduce.customReduce(
    (accum, currentValue) => accum + currentValue,
    0,
  );

  console.log("custom reduce", arrCustomReduce);

  return (
    <div>
      <h1>Task_149</h1>
      <p>Написать кастомный reduce</p>
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
