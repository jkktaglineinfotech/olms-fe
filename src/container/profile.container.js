import { useState } from "react";
import { useSelector } from "react-redux";
import { validateEditUserInfo } from "../utils/validations";
import { toast } from "react-toastify";
import { editUser } from "../api/users";

export const profileContainer = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);

  const [profileData, setProfileData] = useState({
    name: userData?.name || "",
    email: userData.email || "",
    userName: userData.userName || "",
    contact: userData.contact || "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateUserInfo = async () => {
    console.log(profileData);
    const { ok, error } = validateEditUserInfo(profileData);
    if (!ok) {
      return toast.error(error);
    }
    console.log("success", profileData);
  };

  return {
    loading,
    userData,
    profileData,
    handleInputChange,
    handleUpdateUserInfo,
  };
};
