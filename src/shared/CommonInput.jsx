import React from "react";
import { Form } from "react-bootstrap";
import CommonErrorMessageBox from "./CommonErrorMessageBox";
import CommonToolTip from "./CommonToolTip";

const CommonInput = ({
  className = "",
  onChange,
  id = "",
  name,
  required = false,
  disabled = false,
  ...rest
}) => {
  return (
    <Form.Control
      className={className}
      id={id}
      onChange={onChange}
      name={name}
      required={required}
      disabled={disabled}
      {...rest}
    />
  );
};

export default CommonInput;
