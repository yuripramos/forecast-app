import { connect } from "redux-zero/react";

import Forecast from "./Forecast";
import Forecastactions from "../../actions/Forecast";

export default connect(
  ({
    getForecastTimeMachine,
    forecastTimeMachine,
    isTimeMachineActive,
    search,
    forwardGeocode,
    respForward,
    clearSearch,
    longitude,
    latitude,
    updatedCity,
    isFilled,
    citiesSearched,
    nextWeekStats,
    currently,
    unit
  }) => ({
    getForecastTimeMachine,
    forecastTimeMachine,
    isTimeMachineActive,
    search,
    forwardGeocode,
    respForward,
    clearSearch,
    longitude,
    latitude,
    updatedCity,
    isFilled,
    citiesSearched,
    nextWeekStats,
    currently,
    unit
  }),
  Forecastactions
)(Forecast);
