import React from "react";
import { Form } from "react-bootstrap";

const CommonLabel = ({ value, classsName = "", ...rest }) => {
  return (
    <Form.Label className={classsName} {...rest}>
      {value}
    </Form.Label>
  );
};

export default CommonLabel;
