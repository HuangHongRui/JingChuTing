import React from "react";
import Photo from "component/Photo";
import { leo } from "style/image";
import Foot from "component/Foot";
import "./index.scss";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="leo-home">
        <div className="main">
          <Photo rootClass="home-photo" picUrl={leo} mes="Save Yourself" />
          <div className="infomation">
            <p className="nickname">邢烽朔</p>
            <p>凡心所向，素履所往，生如逆旅，一苇以航</p>
          </div>
        </div>
        <Foot />
      </div>
    );
  }
}
