import React from "react";
import cn from "classnames";
import { withRouter, Link } from "react-router-dom";
import Social from "component/Social";
import Search from "component/Search";
import { jingchuting as logo } from "style/image";

@withRouter
export default class Navigation extends React.Component<P> {
  static defaultProps = {
    rootClass: "default",
    match: { path: "" },
    navData: [
      { title: "首页", url: "home" },
      { title: "文章", url: "article" },
      { title: "便笺", url: "note" },
    ],
  };

  constructor(props: P) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, navData, match } = this.props;
    const tailwind = "flex justify-center h-16 w-full bg-jc-bg-color text-jc-text-color";
    const rootClassName = cn("c-nav", rootClass, tailwind);

    return (
      <nav className={rootClassName}>
        <div className="w-10/12 flex items-center overflow-hidden justify-between xl:max-w-screen-xl font-serif">
          <img alt="LOGO" className="logo h-6 md:w-1/12" src={logo} />
          <div className="hidden md:flex w-7/12 mx-4 text-l nowrap">
            {navData.map((item) => {
              const path = match.path === "/" ? "/home" : match.path;
              const isActive = RegExp(item.url).test(path);
              const btnclass = cn("mx-4 font-black hover:text-jc-hover-color outline-none", {
                "text-jc-hover-color": isActive,
              });
              return (
                <button key={item.url} type="button" className={btnclass}>
                  <Link to={item.url}>{item.title}</Link>
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
  match: { path: string };
  rootClass: string;
  navData: {
    title: string;
    url: string;
  }[];
}
