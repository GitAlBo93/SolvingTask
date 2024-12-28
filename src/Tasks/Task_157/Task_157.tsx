import { Link } from "react-router-dom";
import { AppRoutes } from "../../shared/routes.ts";

export const Task_157 = () => {
  const coupons = [5000, 1000, 500, 100];

  // function makeExchange(totalCurrency) {
  //   const result = [];
  //
  //   for (let i = 0; i < coupons.length; i++) {
  //     if (coupons[i] > totalCurrency) {
  //       continue;
  //     }
  //     totalCurrency -= coupons[i];
  //     result.push(coupons[i]);
  //     i = -1;
  //   }
  //   return result;
  // }

  function makeExchange(totalCurrency) {
    const result = [];

    for (const coupon of coupons) {
      while (totalCurrency >= coupon) {
        totalCurrency -= coupon;
        result.push(coupon);
      }
    }

    return result;
  }

  // примеры
  // 100, 1000, 1500, 100_000_000

  console.log(makeExchange(700)); // [500, 100, 100]
  console.log(makeExchange(12700)); // [5000, 5000, 1000, 1000, 500, 100, 100]

  return (
    <div>
      <h1>Task_157</h1>
      <p>Реализовать обменник валют</p>
      <p>Захардкоженно 700 и 12700</p>
      {/*<label htmlFor="many">Введите кол-во средств для обмена: </label>*/}
      {/*<input type="number" id="many" />*/}
      <p>Результат в консоли</p>
      <Link to={AppRoutes.HOME}>
        <button>Main Page</button>
      </Link>
    </div>
  );
};
