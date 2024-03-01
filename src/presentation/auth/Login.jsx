import React from "react";
import { loginContainer } from "../../container/login.container";
import CommonForm from "../../shared/CommonForm";
import CommonHeadingText from "../../shared/CommonHeadingText";

const Login = () => {
  const {
    authData,
    loginAttributes,
    errors,
    handleInputChange,
    handleLogin,
    hasChanges,
    buttonLoading,
  } = loginContainer();
  return (
    <div className="container text-center mt-5">
      <CommonHeadingText value={"Login"} />
      <div className="mx-auto" style={{ maxWidth: "400px" }}>
        <CommonForm
          formAttributes={loginAttributes}
          formData={authData}
          onChange={handleInputChange}
          onSubmit={handleLogin}
          buttonText={"Login"}
          errors={errors}
          disabled={!hasChanges}
          buttonLoading={buttonLoading}
        />
      </div>
    </div>
  );
};

export default Login;
