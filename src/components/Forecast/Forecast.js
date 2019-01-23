import React, { Component } from "react";
import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import WeatherInfo from "./WeatherInfo";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class Forecast extends Component {
  async componentDidMount() {
    const { forwardGeocode, search, clearSearch } = this.props;
    console.log("search here", search);
    forwardGeocode(search.city);
    clearSearch();
  }
  render() {
    const { forecast, search } = this.props;
    return (
      <ContentWrapper>
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
