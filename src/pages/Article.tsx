import React from "react";
import ArticleList from "component/ArticleList";
import { apiArticle } from "utils/api";

export default class Article extends React.PureComponent<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {
      articleList: [],
    };
  }

  componentDidMount(): void {
    apiArticle().then((res: any) => {
      this.setState({
        articleList: res.data,
      });
    });
  }

  render() {
    const { articleList } = this.state;
    return (
      <div className="overflow-scroll h-full">
        <ArticleList data={articleList} />
      </div>
    );
  }
}

type P = any;
type S = {
  articleList: [];
};
