import React from "react";
import cn from "classnames";

export default class Article extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default"
  };

  render() {
    const { rootClass } = this.props;
    const rootClassName = cn("c-article", { rootClass });

    return (
      <article className={rootClassName}>
        {
          // Article Module
        }
      </article>
    );
  }
}

type P = {
  rootClass: string;
};

interface S {
  demo?: boolean;
}
