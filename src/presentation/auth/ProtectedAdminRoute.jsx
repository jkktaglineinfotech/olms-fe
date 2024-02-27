import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const role = useSelector((state) => state?.userRegisterLogin?.userInfo?.role);
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const navigate = useNavigate();
  if (!role) return navigate("/login");
  return <div>{role === "ADMIN" ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default ProtectedAdminRoute;
