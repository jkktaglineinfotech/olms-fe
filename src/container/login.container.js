import { useDispatch, useSelector } from "react-redux";
import {
  loginAttributes,
  defaultUserData,
} from "../description/login.description";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValid } from "../utils/commonValidations";
import { useEffect } from "react";
import { userLength } from "../utils/commonFunctions";

export const loginContainer = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    ...defaultUserData,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const handleInputChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    // const { error, ok } = validateLoginInfo({
    //   email: authData.email,
    //   password: authData.password,
    // });

    // if (!ok) {
    //   setErrorMessage(error);
    //   setShowAlert(true);
    //   return;
    // }
    const errorObj = {};
    const error = loginAttributes.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: authData[item.name],
        }))
    );
    setErrors(errorObj);
    console.log(errorObj);
    if (Object.values(errorObj).some((val) => val)) return;

    // setLoading(true);
    // const data = await signIn(authData);
    // if (!data) {
    //   setLoading(false);
    //   return;
    // }
    // localStorage.setItem("userInfo", JSON.stringify(data.data));
    // localStorage.setItem("authToken", data?.data?.accessToken);

    // console.log(data.data);
    // setLoading(false);

    // dispatch(setReduxUserState(data.data));
    // console.log(data.data.role);
    // if (data?.data?.role === "ADMIN") navigate("/admin/home");
    // else navigate("/home");
  };

  useEffect(() => {
    if (userLength(userData) && userData.role === "ADMIN") {
      navigate("/admin/home");
    } else if (userLength(userData) && userData.role !== "ADMIN") {
      navigate("/home");
    }
  }, []);
  return {
    authData,
    loginAttributes,
    errors,
    handleInputChange,
    loading,
    handleLogin,
    userLength,
  };
};