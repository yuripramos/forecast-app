import styled, { css } from "styled-components";
import { rem, media } from "../../../../styles/tools";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
  width: 100%;
  display: inline-block;
`;
export const InnerContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(5)};
  min-height: ${rem(250)};
  display: inline-flex;
`;


export const Icon = styled.div`
  width: 100%;
  height: ${rem(60)};
`;

export const DaySpecs = styled.div`
  margin: ${rem(5)} ${rem(13)} ${rem(10)} ${rem(13)};
`;

export const Temperature = styled.h1`
  font-size: 1.5em;
  font-weight: 200;
  line-height: 0.75;
  font-family: "RobotoSlab Thin";
  margin-top: ${rem(20)};
  width: 100%;
   ${({ tiny }) =>
    tiny &&
    css`
      font-size: 1em;
  `};
`;

export const TinySpecs = styled.h3`
  color: white;
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: 0.025em;
  margin: 0;
  padding: 0;
  font-family: "OpenSans Thin";
  width: 100%;
  margin: ${rem(10)} 0;
  :nth-child(2n) {
    margin: ${rem(2)} 0;
  }
`;
