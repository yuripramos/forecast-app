import { connect } from "redux-zero/react";

import Header from "./Header";
import Forecastactions from "../../actions/Forecast";

export default connect(
  ({ handleUserInput, search }) => ({
    handleUserInput,
    search
  }),
  Forecastactions
)(Header);
