import * as FORECAST_API from "../../services/Forecast";

export default () => ({
  forwardGeocode: async (_, city) => {
    const forwardGeoCodeRequest = await FORECAST_API.getForwardGeoCode(city);
    console.log("resp forward", forwardGeoCodeRequest);
    return {
      respForward: forwardGeoCodeRequest
    };
  },
  getForecast: async (_, latitude, longitute) => {
    const getForecastRequest = await FORECAST_API.getForecast(
      latitude,
      longitute
    );
    return {
      forecast: getForecastRequest
    };
  },
  handleUserInput: (state, e) => {
    const { value } = e.target;
    return {
      search: {
        ...state.search,
        city: value
      }
    };
  },
  clearSearch: () => {
    console.log("called clear");
    return {
      search: {}
    };
  }
});
