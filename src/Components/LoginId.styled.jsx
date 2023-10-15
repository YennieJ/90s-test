import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 15px;

  border: 1px solid #dadada;

  /* reset */
  outline: none;

  &:focus {
    position: relative;
    z-index: 5;
    border: 1px solid #03c75a;
  }
  &:nth-child(1) {
    border-radius: 6px 6px 0 0;
  }

  &:nth-child(2) {
    border-radius: 0 0 6px 6px;
    margin-top: -1px;
    box-shadow: 0 2px 6px 0 rgba(68, 68, 68, 0.08);
  }
`;

export const LoginKeepWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 13px;

  label {
    color: #777;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;

    vertical-align: top;
    cursor: pointer;
  }
`;

export const Checkbox = styled.div`
  position: relative;
  padding-left: 23px;

  input {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    & + label {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(https://ssl.pstatic.net/static/nid/login/m_sp_01_login_008d5216.png);
        background-size: 266px 225px;
        background-position: -244px -87px;
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
        background-color: #fff;
      }
    }

    &:checked + label {
      &::before {
        background-position: -244px -167px;
      }
    }
  }
`;

export const IpCheck = styled.div`
  position: relative;
  label {
    padding-right: 5px;
  }
  input {
    /* reset */
    margin: 0;

    appearance: none;

    position: relative;

    width: 2.25em;
    height: 1.25em;
    border-radius: 12px;

    background-color: #cac5c5;

    cursor: pointer;

    &::before {
      content: "";

      position: absolute;
      top: 1.5px;
      left: 2.5px;

      width: 1em;
      height: 1em;
      border-radius: 12px;

      background-color: #fff;
    }

    &:checked {
      border-color: rgb(3, 199, 90);
      background-color: rgb(3, 199, 90);
    }

    &:checked::before {
      background-color: white;
      left: 1em;
    }
  }
`;

export const LoginButton = styled.button`
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  padding: 13px 0 13px;
  margin-top: 38px;

  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;

  background-color: #03c75a;
`;
