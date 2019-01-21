import React from "react";
import { Links, ListLinks, ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { Menu } from "../../utils/getMenuFooter";

function Footer() {
  return (
    <ContentWrapper>
      <Container>
        <Row />
        <Row>
          <Column>
            <ListLinks>
              {Menu.map((c, i) => (
                <Links key={i}>{c}</Links>
              ))}
            </ListLinks>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

export default Footer;
