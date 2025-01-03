import { useSelector } from "react-redux";
import { useEffect } from "react";

export const SomeComponent = ({ name }: { name: string }) => {
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    const handleKeyEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("The Escape button was pressed");
      }
    };

    document.addEventListener("keydown", handleKeyEscape);

    return () => {
      document.removeEventListener("keydown", handleKeyEscape);
    };
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <span>Cars: </span>
      {cars.map((car) => (
        <li key={car}>{car}</li>
      ))}
    </>
  );
};

//Вопрос к собеседующему: что лежит в name?
//Если там имя к примеру "владельца", то я name типизировал и отобразил в разметке

//Вопрос к собеседующему: что лежит в state.car?
//В зависимости от того что лежит в state.car, надо будет типизировать cars и деструктурировать car в разметке.

//Функцию handleKeyEscape перенёс в useEffect для оптимизации, так как если она останется за пределами useEffect,
// то при каждой перерисовки компонента она заново будет создаваться.

//Код с задания
// import { useSelector } from 'react-redux';
// import { useEffect } from "react";
//
// export const SomeComponent = ({ name }) => {
//     const cars = useSelector(state => state.car);
//
//     const handleKeyEscape = (e) => {
//         if (e.key === 'Escape') console.log("The Escape button was pressed");
//     };
//
//     useEffect(() => {
//         document.addEventListener('keydown', handleKeyEscape);
//     });
//
//     return (
//         <span>Cars: </span>
//     {cars.map(car => {
//         return <li>{ car }</li>
//     })}
// );
// };
//
// export default SomeComponent;
