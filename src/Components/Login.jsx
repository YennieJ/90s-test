import React from "react";
import * as S from "./Login.styled";
import { Link, Outlet } from "react-router-dom";
const Login = () => {

  // 테스트 중
  return (
    <S.Wrapper>
      <h1>YEN & JUNGMIN</h1>
      <nav>
        <ul>
          <li>
            <Link to="/loginid">ID 로그인</Link>
          </li>
          <li>
            <Link to="/number">일회용 번호</Link>
          </li>
          <li>
            <Link to="qrcode">QR코드</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </S.Wrapper>
  );
};

export default Login;
