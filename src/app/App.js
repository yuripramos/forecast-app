import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "redux-zero/react";
import { ThemeProvider } from "styled-components";
// import "./App.css";
// import "../styles/settings/fonts";
import Routes from "../components/Routes";
import { Router } from "react-router-dom";
import history from "../services/history";
import { rem } from "../styles/tools";
import Footer from "../components/Footer";
import store from "../utils/store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider
          theme={{
            space: [0, rem(5), rem(10), rem(15), rem(20)],
            breakpoints: [rem(767), rem(992), rem(1199)]
          }}
        >
          <Fragment>
            <Routes />
            <Footer />
          </Fragment>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
