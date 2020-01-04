import React from "react";
import cn from "classnames";

export default class Logo extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-logo", { rootClass });

    return (
      <div className={rootClassName}>
        <img alt="JINGCHUTING-LOGO" src="" />
      </div>
    );
  }
}

type P = {
  rootClass: string;
};

interface S {
  demo?: boolean;
}
