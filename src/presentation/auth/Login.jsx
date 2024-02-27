import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommonInput from "../../shared/CommonInput";
import CommonLabel from "../../shared/CommonLabel";
import {
  loginSuccess,
  setReduxUserState,
} from "../../redux/actions/authAction";
import CommonButton from "../../shared/CommonButton";
import { loginAttributes } from "../../description/login.description";
import CommonErrorMessageBox from "../../shared/CommonErrorMessageBox";
import { validateLoginInfo } from "../../utils/validations";
import { Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import { signIn } from "../../api/auth";
import Loader from "../layout/Loader";
import { userLength } from "../../utils/commonFunctions";
const Login = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { error, ok } = validateLoginInfo({
      email: authData.email,
      password: authData.password,
    });

    if (!ok) {
      setErrorMessage(error);
      setShowAlert(true);
      return;
    }
    setLoading(true);
    const data = await signIn(authData);
    if (!data) {
      setLoading(false);
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify(data.data));
    localStorage.setItem("authToken", data?.data?.accessToken);

    console.log(data.data);
    setLoading(false);

    dispatch(setReduxUserState(data.data));
    console.log(data.data.role);
    if (data?.data?.role === "ADMIN") navigate("/admin/home");
    else navigate.push("/home");
  };

  useEffect(() => {
    if (userLength(userData) && userData.role === "ADMIN") {
      navigate("/admin/home");
    } else if (userLength(userData) && userData.role !== "ADMIN") {
      navigate("/home");
    }
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2>Login</h2>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          {errorMessage}
        </Alert>
      )}
      {/* <Loader visible={loading} /> */}
      <div className="mx-auto" style={{ maxWidth: "400px" }}>
        {loginAttributes.map((item) => (
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
                className={`form-control ${
                  authData[item.name].length > 0 &&
                  authData[item.name].length < 6
                    ? "is-invalid"
                    : ""
                }`}
              />
              {item.isRequired && !authData[item.name].trim() && (
                <CommonErrorMessageBox
                  message={item.errorMessage}
                  className="invalid-feedback"
                />
              )}
            </div>
          </div>
        ))}

        <div>
          <CommonButton
            busy={loading}
            onClick={handleLogin}
            value="Login"
            className="btn btn-primary"
            type={"submit"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
