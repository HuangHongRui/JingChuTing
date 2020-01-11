import React from "react";
import cn from "classnames";
import * as Icons from "style/icon";

export default class Social extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default",
    propClass: "h-6",
    data: [
      { id: "Zhihu", name: "知乎" },
      { id: "Weibo", name: "微博" },
      { id: "Weixin", name: "微信" },
      { id: "Github", name: "GitHub" },
      { id: "Facebook", name: "脸书" },
      { id: "Twitter", name: "推特" }
    ]
  };

  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, propClass, data } = this.props;
    const rootClassName = cn("c-social flex w-1/5 ", rootClass);
    const svgClassName = cn("m-2", propClass);

    return (
      <div className={rootClassName}>
        {data.map(item => {
          const key = item.id;
          const SvgDom = (Icons as IconTypes.All)[key];
          return (
            <div key={key} className={svgClassName}>
              <SvgDom className="h-full w-auto" />
            </div>
          );
        })}
      </div>
    );
  }
}

type P = {
  rootClass: string;
  propClass: string;
  data: {
    name: "string";
    id: "string";
  }[];
};

type S = {};
