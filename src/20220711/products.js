import React from "react";
import products from "./data/products.json";
import "./MapDemo.css";

function ProductsFunc() {
  return (
    <>
      <table id="products">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>標籤</th>
            <th>庫存</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <img src={v.picture} alt="pic" />
                <td>{v.name}</td>
                <td>{v.tags}</td>
                <td>{v.stock}</td>
                <td>{v.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsFunc;
