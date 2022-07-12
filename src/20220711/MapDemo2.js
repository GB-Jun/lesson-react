import React from "react";
import { data } from "./data/student";

export default function MapDemo() {
  return (
    <>
      <h1>Map展示</h1>
      <div>
        {data.map((v, i) => {
          return (
            <React.Fragment key={v.id}>
              <h1>{v.name}</h1>
              <p>{v.birth}</p>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
