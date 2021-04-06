/**
 * @author 静初
 * @param picUrl {string} 图片地址
 */

import React from "react";
import cn from "classnames";
import { leo } from "style/image";
import Loading from "../Loading/index";
import "./index.scss";

export default class Photo extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default",
    propClass: "",
    time: "",
    title: "",
    picUrl: "",
    mes: "",
  };

  constructor(props: P) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { picUrl } = this.props;
    const img = new Image();
    img.onload = () => {
      this.setState({
        loading: false,
      });
    };
    img.src = picUrl || leo;
  }

  onload = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { loading } = this.state;
    const { rootClass, propClass, picUrl, mes, minWidth } = this.props;
    const mw = loading && minWidth;
    const rootClassName = cn("c-photo", rootClass, { "min-width": mw });
    const propClassName = cn("main", propClass);

    return (
      <div className={rootClassName}>
        {loading ? (
          <Loading className={propClassName} />
        ) : (
          <img
            className={propClassName}
            alt={mes}
            src={picUrl || leo}
            onLoad={this.onload}
          />
        )}
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
  minWidth?: boolean;
};

interface S {
  demo?: boolean;
  loading: boolean;
}
