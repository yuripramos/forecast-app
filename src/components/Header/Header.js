import React from "react";
import {
  HeaderWrapper,
  Title,
  SubTitle,
  ListIcons,
  IconWrapper,
  ImgHeader,
  FeaturedImage
} from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { white } from "../../styles/settings/index";
import { isResponsive } from "../../utils/getResolution";
import Icon from "../common/Icon";
import Hide from "../common/Hide";
import FeaturedHandImage from "../../assets/images/favicon.png";

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          {!isResponsive() && (
            <Column width={1 / 2}>
              <FeaturedImage>
                <ImgHeader src={FeaturedHandImage} alt="trivia logo" />
              </FeaturedImage>
            </Column>
          )}
          <Column width={isResponsive() ? "auto" : "50%"}>
            <Title>Forecast</Title>
            <SubTitle> Future or past? </SubTitle>
            <Hide below="lg">
              <ListIcons>
                <IconWrapper>
                  <Icon
                    type="AndroidLogo"
                    height={33}
                    width={33}
                    color={white}
                  />
                </IconWrapper>
                <IconWrapper>
                  <Icon type="AppleLogo" height={33} width={33} />
                </IconWrapper>
                <IconWrapper>
                  <Icon type="MicrosoftLogo" height={33} width={33} />
                </IconWrapper>
              </ListIcons>
            </Hide>
          </Column>
        </Row>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
