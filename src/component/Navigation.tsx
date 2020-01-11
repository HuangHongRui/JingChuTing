import React from "react";
import cn from "classnames";
import Social from "component/Social";
import { jingchuting as logo } from "style/image";

export default class Navigation extends React.Component<P, S> {
  static defaultProps = {
    rootClass: "default"
  };

  constructor(props: P) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass } = this.props;
    const tailwind = "flex justify-center h-16 w-full bg-white border-b-2 border-gray-200 text-gray-700";
    const rootClassName = cn("c-nav", rootClass, tailwind);

    return (
      <nav className={rootClassName}>
        <div className="w-10/12 flex items-center ">
          <img alt="LOGO" className="logo hidden md:block h-10 w-1/5" src={logo} />
          <div className="w-3/5 mx-4 font-serif text-xl">
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              首页
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              文章
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              股票
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              健身
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              任务
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              日记
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              想法
            </button>
            <button type="button" className="mx-6 font-black hover:text-gray-900">
              时间表
            </button>
          </div>
          <Social />
        </div>
      </nav>
    );
  }
}

interface P {
  rootClass: string;
}

interface S {
  demo?: boolean;
}
