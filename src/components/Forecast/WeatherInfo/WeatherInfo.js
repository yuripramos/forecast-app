import React, { Component } from "react";
import { ContentWrapper, Temperature, City, TinySpecs } from "./styles";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class WeatherInfo extends Component {
  render() {
    const {
      city,
      country,
      temperature,
      day,
      time,
      wind,
      humidity
    } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <ContentWrapper>
                <City>
                  {city}, {country}{" "}
                </City>
                <Temperature> {temperature} </Temperature>
                <TinySpecs>{day}</TinySpecs>
                <TinySpecs> {time} </TinySpecs>
                <TinySpecs> {wind} </TinySpecs>
                <TinySpecs> {humidity} </TinySpecs>
              </ContentWrapper>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

WeatherInfo.defaultProps = {};

WeatherInfo.propTypes = {};

export default WeatherInfo;
