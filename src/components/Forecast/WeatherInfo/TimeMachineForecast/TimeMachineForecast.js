import React, { Component } from "react";
import moment from "moment";
import { arrayOf } from "prop-types";

import IconGenerator from "../../../common/Icon";
import { translate } from "../../../../utils/i18n";
import {
  ContentWrapper,
  Temperature,
  TinySpecs,
  Icon,
  DaySpecs
} from "../FutureForecast/styles";
import { InnerWrapper } from "./styles";
import { Container, Row, Column } from "../../../../styles/grid";

class FutureForecast extends Component {
  render() {
    const { forecast } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <InnerWrapper>
                {forecast.map((e, i) => (
                  <DaySpecs key={i} tiny>
                    <TinySpecs tiny>
                      {moment.unix(e.currently.time).format("L")}
                    </TinySpecs>
                    <Icon>
                      <IconGenerator
                        name={e.currently.icon}
                        width={"50px"}
                        height={"50px"}
                      />
                    </Icon>
                    <Temperature tiny>
                      {`${e.currently.temperature} ${translate("TEMPERATURE")}`}{" "}
                    </Temperature>
                  </DaySpecs>
                ))}
              </InnerWrapper>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

FutureForecast.defaultProps = {};

FutureForecast.propTypes = {
  forecast: arrayOf
};

export default FutureForecast;
