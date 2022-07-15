import { useState } from "react";

function MultipleInput() {
  const [userData, setUserData] = useState({
    userName: "",
    phone: "",
    email: "",
    gender: "",
    car: "",
    likeList: [],
  });
  const genderOptions = ["男", "女", "不提供"];
  const carOptions = ["Benz", "BMW", "Toyota"];
  const fruitOptions = ["西瓜", "芒果", "蘋果", "葡萄"];

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <label>姓名 :</label>
      <input
        name="userName"
        type="text"
        value={userData.userName}
        onChange={handleChange}
      />
      <br />
      <label>電話 :</label>
      <input
        name="phone"
        type="text"
        value={userData.phone}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label>Email :</label>
      {genderOptions.map((v, i) => {
        return (
          <span key={i}>
            <input
              type="radio"
              name="gender"
              checked={userData.gender === v}
              value={v}
              onChange={handleChange}
            />
            <label>{v}</label>
          </span>
        );
      })}
      <br />
      <label>喜好的車品牌 :</label>
      <select value={userData.car} name="car" onChange={handleChange}>
        <option value="">請選擇</option>
        {carOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <br />
      <label>喜好的水果 :</label>
      {fruitOptions.map((v, i) => {
        return (
          <span key={i}>
            <input
              type="checkbox"
              value={v}
              onChange={(e) => {
                if (userData.likeList.includes(e.target.value)) {
                  const newLikeList = userData.likeList.filter((v, i) => {
                    return v !== e.target.value;
                  });
                  setUserData({ ...userData, likeList: newLikeList });
                } else {
                  const newLikeList = [...userData.likeList, e.target.value];
                  setUserData({ ...userData, likeList: newLikeList });
                }
              }}
            />
            <label>{v}</label>
          </span>
        );
      })}
    </>
  );
}
export default MultipleInput;
