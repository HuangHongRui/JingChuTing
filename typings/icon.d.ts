declare module "*.svg" {
  const content: string;
  export default content;
}

declare type Icon = {
  csdn: string;
  facebook: string;
  github: string;
  instagram: string;
  jianshu: string;
  jingchu: string;
  jingchuting: string;
  reddit: string;
  stackOverFlow: string;
  twitter: string;
  v2ex: string;
  weibo: string;
  weixin: string;
  zhihu: string;
  [nameprops: string]: string;
};
