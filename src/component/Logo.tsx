import React from "react";
import cn from "classnames";

export default class Logo extends React.PureComponent {
  render() {
    const rootClassName = cn("c-logo");

    return (
      <div className={rootClassName}>
        <img alt="JINGCHUTING-LOGO" src="" />
      </div>
    );
  }
}
