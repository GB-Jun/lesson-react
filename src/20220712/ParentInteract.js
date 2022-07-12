import ChildA from "./ChildA";
import ChildB from "./ChildB";

import { useState } from "react";

function ParentInteract() {
  const [pData, setPData] = useState("parent data");

  const [dataFromChildB, setDataFromChildB] = useState("");

  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料: {dataFromChildB}</p>
      <ChildA pData={pData} dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  );
}

export default ParentInteract;
