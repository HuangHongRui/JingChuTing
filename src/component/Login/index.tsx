import React from "react";
import { Weixin, Github, QQ } from "style/icon";
import "./index.scss";

export default function Login() {
  return (
    <div className="buttons">
      <button type="button" className="gh">
        <Github className="logo" />
        Log In with GitHub
      </button>
      <button type="button" className="qq">
        <QQ className="logo" />
        Log In with QQ
      </button>
      <button type="button" className="wx">
        <Weixin className="logo" />
        Log In with WeChat
      </button>
    </div>
  );
}
