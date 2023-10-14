import React, { useState }  from "react";

export default function LoginId() {
    const [email, setId] = useState("");
    const [password, setPassword] = useState("");

    // Input 입력값 가져오기
    const onHandleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setId(value);
    else if (name === "password") setPassword(value);
    };

    return (
    <form>
        <input type="email" name="email" value={email} onChange={onHandleInput} />
        <input
        type="password"
        name="password"
        value={password}
        onChange={onHandleInput}
        />
        <button>로그인</button>
    </form>
    );
}
