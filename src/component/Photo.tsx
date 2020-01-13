/**
 * @author 静初
 * @param picUrl {string} 图片地址
 */

import React from "react";
import cn from "classnames";

export default class Photo extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default",
    propClass: "",
    time: "",
    title: "",
    picUrl: "",
    mes: ""
  };

  constructor(props: P) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, propClass, picUrl, mes } = this.props;
    const rootClassName = cn("c-photo m-auto overflow-hidden", rootClass);
    const propClassName = cn("border-8 border-solid border-jc-bg-color md:rounded-jc-pic-radius", propClass);

    return (
      <div className={rootClassName}>
        <img className={propClassName} alt={mes} src={picUrl} />
      </div>
    );
  }
}

type P = {
  rootClass: string;
  propClass: string;
  picUrl: string;
  time: string;
  title: string;
  mes: string;
};

interface S {
  demo?: boolean;
}
