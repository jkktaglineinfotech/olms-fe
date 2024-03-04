import { useDispatch, useSelector } from "react-redux";
import {
  loginAttributes,
  defaultUserData,
} from "../description/login.description";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValid } from "../utils/commonValidations";
import { useEffect } from "react";
import { checkIsError, userLength } from "../utils/commonFunctions";
import { signIn } from "../api/auth";
import { setReduxUserState } from "../redux/actions/authAction";
import {
  startLoading,
  stopLoadingError,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";
export const loginContainer = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const [hasChanges, setHasChanges] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    ...defaultUserData,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const handleInputChange = (e) => {
    setHasChanges(true);
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setButtonLoading(true);
    const errorObj = {};
    const error = loginAttributes.map((item) => {
      errorObj[item.name] = checkValid({
        ...item,
        value: authData[item.name],
        isRequired: item.isRequired,
        validationMeesage: item.validationMeesage,
        errorMessage: item.errorMessage,
      });
    });
    setErrors(errorObj);
    if (checkIsError(errorObj)) {
      setButtonLoading(false);
      return;
    }

    dispatch(startLoading());
    // setLoading(true);
    const data = await signIn(authData);
    if (!data) {
      setButtonLoading(false);
      dispatch(stopLoadingError());
      // setLoading(false);
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify(data.data));
    localStorage.setItem("authToken", data?.data?.accessToken);
    dispatch(stopLoadingSuccess());
    // setLoading(false);

    dispatch(setReduxUserState(data.data));
    setErrors([]);
    setButtonLoading(false);

    if (data?.data?.role === "ADMIN") navigate("/admin/home");
    else navigate("/");
  };

  useEffect(() => {
    if (userLength(userData) && userData.role === "ADMIN") {
      navigate("/admin/home");
    } else if (userLength(userData) && userData.role !== "ADMIN") {
      navigate("/");
    }
  }, []);
  return {
    authData,
    loginAttributes,
    errors,
    handleInputChange,
    handleLogin,
    userLength,
    hasChanges,
    buttonLoading,
  };
};
