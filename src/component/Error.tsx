import React from "react";
import cn from "classnames";

export default class ErrorBoundary extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-error", { rootClass });

    return (
      <main className={rootClassName}>
        {
          // Error Module
        }
        错误边界
      </main>
    );
  }
}

type P = {
  rootClass: string;
};

interface S {
  demo?: boolean;
}
