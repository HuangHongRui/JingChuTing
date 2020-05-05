import React from "react";
import cn from "classnames";
import * as Icons from "style/icon";

export default class Social extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default",
    propClass: "h-4",
    data: [
      { id: "Weibo", name: "微博", url: "https://weibo.com/huanghongrui" },
      { id: "Zhihu", name: "知乎", url: "https://www.zhihu.com/people/HuangHongRui/activities" },
      { id: "Github", name: "GitHub", url: "https://github.com/HuangHongRui" },
      { id: "Twitter", name: "推特", url: "https://twitter.com/HongRui_Huang" },
      { id: "Instagram", name: "Ins", url: "https://www.instagram.com/xingfengshuo/" },
    ],
  };

  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, propClass, data } = this.props;
    const rootClassName = cn("c-social hidden md:flex", rootClass);
    const svgClassName = cn("m-2", propClass);

    return (
      <div className={rootClassName}>
        {data.map((item) => {
          const key = item.id;
          const SvgDom = (Icons as IconTypes.All)[key];
          return (
            <a key={key} className={svgClassName} href={item.url} target="_blank" rel="noopener noreferrer">
              <SvgDom className="h-full w-auto hover:text-jc-hover-color cursor-pointer" />
            </a>
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
    id: "string";
    url: "string";
    name: "string";
  }[];
};

type S = {};
