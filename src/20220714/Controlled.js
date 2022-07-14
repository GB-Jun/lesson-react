import { useState } from "react";

function Controlled() {
  const [inputText, setInputText] = useState("");
  const [textArea, setTextArea] = useState("");

  //radio group
  const [gender, setGender] = useState("");
  const genderOptions = ["男", "女", "不提供"];

  // select
  const [car, setCar] = useState("");
  const carOptions = ["Benz", "BMW", "Toyota"];

  // checkbox -single
  const [agree, setAgree] = useState(false);

  // checkbox -group
  const [likeList, setLikeList] = useState([]);
  const fruitOptions = ["西瓜", "芒果", "蘋果", "葡萄"];

  return (
    <>
      <section>
        <h1>文字輸入框(input-text)</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </section>
      <section>
        <h1>文字輸入區域(textArea)</h1>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>
      <section id="radio-group">
        <h1>選項按鈕-群組(radio-group)</h1>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
      <section id="select">
        <h1>下拉式清單(select)</h1>
        <select
          value={car}
          onChange={(e) => {
            setCar(e.target.value);
          }}
        >
          <option value="">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>
      <section id="checkbox-single">
        <h1>核取方塊(checkbox - single)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        />
        <label>我同意會員註冊條款</label>
      </section>
      <section id="checkbox-group">
        <h1>核取方塊(checkbox - group)</h1>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                onChange={(e) => {
                  if (likeList.includes(e.target.value)) {
                    const newLikeList = likeList.filter((v, i) => {
                      return v !== e.target.value;
                    });
                    setLikeList(newLikeList);
                  } else {
                    const newLikeList = [...likeList, e.target.value];
                    setLikeList(newLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Controlled;
