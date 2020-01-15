import React from "react";
import cn from "classnames";

export default class Music extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-music", { rootClass });

    return (
      <aside className={rootClassName}>
        {
          // Music Module
        }
      </aside>
    );
  }
}

type P = {
  rootClass: string;
};

interface S {
  demo?: boolean;
}
