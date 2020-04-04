import React from "react";
import Navigation from "component/Navigation";
import ArticleList from "component/ArticleList";
import { apiArticle } from "utils/api";

export default class Article extends React.PureComponent<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {
      articleList: []
    };
  }

  componentDidMount() {
    apiArticle().then((res: any) => {
      this.setState({
        articleList: res.data
      });
    });
  }

  render() {
    const { articleList } = this.state;
    return (
      <div>
        <Navigation />
        <ArticleList data={articleList} />
      </div>
    );
  }
}

type P = {};
type S = {
  articleList: [];
};
