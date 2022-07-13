import ProductItem from "./ProductItem";
import { products } from "../../data/products";

function OrderList(props) {
  const { counts, setCounts } = props;

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>

        {products.map((v, i) => {
          // 這樣相當於下面註解中的寫法
          // 注意只有物件屬性名稱都相同才能用解構語法，key值一定要加
          // key值選擇: 有id優先用id
          return (
            <ProductItem
              key={v.id}
              count={counts[i]}
              setCount={(newCount) => {
                const newCounts = [...counts];

                newCounts[i] = newCount < 1 ? 1 : newCount;

                setCounts(newCounts);
              }}
              {...v}
            />
          );
        })}

        {/* {products.map((v, i) => {
          const { id, name, category, image, price } = v;
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              image={image}
              price={price}
            />
          );
        })} */}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
