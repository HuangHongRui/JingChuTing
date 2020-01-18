import React from "react";
import Navigation from "component/Navigation";
import ArticleList from "component/ArticleList";

export default class Article extends React.PureComponent {
  render() {
    return (
      <div>
        <Navigation />
        <ArticleList />
      </div>
    );
  }
}
