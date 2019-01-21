import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools/index";

export const Span = styled.span`
  display: inline-flex;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ width, height }) =>
    width &&
    height &&
    css`
      svg {
        width: ${rem(width)};
        height: ${rem(height)};
      }
    `};
`;
