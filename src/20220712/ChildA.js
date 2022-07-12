function ChildA(props) {
  return (
    <>
      <h1>Child A</h1>
      <p>{props.pData}</p>
      <h1>從Child B拿到的資料 :</h1>
      <p>{props.dataFromChildB}</p>
    </>
  );
}

export default ChildA;
