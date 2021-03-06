import OrderList from "./Components/OrderList";
import Summary from "./Components/Summary";
import "./OrderPageCH.css";

import { useState } from "react";

import { products } from "./data/products";

// const initState = (productArray) => {
//   const state = [];

//   for (let i = 0; i < productArray.length; i++) {
//     state.push(1);
//   }

//   return state;
// };

const initState = (productArray) => {
  const state = [];

  for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 });
  }

  return state;
};

function OrderpageCH() {
  const [productsInOrder, setProductsInOrder] = useState(initState(products));

  const calcTotalNumber = () => {
    let total = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count;
    }

    return total;
  };

  const calcTotalPrice = () => {
    let total = 0;

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].price;
    }

    return total;
  };

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary
          totalNumber={calcTotalNumber()}
          totalPrice={calcTotalPrice()}
        />
      </div>
    </div>
  );
}

export default OrderpageCH;
