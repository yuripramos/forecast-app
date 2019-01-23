import * as FORECAST_API from "../../services/Forecast";

export default state => ({
  forwardGeocode: async (_, city) => {
    const forwardGeoCodeRequest = await FORECAST_API.getForwardGeoCode(city);
    const updatedCity =
      forwardGeoCodeRequest.results.length > 1
        ? forwardGeoCodeRequest.results[0]
        : forwardGeoCodeRequest.results;
    console.log(updatedCity);
    return {
      updatedCity: updatedCity.formatted,
      // citiesSearched: [...state.citiesSearched, updatedCity.formatted],
      geometry: updatedCity.geometry,
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
