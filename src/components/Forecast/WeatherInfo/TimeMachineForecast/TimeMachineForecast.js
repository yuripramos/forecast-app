import React, { Component } from "react";
import IconGenerator from "../../../common/Icon";
import moment from "moment";
import { translate } from "../../../../utils/i18n";
import {
  ContentWrapper,
  Temperature,
  TinySpecs,
  Icon,
  DaySpecs,
  InnerContentWrapper
} from "../FutureForecast/styles";
import { Container, Row, Column } from "../../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class FutureForecast extends Component {
  render() {
    const { forecast } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <InnerContentWrapper>
                {forecast
                  .map((e, i) => (
                    <DaySpecs key={i}>
                      <TinySpecs>
                        {moment.unix(e.currently.time).format("dddd")}
                      </TinySpecs>
                      <Icon>
                        {/* <IconGenerator
                          name={e.currently.icon}
                          width={"70px"}
                          height={"70px"}
                        /> */}
                      </Icon>
                      <Temperature tiny>
                        {`${e.currently.temperature} ${translate("TEMPERATURE")}`}{" "}
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
  forecast: arrayOf
};

export default FutureForecast;
