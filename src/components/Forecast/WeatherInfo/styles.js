import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
`;

export const City = styled.div`
  text-align: left;
  border-bottom: solid thin white;
  text-transform: uppercase;
  color: #e8e8e8;
  color: rgba(255, 255, 255, 0.7);
  font-family: "RobotoSlab Regular";
`;

export const Temperature = styled.h1`
  font-size: 4.5em;
  font-weight: 300;
  line-height: 0.75;
  font-family: "RobotoSlab Regular";
`;

export const TinySpecs = styled.h3`
  color: white;
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: 0.025em;
  margin: 0;
  padding: 0;
  font-family: "RobotoSlab Regular";
`;
