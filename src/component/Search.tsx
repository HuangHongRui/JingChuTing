import React from "react";
import cn from "classnames";
import { Search as SearchIcon } from "style/icon";
import { apiSearch } from "utils/api";

export default class Search extends React.Component<P, S> {
  static defaultProps = {
    propClass: "h-4",
    rootClass: "default",
    searchAPI: "",
  };

  constructor(props: P) {
    super(props);
    this.state = {
      content: "",
    };
  }

  onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      content: event.target.value,
    });
  };

  onSearch = () => {
    const { content } = this.state;
    apiSearch(content);
  };

  render() {
    const { rootClass, propClass } = this.props;
    const rootClassName = cn("c-search flex relative", rootClass);
    const searchClassName = cn("absolute right-0 cursor-pointer hover:text-jc-hover-color", propClass);

    return (
      <div className={rootClassName}>
        <input
          onChange={this.onInput}
          placeholder="搜索一下..."
          className="border border-solid rounded-lg pl-2 pr-8 w-full outline-none focus:bg-gray-200 text-xs h-full"
        />
        <SearchIcon onClick={this.onSearch} className={searchClassName} />
      </div>
    );
  }
}

type P = {
  propClass: string;
  rootClass: string;
};

interface S {
  content: string;
}
