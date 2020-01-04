import React from "react";
import cn from "classnames";

export default class Search extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-search", { rootClass });

    return (
      <div className={rootClassName}>
        <input />
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
