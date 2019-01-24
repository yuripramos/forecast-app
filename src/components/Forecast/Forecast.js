import React, { Component } from "react";
import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import WeatherInfo from "./WeatherInfo";
import { white } from "../../styles/settings";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import moment from "moment";
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
      forecast,
      search,
      updatedCity,
      isFilled,
      citiesSearched,
      nextWeekStats,
      currently,
      respForward,
      unit
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
                  day={moment.unix(currently.time).format("lll")}
                  wind={`${currently.windSpeed} ${translate("WIND_SPEED")}`}
                  humidity={formatHumidity(currently.humidity)}
                  icon={currently.icon}
                  summary={currently.summary}
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
