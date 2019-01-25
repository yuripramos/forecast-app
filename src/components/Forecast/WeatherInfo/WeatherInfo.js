import React, { Component } from "react";
import { string, arrayOf, number, bool } from "prop-types";

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
import Button from "../../common/Button";
import IconGenerator from "../../common/Icon";
import FutureForecast from "./FutureForecast";
import TimeMachineForecast from "./TimeMachineForecast";
import { Container, Row, Column } from "../../../styles/grid";

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
  }

  async handleConfirmButton() {
    const {
      isTimeMachineActive,
      latitude,
      longitude,
      toggleForecast,
      getForecastTimeMachine
    } = this.props;

    this.setState({
      isLoading: true
    });
    !isTimeMachineActive && (await getForecastTimeMachine(latitude, longitude));
    isTimeMachineActive && toggleForecast();
    this.setState({
      isLoading: false
    });
  }
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
      nextWeek,
      isTimeMachineActive,
      forecastTimeMachine
    } = this.props;
    const { isLoading } = this.state;
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
              {isTimeMachineActive ? (
                <TimeMachineForecast forecast={forecastTimeMachine} />
              ) : (
                <FutureForecast forecast={nextWeek} />
              )}
              <Button
                width={"180"}
                to={{
                  pathname: "/forecast",
                  search: `?time-machine-request`
                }}
                loading={isLoading}
                onClick={this.handleConfirmButton}
              >
                {isTimeMachineActive
                  ? "7-days future forecast"
                  : "click here to 30-day past"}
              </Button>
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
  nextWeek: arrayOf,
  apparentTemperature: number,
  isTimeMachineActive: bool,
  forecastTimeMachine: arrayOf
};

export default WeatherInfo;
