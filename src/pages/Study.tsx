import React from "react";
import marked from "marked";
import CodeMirror from "codemirror";
import Prism from "prismjs";
import cn from "classnames";
import moment from "moment";
import { withRouter } from "react-router-dom";
import Navigation from "component/Navigation";
import Loading from "component/Loading";
import { apiStudySubmit, apiIsLogin } from "utils/api";

import "codemirror/keymap/vim";
// 使用语言
import "codemirror/mode/python/python";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/javascript/javascript";

// 代码折叠
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";

// 需要做按需加载
import "prismjs/themes/prism.css";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "github-markdown-css/github-markdown.css";

// 需要这样倒入语言 -m-#
import "prismjs/components/prism-python";

const renderer = new marked.Renderer();
renderer.code = function (code, lang) {
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
  },
});

enum EditModeType {
  md = "markdown",
  js = "javascript",
  py = "python",
  html = "htmlmixed",
}

enum ViewModeType {
  "编辑模式",
  "预览模式",
}

@withRouter
export default class Study extends React.Component<P, S> {
  editor: any;

  timer: any;

  textareaPRef: React.RefObject<any>;

  constructor(props: Readonly<P>) {
    super(props);
    this.state = {
      loading: true,
      content: localStorage.getItem("studyContent") || "",
      editMode: EditModeType.md,
      viewMode: ViewModeType.编辑模式,
      cspTimer: null,
      title: localStorage.getItem("studyTitle") || "",
    };
    this.textareaPRef = React.createRef();
    this.timer = localStorage.getItem("timer") && JSON.parse(localStorage.getItem("timer"));
  }

  componentDidMount(): void {
    this.authentication();
    this.initCodeMirror();
    this.goTiemr();
  }

  componentDidUpdate(preProps: P, nextState: S): void {
    const { editMode } = this.state;
    if (editMode !== nextState.editMode) {
      this.initCodeMirror();
    }
  }

  authentication = (): void => {
    const { history } = this.props;
    const islogin = localStorage.getItem("login");
    switch (islogin) {
      case "self":
        apiIsLogin().then((res: any) => {
          if (res.status && res.data.login) {
            this.setState({ loading: false });
          }
        });
        break;
      case "others":
        alert("该功能为博主专用");
        history.push("home");
        break;
      default:
        history.push("login");
    }
  };

  goTiemr = (reload?: boolean): void => {
    if (!this.timer || reload) {
      this.timer = moment();
      localStorage.setItem("timer", JSON.stringify(this.timer));
    }
    setInterval(() => {
      const now = moment();
      const diff = now.diff(this.timer);
      const consumption = moment.utc(diff).format("HH:mm:ss");

      this.setState({
        cspTimer: consumption,
      });
    }, 1000);
  };

  initCodeMirror = (): void => {
    const { content, editMode } = this.state;
    const textareaPRef = this.textareaPRef.current;
    this.editor = CodeMirror(
      (ele) => {
        textareaPRef.replaceChild(ele, textareaPRef.children[0]);
      },
      {
        indentUnit: 4,
        value: content,
        theme: "material",
        keyMap: "vim",
        mode: editMode,
        lineNumbers: true,
        lineWrapping: true,
        foldGutter: true, // 折叠代码
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      }
    );
    this.editor.on("change", () => {
      const val = this.editor.getValue();
      this.setState({
        content: val,
      });
      localStorage.setItem("studyContent", val);
    });
  };

  getMarkdownText = (value: string) => {
    return marked(value);
  };

  onTabViewMode = (): void => {
    const { viewMode } = this.state;
    const val = viewMode ? 0 : 1;
    this.setState({
      viewMode: val,
    });
  };

  onTitle = (event: any): void => {
    const val = event.target.value;
    this.setState({ title: val });
    localStorage.setItem("studyTitle", val);
  };

  onEditMode = (event: any): void => {
    this.setState({ editMode: event.target.value });
  };

  onClean = (): void => {
    this.editor.setValue("");
    this.goTiemr(true);
  };

  onSubmit = (): void => {
    const { content, title } = this.state;
    apiStudySubmit(title, JSON.stringify(content));
    localStorage.removeItem("studyTitle");
    localStorage.removeItem("studyContent");
  };

  render() {
    const str = "```";
    const { content, viewMode, editMode, cspTimer, title, loading } = this.state;
    const btnStyle =
      "outline-none mr-10 py-4 appearance-none bg-transparent text-center text-center-last cursor-pointer hover:text-jc-hover-color";
    const wrapStyle = " overflow-y-scroll flex-1";
    const editStyle = `codemirror-body ${wrapStyle}`;
    const markStyle = `markdown-body ${wrapStyle} ${ViewModeType[viewMode] === "编辑模式" ? "" : " hidden"}`;
    const markContent = editMode === EditModeType.md ? content : `${str + EditModeType.md}\n${content}\n${str}`;

    return (
      <>
        <Loading className={cn("load-page", { hidden: !loading })} />
        <div className={cn("flex flex-col h-screen ", { invisible: loading })}>
          <Navigation />

          <div className="flex font-mono text-l text-jc-text-color border-b-2 border-gray-200">
            <input
              value={title}
              placeholder="标题"
              onChange={this.onTitle}
              className="flex-grow pl-4 text-lg font-black bg-transparent"
            />
            <span className={btnStyle}>字数</span>
            <span className={btnStyle}>{cspTimer || "耗时"}</span>
            <button type="button" className={btnStyle} onClick={this.onClean}>
              清空内容
            </button>
            <button type="button" className={btnStyle}>
              同步滚动
            </button>
            <select className={btnStyle}>
              <option>MATERIAL</option>
            </select>
            <select className={btnStyle} value={editMode} onChange={this.onEditMode}>
              {Object.keys(EditModeType).map((item: string) => {
                const detail = (EditModeType as any)[item];
                return (
                  <option key={item} value={detail}>
                    {detail.toUpperCase()}
                  </option>
                );
              })}
            </select>
            <button type="button" className={btnStyle} onClick={this.onTabViewMode}>
              {ViewModeType[viewMode]}
            </button>
            <button type="button" className={btnStyle} onClick={this.onSubmit}>
              提交
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div className={`${editStyle}`} ref={this.textareaPRef}>
              <textarea />
            </div>
            <div className={markStyle}>
              <div dangerouslySetInnerHTML={{ __html: marked(markContent) }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

type P = any;
type S = {
  loading: boolean;
  content: string;
  viewMode: number;
  editMode: string;
  cspTimer: string | null;
  title: string;
};
