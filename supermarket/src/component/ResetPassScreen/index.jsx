import React from "react";
import "./ResetPassScreen.css";

const ResetPassScreen = () => {
  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <h1 className="header">Đặt lại mật khẩu</h1>
      <input
        placeholder="Nhập lại email"
        type="email"
        className="input-email"
      />
      <button className="submit-btn">Gửi</button>
    </div>
  );
};

export default ResetPassScreen;
