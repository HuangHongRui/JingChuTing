type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*_i.svg" {
  const content: SvgrComponent;
  export default content;
}

declare module "*_pic.svg" {
  const content: string;
  export default content;
}

declare namespace IconTypes {
  type Iconkey =
    | "csdn"
    | "facebook"
    | "github"
    | "instagram"
    | "jianshu"
    | "reddit"
    | "stackOverFlow"
    | "twitter"
    | "v2ex"
    | "weibo"
    | "weixin"
    | "zhihu"
    | string;

  export type All = {
    [nameprops in Iconkey]: SvgrComponent;
  };
}
