import { connect } from "redux-zero/react";

import Header from "./Header";
import Forecastactions from "../../actions/Forecast";

export default connect(
  ({ handleUserInput, search, clearSearch }) => ({
    handleUserInput,
    search,
    clearSearch
  }),
  Forecastactions
)(Header);
