import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userLength } from "../../utils/commonFunctions";

const ProtectedAdminRoute = () => {
  const role = useSelector((state) => state?.userRegisterLogin?.userInfo?.role);
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!role || userLength(userData) < 1) return navigate("/login");
  // }, []);
  useEffect(() => {
    if (!role || userLength(userData) < 1) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }, [navigate, role, userData]);
  return <div>{role === "ADMIN" ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedAdminRoute;
