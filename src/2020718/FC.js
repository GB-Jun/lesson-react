import { useEffect, useRef, useState } from "react";

const initState = () => {
    console.log("FC - sim constructor");
    return 0;
};
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

function FC(props) {
    const [total, setTotal] = useState(initState(0));

    const prevTotal = usePrevious(total);

    // 模擬componentDidMount
    useEffect(() => {
        console.log("FC - sim componentDidMount");
    });

    // 模擬didMount+didUpdate
    useEffect(() => {
        console.log(
            "FC - 模擬didMount+didUpdate",
            "total =",
            total,
            "previous total = ",
            prevTotal
        );
    }, [total]);
    //相依陣列裡面填入會觸發updating階段的state或props

    // 只模擬didUpdate, 略過初始值
    useEffect(() => {
        if (total !== 0) {
            console.log("FC - 只模擬didUpdate", "total = ", total);
        }
    }, [total]);

    // 模擬willUnmount
    // useEffect(() => {
    //     return () => {
    //         console.log("FC - sim componentWillUnmount");
    //     };
    // }, []);

    // 成對的訂閱與取消訂閱
    // useEffect(() => {
    //     document.getElementById("test").addEventListener("click", function () {
    //         alert("hello");
    //     });

    //     return () => {
    //         // 模擬willUnmount
    //         document.getElementById("test").removeEventListener("click");
    //     };
    // }, []);

    return (
        <>
            {console.log("FC - render")}
            <h1>FC</h1>
            <h1
                onClick={() => {
                    setTotal(total + 1);
                }}
            >
                {total}
            </h1>
        </>
    );
}

export default FC;
