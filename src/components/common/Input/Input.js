import React from "react";
import { string, number, oneOfType, bool } from "prop-types";
import { InputWrapper, InputField, Label } from "./styles";
// import Icon from "../Icon";

function Input({ width, type, value, placeholder, checked, label, ...props }) {
  return (
    <InputWrapper width={width}>
      {label && <Label>{label}</Label>}
      <InputField
        {...props}
        required
        type={type}
        value={value}
        name={name}
        checked={checked}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

Input.displayName = "Input";

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  value: "",
  checked: false
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  label: string,
  width: number,
  checked: bool,
  value: oneOfType([number, string])
};

export default Input;
