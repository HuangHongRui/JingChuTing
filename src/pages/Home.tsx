import React from "react";
import Navigation from "component/Navigation";
import Photo from "component/Photo";
import { graph, redemption } from "style/image";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundImage: `url("${graph}")` }} className="p-home h-screen flex flex-col">
        <Navigation />
        <Photo
          rootClass="m-auto overflow-hidden md:h-screen-50"
          propClass="rounded-jc-3"
          minWidth="md:w-screen-50"
          picUrl={redemption}
          mes="Save Yourself"
        />
      </div>
    );
  }
}
