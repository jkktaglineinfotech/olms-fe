import React from "react";
import { Form } from "react-bootstrap";

const CommonLabel = ({ label, isRequired, ...rest }) => {
  return (
    <Form.Label {...rest}>
      {isRequired ? (
        <>
          {label}
          <span style={{ color: "red" }}>*</span>
        </>
      ) : (
        label
      )}{" "}
    </Form.Label>
  );
};

export default CommonLabel;
