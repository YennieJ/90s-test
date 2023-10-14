import "./App.css";
import Login from "./Components/Login";
import LoginId from "./Components/LoginId";
import Number from "./Components/Number";
import Qrcode from "./Components/Qrcode";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/loginid" replace />} />
          <Route path="/" element={<Login />}>
            <Route path="/loginid" element={<LoginId/>}/>
            <Route path="/number" element={<Number/>}/>
            <Route path="/qrcode" element={<Qrcode/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
