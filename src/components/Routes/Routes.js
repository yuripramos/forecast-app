import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../Content";
import Forecast from "../Forecast";
import Layout from "../common/Layout";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Content} />
          <Route>
            <Switch>
              <Route path="/forecast" component={Forecast} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
