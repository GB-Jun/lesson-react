import { useState } from "react";
import _ from "lodash";

const myYear = 2022;
const myMonth = "";

function AgeCheck() {
  // 呈現yearAndMonth
  const now = new Date();

  // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
  const nowY = myYear ? myYear : now.getFullYear();

  // nowM =1-12
  const nowM = myMonth ? myMonth : now.getMonth() + 1; //注意回傳為 0~11

  // 呈現標題
  const weekDayList = ["日", "一", "二", "三", "四", "五", "六"];

  // 本月有幾天
  // (上個月的最後一天是幾號)
  const days = new Date(nowY, nowM, 0).getDate();

  // 這個月的第一天是星期幾(0-6) (月份為0-11)
  const firstDay = new Date(nowY, nowM - 1, 1).getDay();

  // 本月所有日期的陣列資料
  const daysDataArray = [];

  // 補前面的空白資料
  for (let i = 0; i < firstDay; i++) {
    daysDataArray.push("");
  }

  // 加入本月所有的日期資料
  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1);
  }

  // 準備要呈現在網頁上
  const daysDisplayArray = _.chunk(daysDataArray, 7);

  // 日期選擇選單
  const totalYearsArray = [];
  const totalMonthsArray = [];

  for (let i = 1900; i <= now.getFullYear(); i++) {
    totalYearsArray.push(i);
  }

  for (let i = 0; i < 12; i++) {
    totalMonthsArray.push(i);
  }

  return (
    <>
      <select value={now.getFullYear()} onChange={(e) => {}}>
        {totalYearsArray.map((v, i) => {
          return <option key={v}>{v}</option>;
        })}
      </select>
      <select value={nowM} onChange={(e) => {}}>
        {totalMonthsArray.map((v, i) => {
          return <option key={v + 1}>{v + 1}</option>;
        })}
      </select>
    </>
  );
}

export default AgeCheck;
