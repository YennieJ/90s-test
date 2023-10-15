import { styled } from "styled-components";

export const Reset = styled.div`
  ul {
    list-style: none;
    padding: unset;
    margin: unset;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  width: 460px;
  margin: 0 auto;

  /* border: 1px solid red; */
`;

export const LinkButton = styled.li`
  display: inline-block;

  width: 100%;

  a {
    position: relative;

    display: block;

    height: 61px;
    border: solid #e3e3e3;
    border-width: 1px 1px 0 1px;

    color: #777;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
    padding-top: 17px;

    background-color: #f8f9fa;
  }

  .active {
    border-color: #c6c6c6;
    color: #333;
    background-color: #fff;
    /* z!!!! */
    z-index: 10;
  }

  .active::before,
  .active::after {
    content: "";
    position: absolute;
    top: -1px;

    width: 15px;
    height: 62px;

    /* 도대체 왜 여기서는.. 이상한게 나오는거죠? */
    /* background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_0c98137b.png); */
    background-repeat: no-repeat;
  }

  &:nth-child(1) {
    a {
      border-radius: 6px 0 0 0;
      border-right: none;
    }
    .active::after {
      right: -8px;
      background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_0c98137b.png);
      background-size: 283px 246px;
      background-position: -212px -64px;
    }
  }

  &:nth-child(2) {
    a.active::before {
      left: -8px;
      background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_0c98137b.png);
      background-size: 283px 246px;
      background-position: -212px 0;
    }
    a.active::after {
      right: -8px;
      background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_0c98137b.png);
      background-size: 283px 246px;
      background-position: -212px -64px;
    }
  }

  &:nth-child(3) {
    a {
      border-radius: 0 6px 0 0;
      border-left: none;
    }
    a.active::before {
      left: -8px;
      background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_0c98137b.png);
      background-size: 283px 246px;
      background-position: -212px 0;
    }
  }
`;

export const Content = styled.div`
  position: relative;

  border: 1px solid #c6c6c6;
  border-radius: 6px;
  padding: 20px 28px;
  margin-top: -8px;

  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);

  /* z!!!!!! */
  z-index: 5;
`;
