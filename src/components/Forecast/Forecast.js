import React, { Component } from "react";
import WeatherInfo from "./WeatherInfo";
import moment from "moment";
import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { white } from "../../styles/settings";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import { translate } from "../../utils/i18n";
import { formatHumidity } from "../../utils/formatNumber";
class Forecast extends Component {
  async componentDidMount() {
    const {
      forwardGeocode,
      search,
      clearSearch
    } = this.props;
    search && await forwardGeocode(search.city);
    clearSearch();

  }
  render() {
    const {
      forecastTimeMachine,
      getForecastTimeMachine,
      search,
      updatedCity,
      isFilled,
      citiesSearched,
      nextWeekStats,
      latitude,
      longitude,
      currently,
      unit,
      isTimeMachineActive
    } = this.props;
    return (
      <ContentWrapper>
        {isFilled && (
          <Container>
            <Row>
              <Column>
                <WeatherInfo
                  city={updatedCity}
                  temperature={`${currently.temperature}${translate(
                    "TEMPERATURE"
                  )}`}
                  apparentTemperature={`${
                    currently.apparentTemperature
                  }${translate("TEMPERATURE")}`}
                  day={moment.unix(currently.time).format("lll")}
                  wind={`${currently.windSpeed} ${translate("WIND_SPEED")}`}
                  humidity={formatHumidity(currently.humidity)}
                  icon={currently.icon}
                  summary={currently.summary}
                  nextWeek={nextWeekStats}
                  getForecastTimeMachine={getForecastTimeMachine}
                  latitude={latitude}
                  longitude={longitude}
                  isTimeMachineActive={isTimeMachineActive}
                  forecastTimeMachine={forecastTimeMachine}
                />
              </Column>
            </Row>
          </Container>
        )}
      </ContentWrapper>
    );
  }
}

Forecast.defaultProps = {};

Forecast.propTypes = {
  getForecast: func,
  forecast: func
};

export default Forecast;
