import React from "react";

import * as S from "./Login.styled";
const Login = () => {
  return (
    <S.Wrapper>
      <h1>YEN & JUNGMIN</h1>
      <nav>
        <ul>
          <li>
            <button>ID 로그인</button>
          </li>
          <li>
            <button>일회용 번호</button>
          </li>
          <li>
            <button>QR코드</button>
          </li>
        </ul>
      </nav>
      <form>
        <input type="email" />
        <input type="password" />

        <button>로그인</button>
      </form>
    </S.Wrapper>
  );
};

export default Login;
