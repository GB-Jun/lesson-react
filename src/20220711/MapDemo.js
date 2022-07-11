import React from "react";
import { data } from "./data/student";

export default function MapDemo() {
  return (
    <>
      <h1>Map Demo</h1>
      <ul>
        {data.map((value, index) => {
          return (
            <li key={value.id}>
              {value.id}:{value.name}
            </li>
          );
        })}
      </ul>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Birthday</td>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
