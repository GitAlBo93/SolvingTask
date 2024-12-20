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
  const isDeepEqual = (item1: any, item2: any) => {
    for (const key in item1) {
      const field1 = item1[key];
      const field2 = item2[key];
      if (typeof field1 !== "object" && typeof field2 !== "object") {
        if (field1 !== field2) {
          return false;
        }
      } else {
        const field1ObjectAndField2NotObj =
          typeof field1 === "object" && typeof field2 !== "object";
        const field2ObjectAndField1NotObj =
          typeof field2 === "object" && typeof field1 !== "object";

        if (field1ObjectAndField2NotObj || field2ObjectAndField1NotObj) {
          return false;
        }
        if ((field1 && !field2) || (!field1 && field2)) {
          return false;
        }
        return isDeepEqual(field1, field2);
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
