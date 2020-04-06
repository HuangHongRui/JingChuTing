import React from "react";
import marked from "marked";
import CodeMirror from "codemirror";
import Prism from "prismjs";

import "codemirror/keymap/vim";
import "codemirror/mode/markdown/markdown";

// 需要做按需加载
import "prismjs/themes/prism.css";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "github-markdown-css/github-markdown.css";

// 需要这样倒入语言 -m-#
import "prismjs/components/prism-python";

const renderer = new marked.Renderer();
renderer.code = function(code, lang) {
  // eslint-disable-next-line no-param-reassign
  code = this.options.highlight(code, lang);
  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }
  const langClass = `language-${lang}`;
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

marked.setOptions({
  renderer,
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight(code, lang) {
    try {
      return Prism.highlight(code, Prism.languages[lang], lang);
    } catch {
      return code;
    }
  }
});

export default class Study extends React.Component<P, S> {
  textareaRef: React.RefObject<any>;

  constructor(props: Readonly<P>) {
    super(props);
    this.state = {
      content: ""
    };
    this.textareaRef = React.createRef();
  }

  componentDidMount() {
    const { content } = this.state;
    const textareaRef = this.textareaRef.current;
    const editor = CodeMirror(
      ele => {
        textareaRef.parentNode.replaceChild(ele, textareaRef);
      },
      {
        value: content,
        theme: "material",
        keyMap: "vim",
        mode: {
          name: "markdown",
          json: true
        },
        lineNumbers: true,
        lineWrapping: true
      }
    );
    editor.on("change", () => {
      const val = editor.getValue();
      this.setState({
        content: val
      });
    });
  }

  getMarkdownText = (value: string) => {
    return marked(value);
  };

  onEdit = () => {
    //
  };

  render() {
    const { content } = this.state;
    return (
      <>
        <div>{/* <button type="button">提交</button> */}</div>
        <div className="flex border h-screen border-gray-100">
          <div className="codemirror-body flex-1 ">
            <textarea ref={this.textareaRef} value={content} onChange={this.onEdit} />
          </div>
          <div className="markdown-body overflow-y-scroll flex-1">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
          </div>
        </div>
      </>
    );
  }
}

type P = {};
type S = {
  content: string;
};
