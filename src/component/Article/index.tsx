import React, { useEffect } from "react";
import marked from "marked";
import "./index.scss";
import "github-markdown-css/github-markdown.css";

const Article = (props: { data: number | unknown }) => {
  const content = `
  # 213
    1. FUCK
    2. TEST
    3. COOL
  `;

  useEffect(() => {
    const d = props.data;
    // console.log(props.data);
    // 在此获取数据
  }, []);

  return (
    <article className="c-article">
      <div className="markdown-body">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </article>
  );
};

export default Article;
