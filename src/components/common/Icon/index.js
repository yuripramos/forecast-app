import React from "react";
import { string, number } from "prop-types";
/*eslint-disable*/

import { Span } from "./styles";

export const icons = {
  AppleLogo: require("./AppleLogo").default,
  Arrow: require("./Arrow").default,
  AndroidLogo: require("./AndroidLogo").default,
  MicrosoftLogo: require("./MicrosoftLogo").default,
  Target: require("./Target").default,
  Monitor: require("./Monitor").default,
  Landscape: require("./Landscape").default,
  Palette: require("./Palette").default,
  User: require("./User").default,
  Gear: require("./Gear").default,
  Bullet: require("./Bullet").default,
  Twitter: require("./Twitter").default,
  Facebook: require("./Facebook").default,
  Pinterest: require("./Pinterest").default,
  GooglePlus: require("./GooglePlus").default,
  LinkedIn: require("./LinkedIn").default,
  Youtube: require("./Youtube").default,
  Check: require("./Check").default,
  Attention: require("./Attention").default,
  Close: require("./Close").default
};

function Icon({ type, color, width, height, ...props }) {
  const IconSvg = icons[type];
  if (IconSvg) {
    return (
      <Span color={color} width={width} height={height} {...props}>
        <IconSvg />
      </Span>
    );
  }
  return null;
}

Icon.defaultProps = {
  color: null,
  height: null,
  width: null
};

Icon.propTypes = {
  color: string,
  height: number,
  width: number,
  type: string.isRequired // eslint-disable-line react/no-typos
};

export default Icon;
