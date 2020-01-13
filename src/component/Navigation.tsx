import React from "react";
import cn from "classnames";
import Social from "component/Social";
import Search from "component/Search";
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
    const tailwind = "flex justify-center h-16 w-full bg-jc-bg-color border-b-2 border-gray-200 text-jc-text-color";
    const rootClassName = cn("c-nav", rootClass, tailwind);

    return (
      <nav className={rootClassName}>
        <div className="w-10/12 flex items-center overflow-hidden justify-between xl:max-w-screen-xl">
          <img alt="LOGO" className="logo h-6 md:w-1/12" src={logo} />
          <div className="hidden md:flex w-7/12 mx-4 text-l justify-center nowrap">
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              首页
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              文章
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              财经
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              运动
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              娱乐
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              旅游
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              日记
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              想法
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              任务
            </button>
            <button type="button" className="mx-4 font-black hover:text-jc-hover-color outline-none">
              时间
            </button>
          </div>
          <Social rootClass="w-2/12" propClass="h-4" />
          <Search rootClass="md:w-2/12 h-6 ml-6" propClass="h-4 w-10 mt-1" />
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
