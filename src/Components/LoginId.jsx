import React, { useState } from "react";
import * as S from "./LoginId.styled";

export default function LoginId() {
  const [email, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [token, setToken] = useState("");

  // Input 입력값 가져오기
  const onHandleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setId(value);
    else if (name === "password") setPassword(value);
  };

  // 로그인 함수
  const login = async () => {
    const reqUrl = "/data/userData.json";
    try {
      const response = await fetch(reqUrl);
      if (!response.ok) {
        throw new Error("데이터 불러오기에 실패했습니다.");
      }
      const data = await response.json();
      const userData = data.user;

      //userData에서 데이터 일치여부 확인
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === email && userData[i].password === password) {
          localStorage.setItem("token", userData[i].token);
          setToken(localStorage.getItem("token"));
          setIsSuccess(true);
          break;
        } else {
          setIsSuccess(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  // submit 이벤트
  const submitLogin = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <S.Form onSubmit={submitLogin}>
      <S.Input
        type="email"
        name="email"
        value={email}
        onChange={onHandleInput}
        placeholder="아이디"
      />
      <S.Input
        type="password"
        name="password"
        value={password}
        onChange={onHandleInput}
        placeholder="패스워드"
      />

      <S.LoginKeepWrapper>
        <S.Checkbox>
          <input type="checkbox" id="keep" />
          <label htmlFor="keep">로그인 상태 유지</label>
        </S.Checkbox>

        <S.IpCheck>
          <label htmlFor="protect-IP">IP 보안</label>
          <input type="checkbox" id="protect-IP" />
        </S.IpCheck>
      </S.LoginKeepWrapper>

      <S.LoginButton>로그인</S.LoginButton>
      {isSuccess === true ? (
        <p>
          로그인에 성공했습니다. <br /> 토큰 : {token}
        </p>
      ) : isSuccess === false ? (
        <p>
          아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. <br />{" "}
          입력하신 내용을 다시 확인해주세요.
        </p>
      ) : null}
    </S.Form>
  );
}
