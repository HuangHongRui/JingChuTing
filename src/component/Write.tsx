import React from "react";
import cn from "classnames";

export default class Write extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-write", { rootClass });

    return (
      <div className={rootClassName}>
        {
          // Write Module
        }
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
