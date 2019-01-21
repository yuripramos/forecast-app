import React from "react";
import { bool, node, string, func, number } from "prop-types";
import { ButtonTag, RouterLinkTag } from "./styles";

function Button({
  children,
  onClick,
  type,
  disabled,
  width,
  className,
  opacity,
  to,
  isCallToAction
}) {
  if (to) {
    return (
      <RouterLinkTag
        width={width}
        onClick={onClick}
        isCallToAction={isCallToAction}
        to={to}
        disabled={disabled}
      >
        {children}
      </RouterLinkTag>
    );
  }
  return (
    <ButtonTag
      className={className}
      width={width}
      type={type}
      disabled={disabled}
      onClick={onClick}
      opacity={opacity}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  type: "button",
  disabled: false,
  width: null,
  onClick: null,
  className: null,
  to: null
};

Button.propTypes = {
  children: node.isRequired, // eslint-disable-line
  isCalltoAction: bool,
  disabled: bool,
  type: string,
  width: string,
  onClick: func,
  className: string,
  opacity: number,
  to: string
};

export default Button;
