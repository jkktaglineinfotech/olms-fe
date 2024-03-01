import { useEffect, useState } from "react";
import { createUser, deleteUser, editUser, getUsers } from "../api/users";
import {
  addUserForm,
  defaultUserData,
  editUserForm,
} from "../description/user.description";
import {
  checkIsError,
  confirmDelete,
  formatUserData,
  showSuccessMessage,
} from "../utils/commonFunctions";

import { checkValid } from "../utils/commonValidations";
import { trimObjectValues } from "../utils/javaScript";

export const userContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleShow = () => {
    setErrors([]);
    setOpenUserModal(true);
  };
  const handleClose = () => {
    setErrors([]);
    setOpenUserModal(false);
  };

  const handleShowAdd = () => {
    setModalMode("Add");
    setUserData({});
    setHasChanges(false);
    setOpenUserModal(true);
  };
  const handleCloseAdd = () => setOpenUserModal(false);

  const [userData, setUserData] = useState({
    ...defaultUserData,
  });

  const [modalMode, setModalMode] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setLoading(false);
    setUsersData(data?.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const finalUserData = usersData.map((data) => formatUserData(data));

  const [selectedData, setSelectedData] = useState(null);

  const [openUserModal, setOpenUserModal] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleOnChange = (e) => {
    setHasChanges(true);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAction = async (row, option) => {
    setSelectedData(row);
    if (option === "Edit") {
      setModalMode("Edit");
      setHasChanges(false);
      setUserData({
        ...userData,
        name: row.Name,
        userName: row.UserName,
        email: row.Email,
        contact: row.Contact,
      });
      handleShow();
    }
    if (option === "Delete") {
      const choice = await confirmDelete({
        title: "Delete",
        text: "Are you sure, you want to delete this user ?",
        icon: "warning",
        confirmButtonText: "Delete",
      });
      if (!choice) return;
      handleDeleteUser(row.id);
    }
  };

  const handleUpdateUser = async (userInfo) => {
    setButtonLoading(true);

    const errorObj = {};
    const error = editUserForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: userInfo[item.name],
        }))
    );
    setErrors(errorObj);
    const finalUserInfo = trimObjectValues(userInfo);

    if (checkIsError(errorObj)) {
      setButtonLoading(false);
      return;
    }
    delete finalUserInfo.password;

    const data = await editUser(selectedData.id, finalUserInfo);
    if (!data) {
      setButtonLoading(false);
      setOpenUserModal(true);
      return;
    }
    const updatedUsers = usersData.map((user) =>
      user._id === selectedData?.id ? data?.data : user
    );
    setUsersData([...updatedUsers]);
    setSelectedData(null);
    setErrors([]);
    setButtonLoading(false);
    setOpenUserModal(false);
    await showSuccessMessage({
      title: "Updated",
      text: "User details updated successfully !",
    });
  };

  const handleFormSubmit = (userInfo) => {
    if (modalMode === "Add") handleCreateUser(userInfo);
    else handleUpdateUser(userInfo);
  };
  const handleCreateUser = async (userInfo) => {
    setButtonLoading(true);
    const finalUserInfo = trimObjectValues(userInfo);

    const errorObj = {};
    const error = addUserForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: finalUserInfo[item.name],
        }))
    );
    setErrors(errorObj);
    if (checkIsError(errorObj)) {
      setButtonLoading(false);
      return;
    }

    const data = await createUser(finalUserInfo);
    if (!data) {
      setButtonLoading(false);
      return;
    }
    setUsersData([data.data, ...usersData]);
    setButtonLoading(false);
    setUserData({ ...defaultUserData });
    setErrors([]);
    handleCloseAdd();
    await showSuccessMessage({
      title: "Created",
      text: "User created successfully !",
    });
  };

  const handleDeleteUser = async (userId) => {
    setLoading(true);
    const data = await deleteUser(userId);
    if (!data) {
      setLoading(false);
      return;
    }
    const updatedUsers = usersData.filter((user) => user._id !== userId);
    setUsersData([...updatedUsers]);
    setSelectedData(null);
    setLoading(false);
    await showSuccessMessage({
      title: "Deleted",
      text: "User deleted successfully !",
    });
  };
  return {
    loading,
    finalUserData,
    handleAction,
    handleClose,
    selectedData,
    openUserModal,
    handleFormSubmit,
    handleShowAdd,
    handleCloseAdd,
    userData,
    modalMode,
    handleOnChange,
    errors,
    hasChanges,
    buttonLoading,
  };
};
