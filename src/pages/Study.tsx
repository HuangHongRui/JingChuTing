import React from "react";
import marked from "marked";
import CodeMirror from "codemirror";

import "codemirror/mode/markdown/markdown";
import "codemirror/keymap/vim";
import "codemirror/mode/sql/sql";
import "codemirror/mode/shell/shell";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/hint/show-hint"; // 用来做代码提示
import "codemirror/addon/hint/sql-hint"; // 用来做代码提示

// 需要做按需加载
// import "codemirror/theme/monokai.css";
// import "codemirror/lib/codemirror.css";
// import "codemirror/addon/hint/show-hint.css"

marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
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
        theme: "monokai",
        keyMap: "vim",
        mode: "markdown",
        lineNumbers: true,
        lineWrapping: true
      }
    );
    editor.on("change", () => {
      this.setState({
        content: editor.getValue()
      });
    });
  }

  onEdit = (event: any) => {
    this.setState({
      content: event.target.value
    });
  };

  getMarkdownText = () => {
    const rawMarkup = marked("# This is *Markdown*. (c)");
    return { __html: rawMarkup };
  };

  render() {
    const { content } = this.state;
    return (
      <>
        <div className="codemirror-body">
          <textarea cols={30} rows={10} ref={this.textareaRef} value={content} onChange={this.onEdit} />
        </div>
        <div className="markdown-body">
          <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
      </>
    );
  }
}

type P = {};
type S = {
  content: string;
};
