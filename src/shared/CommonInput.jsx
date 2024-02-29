import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import CommonButton from "./CommonButton";

const CommonInput = ({
  onChange,
  // className = "",
  // id = "",
  // name,
  // required = false,
  // disabled = false,
  type,
  ...rest
}) => {
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
          value: rest.value || "", // Ensure a default value to prevent the warning
        }}
        //onChange={onChange}
        // className={className}
        // id={id}
        // name={name}
        // required={required}
        // disabled={disabled}
        //{...rest}
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

/*
  <>
      <Form.Control
        {...{
          onChange,
          type,
          ...rest,
        }}
        //onChange={onChange}
        // className={className}
        // id={id}
        // name={name}
        // required={required}
        // disabled={disabled}
        //{...rest}
      />
    </>
*/
