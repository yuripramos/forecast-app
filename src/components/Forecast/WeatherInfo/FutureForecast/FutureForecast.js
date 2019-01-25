import React, { Component, Fragment } from "react";
import {
  ContentWrapper,
  Temperature,
  City,
  TinySpecs,
  Icon,
  DaySpecs,
  SidebarContentWrapper,
  InnerContentWrapper
} from "./styles";
import IconGenerator from "../../../common/Icon";
import { Container, Row, Column } from "../../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class FutureForecast extends Component {
  render() {
    const {
      forecast
    } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <InnerContentWrapper>
                {forecast.map((e, i) => (
                  <DaySpecs>
                    <TinySpecs> dia </TinySpecs>
                    <Icon>
                      <IconGenerator
                        name={e.icon}
                        width={"70px"}
                        height={"70px"}
                      />
                    </Icon>
                    <Temperature> {e.temperatureHigh} </Temperature>
                    <Temperature tiny>{e.temperatureLow} </Temperature>
                  </DaySpecs>
                ))}
              </InnerContentWrapper>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

FutureForecast.defaultProps = {};

FutureForecast.propTypes = {
  city: string,
  temperature: string,
  day: string,
  wind: string,
  humidity: string,
  icon: string,
  summary: string
};

export default FutureForecast;
