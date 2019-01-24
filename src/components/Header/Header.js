import React from "react";
import { HeaderWrapper, Title, TitleWrapper, InputWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { shape, func, string } from "prop-types";
import Button from "../common/Button";
import Input from "../common/Input";

function Header({ handleUserInput, search, forwardGeocode }) {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Column>
            <TitleWrapper>
              <Title>Forecast App</Title>
            </TitleWrapper>
          </Column>
        </Row>
        <Row>
          <Column>
            <InputWrapper>
              <Input
                onChange={handleUserInput}
                value={search.city}
                placeholder={
                  "city, country or neighborhood, city to forecast =)"
                }
                height={40}
                width={100}
                type="text"
                name="city"
              />
              <Button
                width={"80"}
                to={{
                  pathname: "/forecast",
                  search: `?search=${search.city}`
                }}
                onClick={() => forwardGeocode(search.city)}
              >
                SEARCH
              </Button>
            </InputWrapper>
          </Column>
        </Row>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;

Header.defaultProps = {
  search: {
    city: ""
  }
};

Header.propTypes = {
  handleUserInput: func,
  clearSearch: func,
  forwardGeocode: func,
  search: shape({
    city: string
  })
};
