// 133. Написать функцию глубокого сравнения объектов:
import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

const person1 = { name: "Alex", age: 30 };
const person2 = { name: "Alex", age: 30 };
const person3 = { name: "Alex", age: { ageMax: 30 } };
const person4 = { name: "Alex", age: { ageMax: 30 } };
const person5 = { name: "Alex", age: null };
const person6 = { name: "Alex", age: null };

export const Task_133 = () => {
  const isDeepEqual = (obj1: any, obj2: any) => {
    for (const key in obj1) {
      if (typeof obj1[key] !== "object" && typeof obj2[key] !== "object") {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      } else {
        const field1 = obj1[key];
        const field2 = obj2[key];
        const field1ObjectAndField2NotObj =
          typeof field1 === "object" && typeof obj2[key] !== "object";
        const field2ObjectAndField1NotObj =
          typeof field2 === "object" && typeof obj1[key] !== "object";

        if (field1ObjectAndField2NotObj || field2ObjectAndField1NotObj) {
          return false;
        }
        if ((field1 && !field2) || (!field1 && field2)) {
          return false;
        }
        return isDeepEqual(obj1[key], obj2[key]);
      }
    }
    return true;
  };

  console.log("Reference(true)", isDeepEqual(person1, person2));
  console.log("Nested object(false)", isDeepEqual(person1, person3));
  console.log("Nested object2(true)", isDeepEqual(person4, person3));
  console.log("Nested object3(false)", isDeepEqual(person4, person5));
  console.log("Nested object4(true)", isDeepEqual(person6, person5));

  return (
    <div>
      <h1>Task_133</h1>
      <p>Написать функцию глубокого сравнения объектов</p>
      <p>Результат в консоли</p>
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
