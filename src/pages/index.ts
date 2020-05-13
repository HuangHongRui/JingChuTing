import { lazy } from "react";

export const Article = lazy(() => import(/* webpackChunkName: "Article" */ "./Article"));
export const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"));
export const Study = lazy(() => import(/* webpackChunkName: "Study" */ "./Study"));
export const Error = lazy(() => import(/* webpackChunkName: "Error" */ "../component/Error"));
