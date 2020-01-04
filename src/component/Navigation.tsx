import React from "react";
import cn from "classnames";

export default class Navigation extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-nav", { rootClass });

    return (
      <nav className={rootClassName}>
        <image className="logo" />
        <button type="button">首页</button>
        <button type="button">文章</button>
      </nav>
    );
  }
}

type P = {
  rootClass: string;
};

interface S {
  demo?: boolean;
}
