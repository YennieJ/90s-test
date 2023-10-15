import React from "react";
import * as S from "./Login.styled";
import { NavLink, Outlet } from "react-router-dom";
const Login = () => {
  // 테스트 중
  return (
    <S.Reset>
      <h1>YEN & JUNGMIN</h1>
      <S.Wrapper>
        <nav>
          <ul>
            <S.LinkButton>
              <NavLink to="/loginid">ID 로그인</NavLink>
            </S.LinkButton>
            <S.LinkButton>
              <NavLink to="/number">일회용 번호</NavLink>
            </S.LinkButton>
            <S.LinkButton>
              <NavLink to="/qrcode">QR코드</NavLink>
            </S.LinkButton>
          </ul>
        </nav>

        <S.Content>
          <Outlet />
        </S.Content>
      </S.Wrapper>
    </S.Reset>
  );
};

export default Login;
