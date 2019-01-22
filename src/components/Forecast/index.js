import { connect } from "redux-zero/react";

import Forecast from "./Forecast";
import Forecastactions from "../../actions/Forecast";

export default connect(
  ({ getForecast, forecast, search }) => ({
    getForecast,
    forecast,
    search
  }),
  Forecastactions
)(Forecast);
