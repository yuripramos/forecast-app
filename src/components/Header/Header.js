import React, { Component } from "react";
import { shape, func, string } from "prop-types";

import { HeaderWrapper, Title, TitleWrapper, InputWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import Button from "../common/Button";
import Input from "../common/Input";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
    this._isMounted = false;
  }

  async handleConfirmButton() {
    this.setState({
      isLoading: true
    });
    await this.props.forwardGeocode(this.props.search.city);
    if(this._isMounted) {
      this.setState({
        isLoading: false
      });
    }
  }
  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { handleUserInput, search } = this.props;
    const { isLoading } = this.state;
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
                  onClick={this.handleConfirmButton}
                  loading={isLoading}
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
}

export default Header;

Header.defaultProps = {
  search: {
    city: "los angeles"
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
