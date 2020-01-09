import React from "react";
import cn from "classnames";
import * as Icon from "style/icon";

export default class Social extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default",
    data: [
      { id: "weibo", name: "微博" },
      { id: "weixin", name: "微信" }
    ]
  };

  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, data } = this.props;
    const rootClassName = cn("c-social", rootClass);

    return (
      <div className={rootClassName}>
        {data.map(item => (
          <div key={item.name} style={{ background: "red" }}>
            <img alt={item.name} src={(Icon as Icon)[`${item.id}`]} />
          </div>
        ))}
      </div>
    );
  }
}

type P = {
  rootClass: string;
  data: {
    name: "string";
    id: "string";
  }[];
};

type S = {};
