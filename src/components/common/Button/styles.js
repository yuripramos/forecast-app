import React from "react";
import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { Link as RouterLink } from "react-router-dom";
import { lightBlue, white, green, green20 } from "../../../styles/settings";

export const ButtonTag = styled.button`
  background: ${lightBlue};
  font-family: "Helveticaneue Medium";
  border-radius: ${rem(4)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.2)};
  line-height: ${rem(45)};
  outline: none;
  padding: 0 ${rem(20)};
  position: relative;
  color: ${white};
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  user-select: none;
  opacity: ${props => (props.opacity && props.disabled ? props.opacity : 1)};

  ${media.md(css`
    width: ${props => (props.width ? rem(props.width) : "auto")};
  `)};

  ${media.lg(css`
    font-size: ${rem(13)};
    padding: 0 ${rem(28)};
    line-height: ${rem(48)};
  `)};

  :active {
    transform: translateY(${rem(1)});
  }

  ${({ isCallToAction }) =>
    isCallToAction &&
    css`
      background-color: ${green};
      box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(100, 100, 100, 0.3);
      color: ${white};
      :hover {
        background: ${green20};
      }
    `};
`;

export const RouterLinkTag = ButtonTag.withComponent(
  ({ isCallToAction, ...props }) => <RouterLink {...props} /> // eslint-disable-line
);
