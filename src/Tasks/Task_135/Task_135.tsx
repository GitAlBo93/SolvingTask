import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.js";

export const Task_135 = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const rotationMatrix = (arr: number[][]) => {
    const length = arr.length;
    const result = [];

    for (let i = 0; i < length; i++) {
      const newRow = [];

      for (let j = length - 1; j >= 0; j--) {
        newRow.push(arr[j][i]);
      }
      result.push(newRow);
    }

    return result;
  };

  console.log(rotationMatrix(matrix));
  return (
    <div>
      <h1>Task_135</h1>
      <p>
        Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90
        градусов по часовой стрелке. [[1, 2, 3] [4, 5, 6] [7, 8, 9]] результат
        [[7, 4, 1] [8, 5, 2] [9, 6, 3]]
      </p>
      <p>Результат в консоли</p>
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
