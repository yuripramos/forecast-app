import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../Content";
import Layout from "../common/Layout";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Content} />
          <Route>
            <Switch>
              <Route path="/anotherpath" component={Content} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
