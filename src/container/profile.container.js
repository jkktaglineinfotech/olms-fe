import { useState } from "react";
import { useSelector } from "react-redux";

export const profileContainer = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const [profileData, setProfileData] = useState({
    name: userData?.name || "",
    email: userData.email || "",
    userName: userData.userName || "",
    contact: userData.contact || "",
  });

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    profileData,
  };
};
