import { useEffect, useState } from "react";
import { createUser, deleteUser, editUser, getUsers } from "../api/users";
import {
  addUserForm,
  defaultUserData,
  editUserForm,
} from "../description/user.description";
import {
  confirmDelete,
  formatUserData,
  showSuccessMessage,
} from "../utils/commonFunctions";
import {
  validateCreateUserInfo,
  validateEditUserInfo,
} from "../utils/validations";
import { toast } from "react-toastify";
import { checkValid } from "../utils/commonValidations";

export const userContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleShow = () => setOpenEditModal(true);
  const handleClose = () => setOpenEditModal(false);

  const handleShowAdd = () => {
    setModalMode("Add");
    setUserData({});
    setOpenAddModal(true);
  };
  const handleCloseAdd = () => setOpenAddModal(false);

  const [userData, setUserData] = useState({
    ...defaultUserData,
  });

  const [modalMode, setModalMode] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setLoading(false);
    console.log(data.data);
    setUsersData(data?.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const finalUserData = usersData.map((data) => formatUserData(data));
  console.log(finalUserData);

  const [selectedData, setSelectedData] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleOnChange = (e) => {
    console.log(e);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAction = async (row, option) => {
    console.log(`${option} clicked for row:`, row);
    setSelectedData(row);
    if (option === "Edit") {
      setModalMode("Edit");
      setUserData({
        ...userData,
        name: row.Name,
        userName: row.UserName,
        email: row.Email,
        // password: row.Password,
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
    const errorObj = {};
    const error = editUserForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: userInfo[item.name],
        }))
    );
    setErrors(errorObj);
    console.log(errorObj);
    if (Object.values(errorObj).some((val) => val)) return;
    setLoading(true);
    const data = await editUser(selectedData.id, userInfo);
    if (!data) {
      setLoading(false);
      setOpenEditModal(false);
      return;
    }
    const updatedUsers = usersData.map((user) =>
      user._id === selectedData?.id ? data?.data : user
    );

    console.log(updatedUsers);
    setUsersData([...updatedUsers]);
    setSelectedData(null);
    setLoading(false);
    setOpenEditModal(false);
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
    console.log(userInfo);
    const errorObj = {};
    const error = addUserForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: userInfo[item.name],
        }))
    );
    setErrors(errorObj);
    console.log(errorObj);
    if (Object.values(errorObj).some((val) => val)) return;
    // const { error, ok } = validateCreateUserInfo(userInfo);
    // if (!ok) {
    //   toast.error(error);
    //   return;
    // }
    setLoading(true);

    const data = await createUser(userInfo);
    if (!data) {
      setLoading(false);
      //handleCloseAdd();
      return;
    }
    setUsersData([data.data, ...usersData]);
    setLoading(false);
    setUserData({ ...defaultUserData });
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
    openEditModal,
    handleFormSubmit,
    handleShowAdd,
    handleCloseAdd,
    openAddModal,
    userData,
    modalMode,
    handleOnChange,
    errors,
  };
};
