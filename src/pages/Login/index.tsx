import React from "react";
import { Weixin, Github, QQ } from "style/icon";
import { withRouter } from "react-router-dom";
import { apiLogin } from "utils/api";
import Loading from "component/Loading";
import cn from "classnames";
import "./index.scss";

@withRouter
export default class Login extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const { search, origin, pathname } = window.location;
    if (!search) return;
    const queryAry = search.slice(1).split("&");
    const [type, code] = queryAry.map((item: string) => item.split("=")[1]);
    window.history.pushState({}, "", `${origin}${pathname}`);
    this.setState({
      loading: true,
    });
    apiLogin(type, code).then((res: any) => {
      this.setState({
        loading: false,
      });
      if (res.status === 1) {
        history.push("home");
      }
    });
  }

  onLogin = () => {
    const url = "https://github.com/login/oauth/authorize";
    const clientId = "c55bb4076e266fa195c0";
    document.location.href = `${url}?client_id=${clientId}`;
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="buttons">
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
        <Loading className={cn({ "load-page": loading })} />
      </div>
    );
  }
}

type P = {
  history: any;
};

type S = {
  loading: boolean;
};
