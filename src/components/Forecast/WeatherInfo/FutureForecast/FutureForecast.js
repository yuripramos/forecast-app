import React, { Component, Fragment } from "react";
import IconGenerator from "../../../common/Icon";
import moment from "moment";
import { translate } from "../../../../utils/i18n";
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
                {forecast
                  .filter((j, k) => k > 0)
                  .map((e, i) => (
                    <DaySpecs key={i}>
                      <TinySpecs>
                        {moment.unix(e.time).format("dddd")}
                      </TinySpecs>
                      <Icon>
                        <IconGenerator
                          name={e.icon}
                          width={"70px"}
                          height={"70px"}
                        />
                      </Icon>
                      <Temperature>
                        {`${e.temperatureLow} ${translate(
                          "TEMPERATURE"
                        )}`}{" "}
                      </Temperature>
                      <Temperature tiny>
                        {`${e.temperatureHigh} ${translate("TEMPERATURE")}`}{" "}
                      </Temperature>
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
  forecast: arrayOf,
};

export default FutureForecast;
