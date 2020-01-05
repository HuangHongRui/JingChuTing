import React from "react";
import Navigation from "component/Navigation";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="p-home">
        <Navigation />
      </div>
    );
  }
}
