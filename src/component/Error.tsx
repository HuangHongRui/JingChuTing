import React from "react";
import cn from "classnames";

export default class ErrorBoundary extends React.PureComponent {
  render() {
    const rootClassName = cn("c-error");
    return (
      <main className={rootClassName}>
        {
          // Error Module
        }
        错误边界
      </main>
    );
  }
}
