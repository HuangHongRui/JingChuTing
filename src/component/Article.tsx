import React from "react";
import cn from "classnames";

export default class Article extends React.PureComponent {
  render() {
    const rootClassName = cn("c-article");

    return (
      <article className={rootClassName}>
        {
          // Article Module
        }
      </article>
    );
  }
}
