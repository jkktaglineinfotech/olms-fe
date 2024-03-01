import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const CommonInput = ({ onChange, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Form.Control
        {...{
          ...rest,
          onChange,
          type: showPassword ? "text" : type,
          value: rest.value || "",
        }}
      />
      <div className="d-flex flex-column justify-content-end align-items-end mb-3">
        {type === ("password" || "loginPassword") ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Eye /> : <EyeSlash />}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default CommonInput;
