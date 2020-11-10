import React from "react";
import Navigation from "component/Navigation";
import Photo from "component/Photo";
import { leo } from "style/image";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="p-home h-screen flex flex-col">
        <Navigation />
        <div className="p-20 -mt-10 md:mt-0 flex flex-grow justify-center items-center flex-col md:flex-row">
          <Photo
            rootClass="overflow-hidden h-40 md:h-64"
            propClass="rounded-full h-full"
            minWidth="w-40 md:w-64"
            picUrl={leo}
            mes="Save Yourself"
          />
          <div className="infomation ml-10">
            <p className="text-5xl font-black leading-loose">邢烽朔</p>
            <p>凡心所向，素履所往，生如逆旅，一苇以航</p>
          </div>
        </div>
        <div className="p-4 text-center text-xs md:text-base">
          <span>Copyright © 2020 邢烽朔的博客 | </span>
          <a
            href="http://www.beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer"
          >
            粤ICP备20027291号
          </a>
        </div>
      </div>
    );
  }
}
