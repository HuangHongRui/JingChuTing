import React, { useState, useEffect } from "react";
import Art from "component/Article";
import ArticleList from "component/ArticleList";
import { apiArticle } from "utils/api";
import { useLocation } from "react-router-dom";

const Article = () => {
  const [articleList, setArticleList] = useState([]);
  const [articleId, setArticleId] = useState<number | unknown>();
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apiArticle().then((res: any) => {
      setArticleList(res.data);
    });
  }, []);

  useEffect(() => {
    setArticleId(query.get("id"));
  });

  return (
    <div className="overflow-scroll h-full">
      {articleId ? (
        <Art data={articleId} />
      ) : (
        <ArticleList data={articleList} />
      )}
    </div>
  );
};

export default Article;
