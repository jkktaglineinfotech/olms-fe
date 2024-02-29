import React from "react";
import { loginContainer } from "../../container/login.container";
import CommonForm from "../../shared/CommonForm";

const Login = () => {
  const {
    authData,
    loginAttributes,
    errors,
    handleInputChange,
    loading,
    handleLogin,
    userLength,
    hasChanges,
    buttonLoading,
  } = loginContainer();
  return (
    <div className="container text-center mt-5">
      <h2>Login</h2>
      {/* {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          {errorMessage}
        </Alert>
      )} */}
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

{
  /*loginAttributes.map((item) => (
          <div className="mb-3 row" key={item.id}>
            <CommonLabel
              value={item.label}
              //className="col-sm-4 col-form-label"
              className="form-label"
            />
            <div className="">
              <CommonInput
                type={item.type}
                //className="form-control"
                name={item.name}
                value={authData[item.name]}
                onChange={handleInputChange}
                //required={item.isRequired}
                required={item.isRequired}
                // className={`form-control ${
                //   authData[item.name].length > 0 &&
                //   authData[item.name].length < 6
                //     ? "is-invalid"
                //     : ""
                // }`}
              />
              {errors[item.name] && (
                <CommonErrorMessageBox
                  message={item.errorMessage}
                  variant="danger"
                  className="mt-1 small"
                />
              )}
            </div>
          </div>
           <div>
          <CommonButton
            busy={loading}
            onClick={handleLogin}
            value="Login"
            className="btn btn-primary"
            type={"submit"}
          />
        </div>
              ))*/
}
