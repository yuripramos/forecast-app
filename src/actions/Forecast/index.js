import * as FORECAST_API from "../../services/Forecast";

export default ()=> ({
  forwardGeocode: async (state, city) => {
    const forwardGeoCodeRequest = await FORECAST_API.getForwardGeoCode(city);
    return {
      isFilled: forwardGeoCodeRequest.status === 200,
      updatedCity: state.search.city,
      citiesSearched: [...state.citiesSearched, state.search.city],
      longitude: forwardGeoCodeRequest.data.longitude,
      nextWeekStats: forwardGeoCodeRequest.data.daily.data,
      currently: forwardGeoCodeRequest.data.currently,
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
    return {
      search: {},
    };
  }
});
