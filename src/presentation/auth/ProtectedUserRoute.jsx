import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userLength } from "../../utils/commonFunctions";

const ProtectedUserRoute = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const navigate = useNavigate();
  if (!userLength(userData)) return navigate("/login");
  return (
    <div>
      {userLength(userData) && userData.role !== "ADMIN" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default ProtectedUserRoute;
