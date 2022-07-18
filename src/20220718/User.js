import { useState, useEffect } from "react";
import "./User.css";

// axios
import axios from "axios";

// User 物件
// {
//     "id": "107001",
//     "name": "張佳蓉",
//     "birth": "990101"
//  },

function User() {
    // 第一次紀錄伺服器的原始資料用
    const [usersRaw, setUsersRaw] = useState([]);
    // 呈現資料用
    const [usersDisplay, setUsersDisplay] = useState([]);

    // const [users, setUsers] = useState([]);
    // 載入資料指示狀態
    const [isLoading, setIsLoading] = useState(false);

    const [searchWord, setSearchWord] = useState("");

    const getUserData = async () => {
        const response = await axios.get(
            "https://my-json-server.typicode.com/eyesofkids/json-fake-data/users"
        );
        console.log(response);
        // 設定到state
        // setUsers(response.data);
        setUsersRaw(response.data);
        setUsersDisplay(response.data);
    };

    //didMount 把拿到的資料放進去
    useEffect(() => {
        setIsLoading(true);

        getUserData();
    }, []);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [isLoading]);

    const spinner = (
        <>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    );

    const displayTable = (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>生日</th>
                    <th>姓名</th>
                </tr>
            </thead>
            <tbody>
                {usersDisplay.map((v, i) => {
                    return (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.birth}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

    return (
        <>
            <h1>會員資料</h1>
            <input
                type="text"
                placeholder="輸入姓名"
                value={searchWord}
                onChange={(e) => {
                    setSearchWord(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (searchWord) {
                        const newUsersDisplay = usersRaw.filter((v, i) =>
                            v.name.includes(searchWord)
                        );

                        setUsersDisplay(newUsersDisplay);
                    } else {
                        // reset
                        setUsersDisplay(usersRaw);
                    }
                }}
            >
                搜尋
            </button>
            {isLoading ? spinner : displayTable}
        </>
    );
}
export default User;
