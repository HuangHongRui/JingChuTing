import React from "react";
import cn from "classnames";
import { withRouter } from "react-router-dom";
import Social from "component/Social";
import Search from "component/Search";
import { jingchuting as logo } from "style/image";
import "./index.scss";

const ButtonList = (props: {
  data: S["navDataItem"]["child"];
  his: P["history"];
  classname: string;
}) => {
  const { data, his, classname } = props;
  const goLink = (url: string) => {
    // event.stopPropagation();
    his.push(url);
  };
  return (
    <ul className={cn("nav-button-list", classname)}>
      {data.map((item: S["Child"]) => {
        return (
          // eslint-disable-next-line
          <li key={item.url} onClick={() => goLink(item.url)}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

@withRouter
export default class Navigation extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      downTag: "",
      navData: [
        { title: "首页", url: "home" },
        {
          title: "分类",
          url: "classify",
          child: [
            { title: "编程", url: "code" },
            { title: "设计", url: "design" },
            { title: "音乐", url: "music" },
            { title: "时尚", url: "fashion" },
            { title: "投资", url: "investment" },
            { title: "哲学", url: "philosophy" },
            { title: "历史", url: "history" },
          ],
        },
        {
          title: "写作",
          url: "study",
          auth: localStorage.getItem("login") === "self",
        },
      ],
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goLink = (item: S["navDataItem"]) => {
    if (item.child) {
      this.onDownList(item.url);
    } else {
      const { history } = this.props;
      history.push(item.url);
      this.onDownList(item.url);
    }
  };

  onDownList = (value: string) => {
    const { downTag } = this.state;
    const resultValue = downTag === value ? "" : value;
    this.setState({ downTag: resultValue });
  };

  render() {
    const { history } = this.props;
    const { navData, downTag } = this.state;
    const tailwind =
      "flex justify-center h-16 w-full bg-jc-bg-color text-jc-text-color";
    const rootClassName = cn("c-nav", tailwind);

    return (
      <nav className={rootClassName}>
        <div className="w-10/12 flex items-center overflow-hidden justify-between xl:max-w-screen-xl font-serif">
          <img alt="LOGO" className="logo h-6 md:w-1/12" src={logo} />
          <div className="hidden md:flex w-7/12 mx-4 text-l nowrap">
            {navData.map((item) => {
              const path =
                history.location.pathname === "/"
                  ? "/home"
                  : history.location.pathname;
              const isActive =
                RegExp(item.url).test(path) ||
                (item.child &&
                  item.child.find(
                    (its: { url: string }) => its.url === path.slice(1)
                  ));
              const btn = cn(
                "mx-4 font-black hover:text-jc-hover-color outline-none",
                {
                  "text-jc-hover-color": isActive,
                }
              );
              const needAuth = cn({
                hidden: typeof item.auth === "boolean" && !item.auth,
              });
              const btnClass = cn(btn, needAuth);
              return (
                <button
                  type="button"
                  key={item.url || item.title}
                  className={btnClass}
                  onClick={() => this.goLink(item)}
                >
                  {item.title}
                  {item.child && (
                    <ButtonList
                      classname={cn({ active: item.url === downTag })}
                      data={item.child}
                      his={history}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <Social rootClass="w-2/12" propClass="h-4" />
          <Search rootClass="md:w-2/12 h-6 ml-6" propClass="h-4 w-10 mt-1" />
        </div>
      </nav>
    );
  }
}

interface P {
  match?: { path: string };
  history?: { push: FunctionConstructor; location: { pathname: string } };
}

interface S {
  Child?: {
    title: string;
    url: string;
  };

  navDataItem?: {
    title: string;
    url: string;
    auth?: boolean;
    child?: S["Child"][];
  };
  navData: S["navDataItem"][];
  downTag: string;
}
