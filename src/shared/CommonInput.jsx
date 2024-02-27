import React from "react";
import { Form } from "react-bootstrap";

const CommonInput = ({
  className = "",
  onChange,
  id = "",
  name,
  required = false,
  ...rest
}) => {
  return (
    <Form.Control
      className={className}
      id={id}
      onChange={onChange}
      name={name}
      required={required}
      {...rest}
    />
  );
};

export default CommonInput;
