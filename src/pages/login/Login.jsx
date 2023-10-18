import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import headImg from '../../imgs/naver.png'
import { useNavigate } from 'react-router-dom';

const { localStorage } = window;




export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate('/home');
    };

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    const handleLogin = () => {
        const usersData = require("../../data/userData.json");
        const user = usersData.users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            console.log(usersData.users.token);
            localStorage.setItem('accessToken', usersData.users.token);
            goToSignup();
        } else {
            alert("이메일 또는 비밀번호가 올바르지 않습니다.");
        }
    };

    return (
        <>
            <Main>
                <H1></H1>
                <MainLogin>
                    <LoginBtns>
                        <ToggleBtn onClick={() => handleButtonClick(1)}>ID 로그인</ToggleBtn>
                        <ToggleBtn onClick={() => handleButtonClick(2)}>일회용 번호</ToggleBtn>
                        <ToggleBtn onClick={() => handleButtonClick(3)}>QR코드</ToggleBtn>
                    </LoginBtns>
                    {selectedButton === 1 && (
                        <LoginForm>
                            <LoginSection className='loginSection'>
                                <LoginInput type="id" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='아이디' />
                                <LoginInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호' />
                            </LoginSection>
                            <div className='option'>
                                <span>
                                    <input type="checkbox" value="login_continue" />로그인 상태 유지
                                </span>
                                <span>
                                    IP보안<input type="radio" value="protected_IP" />
                                </span>
                            </div>
                            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
                        </LoginForm>
                    )}
                    {selectedButton === 2 && (
                        <form>
                            <label>im hyeonjin</label>
                        </form>
                    )}
                    {selectedButton === 3 && (
                        <form>
                            <label>im junha</label>
                        </form>
                    )}
                </MainLogin>
                <FindJoin>
                    <li><a href='#'>비밀번호 찾기</a></li>
                    <li><a href='#'>아이디 찾기</a></li>
                    <li><a href='#'>회원가입</a></li>
                </FindJoin>
                <Footer>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>책임의 한계와 법적고지</li>
                        <li>회원정보 고객센터</li>
                    </ul>
                </Footer>
            </Main>
        </>
    )
}
const Main = styled.main`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const H1 = styled.h1`
    background-image: url(${headImg});
    background-size: 256px 49px;
    background-repeat: no-repeat;
    width: 256px;
    height: 49px;
`

const MainLogin = styled.section`
    width: 500px;
    border: 1px solid black;
    border-radius: 10px;
    border-top: none;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`

const LoginBtns = styled.div`
    width: 100%;
    display: flex;
`
const ToggleBtn = styled.button`
    height: 50px;
    flex-grow: 1;
    background-color: white;
    border: 1px solid black;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
`
const LoginForm = styled.form`
    width: 80%;
    .option {
        display: flex;
        justify-content: space-between;
    }
`
const LoginSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`
const LoginInput = styled.input.attrs({
    required: true,
})`
    padding: 14px 17px 13px;
    box-sizing: border-box;
`

const LoginBtn = styled.button`
    width: 100%;
    height: 50px;
    background-color: #03CF5D;
    border-style: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
`

const FindJoin = styled.ul`
    display: flex;
`

const Footer = styled.footer`
    font-size: 0.75em;
`