import { useState } from "react";

function BMI() {
  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWeight, setBodyWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  return (
    <>
      <h1>身高(公分)</h1>
      <input
        type="text"
        placeholder="請輸入身高"
        value={bodyHeight}
        onChange={(e) => {
          setBodyHeight(e.target.value);
        }}
      />
      <h1>體重(公斤)</h1>
      <input
        type="text"
        placeholder="請輸入體重"
        value={bodyWeight}
        onChange={(e) => {
          setBodyWeight(e.target.value);
        }}
      />
      <div>
        <button
          onClick={(e) => {
            const countBmi = bodyWeight / Math.pow(bodyHeight / 100, 2);
            setBmi(countBmi);
          }}
        >
          立即計算
        </button>
        <button
          onClick={(e) => {
            setBodyHeight(0);
            setBodyWeight(0);
            setBmi(0);
          }}
        >
          全部清除
        </button>
      </div>
      <h3>BMI: {bmi}</h3>
    </>
  );
}

export default BMI;
