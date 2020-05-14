import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "component/Loading";
import { Error, Home, Study, Article, Login } from "./pages";

export default class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading className="load-page" />}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/article" component={Article} />
            <Route exact path="/study" component={Study} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
