import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  // const user = useContext(userContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // let email = useRef("");
  // let password = useRef("");
  const users = [
    { username: "nhson19@apcs.vn", password: "123456" },
    { username: "ndthang19@apcs.vn", password: "hcmusk19" },
  ];
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="d-flex main" onSubmit={(e) => handleLogin(e)}>
      <div className="col logo-container">
        <img
          className="logo"
          src="https://drive.google.com/uc?export=view&id=1hpR4OxdPvM4fFi5sdy059wfYP286iRyL"
          alt="brand-logo"
        />
      </div>
      <div className="col login-container">
        <div className="d-flex flex-row mb-4">
          <h1 className="text-center header">
            <span className="header-white">Đăng nhập</span> và mua sắm trên hơn
            13000 cửa hàng hôm nay
          </h1>
        </div>
        <div className="d-flex flex-column pe-5 login-group">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="px-3 py-2  input"
            // ref={(ref) => (email = ref)}
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Mật khẩu"
            className="px-3 py-2  input"
            value={password}
            onChange={(value) => setPassword(value)}

            // onChange={(value) => setPassword(value)}
          />
        </div>
        <Link to="/forgot-password" className="forgot-text">
          Quên mật khẩu ?
        </Link>
        <div>
          <button className="login-btn" type="submit">
            Đăng nhập
          </button>
          <p>Hoặc đăng nhập bằng</p>
          <button className="google-btn"> Google</button>
          <p>
            Chưa có tài khoản?
            <a href="#" className="register-text">
              Đăng ký
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
