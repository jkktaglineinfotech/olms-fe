import React from "react";
import { userContainer } from "../../container/users.container";
import DataTable from "../../shared/DataTable";
import Loader from "../layout/Loader";
import CommonEditForm from "../../shared/CommonEditForm";
import { editUser } from "../../api/users";
import { editUserForm } from "../../description/user.description";

const AdminUsersComponent = () => {
  const {
    loading,
    finalUserData,
    handleAction,
    handleClose,
    handleOnEditChange,
    selectedData,
    openEditModal,
    editUserData,
    handleFormSubmit,
  } = userContainer();

  return (
    <>
      <Loader visible={loading} />
      <CommonEditForm
        formAttributes={editUserForm}
        showModal={openEditModal}
        formData={editUserData}
        handleClose={handleClose}
        onSubmit={handleFormSubmit}
        initialValues={selectedData}
        onChange={handleOnEditChange}
        buttonText={"Update User"}
      />
      {finalUserData.length && (
        <DataTable
          data={finalUserData}
          onAction={handleAction}
          hasActions={true}
          loading={loading}
        />
      )}
    </>
  );
};

export default AdminUsersComponent;
