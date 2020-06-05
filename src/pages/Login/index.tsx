import React from "react";
import { Weixin, Github, QQ } from "style/icon";
import { withRouter } from "react-router-dom";
import { apiLogin, apiIsLogin, apiLogout } from "utils/api";
import Loading from "component/Loading";
import cn from "classnames";
import "./index.scss";

@withRouter
export default class Login extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      login: false,
      loading: false,
    };
  }

  componentDidMount(): void {
    this.reqIsLogin();
    this.reqLogin();
  }

  reqIsLogin = (): void => {
    const isLogin = localStorage.getItem("login");
    switch (isLogin) {
      case null:
        break;
      case "self":
      case "others":
      default:
        this.setState({ login: true, loading: true });
        apiIsLogin().then((res: any) => {
          if (res.status && !res.data.login) {
            this.setState({ login: false });
          }
          this.setState({ loading: false });
        });
    }
  };

  reqLogin = (): void => {
    const { history } = this.props;
    const { search, origin, pathname } = window.location;
    if (!search) return;
    const queryAry = search.slice(1).split("&");
    const [type, code] = queryAry.map((item: string) => item.split("=")[1]);
    window.history.pushState({}, "", `${origin}${pathname}`);
    this.setState({ loading: true });

    apiLogin(type, code).then((res: any) => {
      this.setState({
        loading: false,
      });
      if (res.status === 1) {
        localStorage.setItem("login", res.data.author ? "self" : "others");
        history.push("home");
      } else {
        alert(" 登录失败 ");
      }
    });
  };

  onLogin = (out?: string): void => {
    if (out) {
      localStorage.removeItem("login");
      this.setState({ login: false });
      apiLogout();
      return;
    }
    const url = "https://github.com/login/oauth/authorize";
    const clientId = "c55bb4076e266fa195c0";
    document.location.href = `${url}?client_id=${clientId}`;
  };

  render() {
    const { login, loading } = this.state;

    return (
      <div className="buttons">
        {login ? (
          <button type="button" className="gh" onClick={() => this.onLogin("out")}>
            登出
          </button>
        ) : (
          <>
            <button type="button" className="gh" onClick={() => this.onLogin()}>
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
          </>
        )}
        <Loading className={cn({ "load-page": loading })} />
      </div>
    );
  }
}

type P = {
  history: any;
};

type S = {
  login: boolean;
  loading: boolean;
};
