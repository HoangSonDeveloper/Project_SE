import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  // const user = useContext(userContext);

  return (
    <div className="d-flex main">
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
            type="email"
            placeholder="Email"
            className="px-3 py-2  input"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="px-3 py-2  input"
          />
        </div>
        <Link to="/forgot-password" className="forgot-text">
          Quên mật khẩu ?
        </Link>
        <div>
          <button className="login-btn">Đăng nhập</button>
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
    </div>
  );
};

export default LoginScreen;
