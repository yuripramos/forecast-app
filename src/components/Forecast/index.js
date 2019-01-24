import { connect } from "redux-zero/react";

import Forecast from "./Forecast";
import Forecastactions from "../../actions/Forecast";

export default connect(
  ({
    getForecast,
    forecast,
    search,
    forwardGeocode,
    respForward,
    clearSearch,
    geometry,
    updatedCity,
    isFilled,
    citiesSearched,
    nextWeekStats,
    currently
  }) => ({
    getForecast,
    forecast,
    search,
    forwardGeocode,
    respForward,
    clearSearch,
    geometry,
    updatedCity,
    isFilled,
    citiesSearched,
    nextWeekStats,
      currently
  }),
  Forecastactions
)(Forecast);
