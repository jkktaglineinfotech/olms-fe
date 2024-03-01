import React, { useEffect } from "react";
import UserBooksComponent from "../books/UserBooksComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLength } from "../../utils/commonFunctions";

const Home = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLength(userData) < 1) {
      setTimeout(() => {
        navigate("/login");
      }, 0);
    }
  }, [navigate, userData]);
  return (
    <>
      <UserBooksComponent />
    </>
  );
};

export default Home;
