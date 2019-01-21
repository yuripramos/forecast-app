import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import { white, grey30, black50, darkBlue } from "../../../styles/settings";

export const InputField = styled.input`
  width: 30%;
  height: ${rem(25)};
  border-radius: ${rem(4)};
  background-color: ${white};
  border: solid ${rem(1)} ${grey30};
  letter-spacing: ${rem(0.8)};
  color: ${black50};
  padding: 0 ${rem(52)};
  transition: 0.3s padding, 0.3s border;

  ::-ms-clear {
    display: none !important;
  }

  :focus {
    outline: none;
    border: solid ${rem(1)} ${darkBlue};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  height: ${rem(26)};

  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};
`;

export const Label = styled.label`
  pointer-events: none;
  transition: 0.3s top, 0.2s color, 0.3s font-size;
  font-family: "Helveticaneue Medium";
  font-size: ${rem(16)};
  transform: translateY(5px);
`;
