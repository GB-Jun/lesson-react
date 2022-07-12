function Chlid(props) {
  const { text, abc, isBook, foo } = props;
  console.log(props);
  return (
    <>
      <h1>{text}</h1>
      <p>{abc}</p>
      <button onClick={foo}>click me</button>
    </>
  );
}

export default Chlid;
