import React, { useEffect } from "react";
import { logout } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  }, []);

  return null;
};

export default Logout;
