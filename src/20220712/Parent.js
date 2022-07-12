import Child from "./Child";

function Parent() {
  return (
    <>
      <Child
        text="still on test"
        abc={123}
        isBook={true}
        foo={() => {
          alert("hello");
        }}
      />
      <Child />
    </>
  );
}

export default Parent;
