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
import IconGenerator from "../../common/Icon";
import FutureForecast from "./FutureForecast";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class WeatherInfo extends Component {
  render() {
    const {
      city,
      temperature,
      day,
      wind,
      humidity,
      icon,
      summary,
      apparentTemperature,
      nextWeek
    } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <City>{city}</City>
              <InnerContentWrapper>
                <MainContentWrapper>
                  <Icon>
                    <IconGenerator
                      name={icon}
                      width={"170px"}
                      height={"170px"}
                    />
                  </Icon>
                  <Temperature> {temperature} </Temperature>
                  <TinySpecs tiny>
                    Apparent temperature
                    <Temperature tiny>{apparentTemperature}</Temperature>
                  </TinySpecs>
                </MainContentWrapper>
                <SidebarContentWrapper>
                  <TinySpecs>{day}</TinySpecs>
                  <TinySpecs>{summary}</TinySpecs>
                  <TinySpecs> Wind: {wind} </TinySpecs>
                  <TinySpecs> Humidity: {humidity} </TinySpecs>
                </SidebarContentWrapper>
              </InnerContentWrapper>
              <FutureForecast forecast={nextWeek} />
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

WeatherInfo.defaultProps = {};

WeatherInfo.propTypes = {
  city: string,
  temperature: string,
  day: string,
  wind: string,
  humidity: string,
  icon: string,
  summary: string,
};

export default WeatherInfo;
