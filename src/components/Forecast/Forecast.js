import React, { Component } from "react";
import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import WeatherInfo from "./WeatherInfo";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

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
      currently
    } = this.props;
    return (
      <ContentWrapper>
        {isFilled && (
          <Container>
            <Row>
              <Column>
                <WeatherInfo
                  city={"Curitiba"}
                  country={"Brazil"}
                  temperature={"30C"}
                  day={"Tuesday"}
                  time="19:50"
                  wind={"10.1 mph"}
                  humidity={"22%"}
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
