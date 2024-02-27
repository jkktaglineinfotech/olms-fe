import React from "react";
import { Form } from "react-bootstrap";

const CommonErrorMessageBox = ({ className, message = "" }) => {
  if (!message.trim()) return null;
  return (
    <Form.Control.Feedback type="invalid" className={className}>
      {message}
    </Form.Control.Feedback>
  );
};

export default CommonErrorMessageBox;
