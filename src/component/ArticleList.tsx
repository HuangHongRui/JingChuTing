import React from "react";
import cn from "classnames";
import { withRouter, Link } from "react-router-dom";
import { redemption } from "style/image";
import Photo from "./Photo";

@withRouter
export default class Article extends React.Component<P, {}> {
  static defaultProps = {
    rootClass: "default",
    // eslint-disable-next-line prettier/prettier
    data: [ { id: "0", picPath: redemption, title: "Trump’s Legal Team Adds Starr and Dershowitz for Impeachment Trial", intro: "Ken Starr and a third lawyer named to the team, Robert Ray, were independent counsels who investigated President Bill Clinton.", time: "8h ago2160 comments" }, { id: "", picPath: "", title: "", intro: "", time: "" }, { id: "2", picPath: redemption, title: "Trump’s Legal Team Adds Starr and Dershowitz for Impeachment Trial", intro: "Ken Starr and a third lawyer named to the team, Robert Ray, were independent counsels who investigated President Bill Clinton.", time: "8h ago2160 comments" } ]
  };

  constructor(props: P) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootClass, data } = this.props;
    const rootClassName = cn(
      "c-article-list md:max-w-screen-lg flex m-auto flex-col md:my-10 p-5 pb-0 md:border border-solid text-jc-text-color font-serif",
      rootClass
    );
    const artcileClassName = cn("flex bg-jc-bg-color p-5 overflow-hidden h-64 mb-5 min-w-jc-300");

    return (
      <div className={rootClassName}>
        {data.map(item => {
          const { id, picPath, title, intro, time } = item;
          if (!picPath && !title) return null;
          return (
            <article key={id} className={artcileClassName}>
              <Photo
                rootClass="hidden w-1/3 md:block h-full"
                propClass="rounded-none"
                picUrl={picPath}
                mes="article pic"
              />
              <div className="flex flex-col pl-5 flex-grow w-2/3  md:my-2">
                <h5 className="text-4xl text-ellipsis">{title}</h5>
                <p className="font-mono my-5 flex-grow multi-line-ellipsis">{intro}</p>
                <div className="flex justify-between">
                  <button type="button" className="inline-block">
                    <Link to={`/article/${id}`}>查看</Link>
                  </button>
                  <span className="text-right text-ellipsis">{time}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}

interface P {
  rootClass: string;
  data: {
    id: string | number;
    picPath: string;
    title: string;
    intro: string;
    time: string;
  }[];
}
