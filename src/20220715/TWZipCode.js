import { useState } from "react";
import { countries, townships, postcodes } from "./data/townships";

function TWZipCode() {
  //   const counties = ["台北市", "桃園市"];
  //   const townships = [
  //     ["中正區", "大同區", "中山區"],
  //     ["中壢區", "平鎮區", "龍潭區"],
  //   ];

  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);

  return (
    <>
      <h1>台灣縣市區域連動下拉選單</h1>
      <select
        value={country}
        onChange={(e) => {
          setCountry(Number(e.target.value));
          setTownship(-1);
        }}
      >
        <option value="-1">請選擇縣市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        value={township}
        onChange={(e) => {
          setTownship(Number(e.target.value));
        }}
      >
        <option value="-1">請選擇區域</option>
        {country !== -1 &&
          townships[country].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            );
          })}
      </select>
      <h3>
        郵遞區號:
        {country > -1 && township > -1 && postcodes[country][township]}
      </h3>
    </>
  );
}
export default TWZipCode;
