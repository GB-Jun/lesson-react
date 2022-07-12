import { useState } from "react";

function ChildB(props) {
  const [cData, setCData] = useState("child B data");

  return (
    <>
      <h1>Child B</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(cData);
        }}
      >
        送資料給父母
      </button>
    </>
  );
}

export default ChildB;
