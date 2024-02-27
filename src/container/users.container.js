import { useEffect, useState } from "react";
import { deleteUser, editUser, getUsers } from "../api/users";
import { userActions } from "../description/user.description";
import { confirmDelete, showSuccessMessage } from "../utils/commonFunctions";

export const userContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleShow = () => setOpenEditModal(true);
  const handleClose = () => setOpenEditModal(false);
  const [editUserData, setEditUserData] = useState({
    name: "",
    userName: "",
    email: "",
    // password: "",
    contact: "",
  });
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

  const handleOnEditChange = (e) => {
    console.log(e);
    setEditUserData({
      ...editUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAction = async (row, option) => {
    console.log(`${option} clicked for row:`, row);
    setSelectedData(row);
    if (option === "Edit") {
      setEditUserData({
        ...editUserData,
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

  const handleFormSubmit = async (userInfo) => {
    setLoading(true);
    const data = await editUser(selectedData.id, userInfo);
    if (!data) {
      setLoading(false);
      return;
    }
    const updatedUsers = usersData.map((user) =>
      user._id === selectedData?.id ? data?.data : user
    );

    console.log(updatedUsers);
    setUsersData([...updatedUsers]);
    setSelectedData(null);
    setLoading(false);
    await showSuccessMessage({
      title: "Updated",
      text: "Book details updated successfully !",
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
    handleOnEditChange,
    selectedData,
    openEditModal,
    editUserData,
    handleFormSubmit,
  };
};

const formatUserData = (data) => {
  return {
    Name: data.name,
    Contact: data.contact,
    id: data._id,
    Email: data.email,
    // Password: data?.password || "",
    UserName: data.userName,
    Actions: userActions,
  };
};
