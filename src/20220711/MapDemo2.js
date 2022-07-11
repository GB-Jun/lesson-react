import React from 'react';
import { data } from './data/student';

export default function MapDemo() {
  return (
      {data.map((v, i) => {
          return (
            <React.Fragment key={v.id}>
            <h1>{v.id}</h1>
            <p>{v.name}</p>
            </React.Fragment>
        );
      })}
  );
}
