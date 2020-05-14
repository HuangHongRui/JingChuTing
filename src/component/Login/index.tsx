/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./index.scss";

export default function Login() {
  return (
    <div className="login-box">
      <h2>登录框</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>账号</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>密码</label>
        </div>
        <a href="#">
          <span />
          <span />
          <span />
          <span />
          提交
        </a>
      </form>
    </div>
  );
}
