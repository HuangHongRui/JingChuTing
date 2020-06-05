import React from "react";
import cn from "classnames";

export default class Foot extends React.PureComponent {
  render() {
    const rootClassName = cn("c-foot");
    return (
      <footer className={rootClassName}>
        {
          // 版权声明
          // 免责声明
          // 联系方式
          // 备案认证
          // 服务条款
          // 语言切换
          // 客户端
          // Logo
          // 指南
          // 广告
          // 联系
          // 友链
          // 关于
          // 社交
          // 介绍
        }
      </footer>
    );
  }
}
