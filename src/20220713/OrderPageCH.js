import OrderList from "./Components/OrderList";
import Summary from "./Components/Summary";
import "./OrderPageCH.css";

import { useState } from "react";

import { products } from "./data/products";

const initState = (productArray) => {
  const state = [];

  for (let i = 0; i < productArray.length; i++) {
    state.push(1);
  }

  return state;
};

function OrderpageCH() {
  const [counts, setCounts] = useState(initState(products));

  const calcTotalNumber = () => {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
      total += counts[i];
    }

    return total;
  };

  const calcTotalPrice = () => {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
      total += counts[i] * products[i].price;
    }

    return total;
  };

  return (
    <div className="card">
      <div className="row">
        <OrderList counts={counts} setCounts={setCounts} />
        <Summary
          totalNumber={calcTotalNumber()}
          totalPrice={calcTotalPrice()}
        />
      </div>
    </div>
  );
}

export default OrderpageCH;
