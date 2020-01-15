import React from "react";
import Navigation from "component/Navigation";
import Photo from "component/Photo";
import { graph, redemption } from "style/image";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div
        style={{ backgroundImage: `url("${graph}")` }}
        className="p-home h-screen flex flex-col font-serif text-jc-text-color bg-center"
      >
        <Navigation />
        <Photo
          rootClass="md:max-w-screen-xl flex-1 m-auto flex items-center"
          propClass="md:h-screen-50"
          picUrl={redemption}
          mes="Save Yourself"
        />
      </div>
    );
  }
}
