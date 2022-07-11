import React, { useState } from 'react';
import './menu.css';

function StatePratice() {
  const [CssClass, setCssClass] = useState('');
  return (
    <>
      <ul>
        <li>
          <a
            href="#/"
            className={CssClass}
            onClick={(e) => {
              setCssClass('active');
            }}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={CssClass}
            onClick={(e) => {
              console.log(e);
              setCssClass('active');
            }}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={CssClass}
            onClick={(e) => {
              setCssClass('active');
            }}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  );
}

export default StatePratice;
