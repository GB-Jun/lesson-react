import ProductItem from "./ProductItem";
// import { products } from "../../data/products";

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props;

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

        {productsInOrder.map((v, i) => {
          // 這樣相當於下面註解中的寫法
          // 注意只有物件屬性名稱都相同才能用解構語法，key值一定要加
          // key值選擇: 有id優先用id
          return (
            <ProductItem
              key={v.id}
              {...v}
              removeItem={() => {
                // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                // 2. 在新的變數值(陣列/物件)上作處理
                const newProductsInOrder = productsInOrder.filter((v2, i2) => {
                  return v.id !== v2.id;
                });

                // 3. 設定回原本的狀態中
                setProductsInOrder(newProductsInOrder);
              }}
              // count={counts[i]}
              setCount={(newCount) => {
                // const newCounts = [...counts];

                // newCounts[i] = newCount < 1 ? 1 : newCount;

                // setCounts(newCounts);

                const newProductsInOrder = productsInOrder.map((v2) => {
                  return { ...v2 };
                });

                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount;

                setProductsInOrder(newProductsInOrder);
              }}
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
