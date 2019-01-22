import * as FORECAST_API from "../../services/Forecast";

export default () => ({
  getForecast: async (_, latitude, longitute) => {
    console.log("actions", _, latitude, longitute);
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
  }
});
