import * as FORECAST_API from "../../services/Forecast";

export default () => ({
  forwardGeocode: async (state, city) => {
    const forwardGeoCodeRequest = await FORECAST_API.getForwardGeoCode(city);
    return {
      isFilled: forwardGeoCodeRequest.status === 200,
      updatedCity: state.search.city,
      citiesSearched: [...state.citiesSearched, state.search.city],
      longitude: forwardGeoCodeRequest.data.longitude,
      latitude: forwardGeoCodeRequest.data.latitude,
      nextWeekStats: forwardGeoCodeRequest.data.daily.data,
      currently: forwardGeoCodeRequest.data.currently,
      respForward: forwardGeoCodeRequest,
      unit: forwardGeoCodeRequest.data.flags.units
    };
  },
  getForecastTimeMachine: async (state, latitude, longitute) => {
    const getForecastTimeMachineRequest = await FORECAST_API.getForecastTimeMachine(
      latitude,
      longitute
    );
    return {
      forecastTimeMachine: getForecastTimeMachineRequest,
      isTimeMachineActive: true
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
      search: {}
    };
  },
  toggleForecast: state => {
    return {
      isTimeMachineActive: !state.isTimeMachineActive
    };
  }
});
