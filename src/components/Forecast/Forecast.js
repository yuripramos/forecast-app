import React, { Component, Fragment } from "react";
import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class Forecast extends Component {
  async componentDidMount() {
    this.props.getForecast(37.8267, -122.4233);
  }
  render() {
    const { forecast } = this.props;
    console.log("forecast resp", forecast);
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>sadasdasdasdasdasdasd</Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

Forecast.defaultProps = {};

Forecast.propTypes = {
  getForecast: func,
  forecast: arrayOf(string)
};

export default Forecast;
