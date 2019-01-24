import React, { Component } from "react";
import {
  ContentWrapper,
  Temperature,
  City,
  TinySpecs,
  Icon,
  MainContentWrapper,
  SidebarContentWrapper,
  InnerContentWrapper
} from "./styles";
import getIcon from "../../../utils/getIcon";

import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class WeatherInfo extends Component {
  render() {
    const {
      city,
      country,
      temperature,
      day,
      wind,
      humidity,
      icon,
      summary
    } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <City>{city}</City>
              <InnerContentWrapper>
                <MainContentWrapper>
                  <Icon>{getIcon(icon, "170px", "170px")}</Icon>
                  <Temperature> {temperature} </Temperature>
                </MainContentWrapper>
                <SidebarContentWrapper>
                  <TinySpecs>{day}</TinySpecs>
                  <TinySpecs>{summary}</TinySpecs>
                  <TinySpecs> Wind: {wind} </TinySpecs>
                  <TinySpecs> Humidity: {humidity} </TinySpecs>
                </SidebarContentWrapper>
              </InnerContentWrapper>
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
