import React from "react";
import cn from "classnames";

export default class Social extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  static propsDefault = {
    rootClass: "default",
    data: [{ name: "微博", path: "" }]
  };

  render() {
    const { rootClass, data } = this.props;
    const rootClassName = cn("c-social", { rootClass });

    return (
      <div className={rootClassName}>
        {data.map(item => (
          <span key={item.name}>
            <img alt={item.name} src={item.path} />
          </span>
        ))}
      </div>
    );
  }
}

type P = {
  rootClass: string;
  data: {
    name: "string";
    path: "string";
  }[];
};

type S = {
  demo?: boolean;
};
