import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-size: 16px;
    color: #B8B1B1;
  }

  a {
    text-decoration: none;
  }

`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}></Route>
          <Route path={'/signup'} element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;