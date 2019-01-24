import React, { Component } from "react";
import {
  ContentWrapper,
  Temperature,
  City,
  TinySpecs,
  Icon,
  MainContentWrapper,
  SidebarContentWrapper
} from "./styles";
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
                  {city}
                </City>
                <MainContentWrapper>
                  <Temperature> {temperature} </Temperature>
                  <Icon>ICONE</Icon>
                </MainContentWrapper>
                <SidebarContentWrapper>
                  <TinySpecs>{day}</TinySpecs>
                  <TinySpecs> {time} </TinySpecs>
                  <TinySpecs> {wind} </TinySpecs>
                  <TinySpecs> {humidity} </TinySpecs>
                </SidebarContentWrapper>
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
