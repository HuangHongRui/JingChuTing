import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Error } from "./pages";

export default class App extends React.Component<P, S> {
  constructor(props: Readonly<P>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

type P = {};

type S = {};
