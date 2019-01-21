import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { white, trueBlack, lightBlue } from "../../styles/settings";

export const HeaderWrapper = styled.header`
  height: ${rem(158)};
  background: ${lightBlue};
  padding-top: ${rem(10)};
  text-align: center;
  ${media.md(css`
    text-align: center;
  `)};
  ${media.lg(css`
    height: ${rem(260)};
    padding-top: ${rem(6)};
  `)};
`;

export const Title = styled.h1`
  font-family: "Pacifico";
  font-size: ${rem(45)};
  text-align: center;
  color: ${white};
  text-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.25);
  margin-top: ${rem(-5)};
  ${media.md(css`
    text-align: left;
  `)};
`;

export const SubTitle = styled.h2`
  font-family: "Helveticaneue Medium";
  font-size: ${rem(20)};
  text-align: center;
  color: ${white};
  text-shadow: ${rem(3)} ${rem(3)} rgba(0, 0, 0, 0.25);
  ${media.md(css`
    font-size: ${rem(24)};
    text-align: left;
  `)};
`;

export const IconWrapper = styled.div`
  width: ${rem(70)};
  height: ${rem(55)};
  background: ${trueBlack};
  border-radius: ${rem(40)};
  opacity: 0.5;
  margin: ${rem(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const ListIcons = styled.div`
  display: flex;
  width: ${rem(200)};
  margin-top: ${rem(15)};
`;

export const FeaturedImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  ${media.xs(css`
    transform: translateX(-25px);
  `)};
  ${media.lg(css`
    margin: ${rem(30)} 0 0 ${rem(100)};
    transform: none;
  `)};
`;

export const ImgHeader = styled.img`
  width: ${rem(120)};
  height: ${rem(120)};
  ${media.lg(css`
    width: ${rem(180)};
    height: ${rem(180)};
  `)};
`;
