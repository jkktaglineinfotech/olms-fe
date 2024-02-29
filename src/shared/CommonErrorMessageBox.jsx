import React from "react";
import { Alert } from "react-bootstrap";

const CommonErrorMessageBox = ({ message, ...rest }) => {
  return (
    <Alert style={{ textAlign: "left" }} {...rest}>
      {message}
    </Alert>
  );
};

export default CommonErrorMessageBox;
