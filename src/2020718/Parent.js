import { useState } from "react";
import CC from "./CC";
import FC from "./FC";

function Parent() {
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            {isShow && <CC />}
            <button
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                {isShow ? "移除" : "呈現"}
            </button>
            <hr />
            {isShow && <FC />}
            <button
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                {isShow ? "移除" : "呈現"}
            </button>
            <button id="test">訂閱</button>
        </>
    );
}

export default Parent;
