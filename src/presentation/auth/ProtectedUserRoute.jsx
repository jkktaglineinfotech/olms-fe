import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userLength } from "../../utils/commonFunctions";

const ProtectedUserRoute = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);
  const role = useSelector((state) => state?.userRegisterLogin?.userInfo?.role);

  const navigate = useNavigate();

  useEffect(() => {
    if (!role || userLength(userData) < 1) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }, [navigate, role, userData]);

  if (!userLength(userData)) return null;
  return (
    <div>
      {userData.role !== "ADMIN" ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default ProtectedUserRoute;
