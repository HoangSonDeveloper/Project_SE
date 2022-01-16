import React from "react";
import "../LoginScreen/LoginScreen.css";

const RegisterScreen = () => {
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
            <span className="header-white">Đăng ký</span> ngay hôm nay!
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
          <div className="text-start ps-2">
            <p className="policy-text">
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <a href="#">chính sách bảo mật</a> và{" "}
              <a href="#">điều khoản sử dụng</a> của NOEA Mall
            </p>
          </div>
        </div>

        <div>
          <button className="login-btn">Đăng ký</button>
          <p>Hoặc đăng ký bằng</p>
          <button className="google-btn"> Google</button>
          <p>
            Đã có tài khoản?
            <a href="#" className="register-text">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
