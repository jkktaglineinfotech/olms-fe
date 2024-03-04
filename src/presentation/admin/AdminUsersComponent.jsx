import React from "react";
import { userContainer } from "../../container/users.container";
import DataTable from "../../shared/DataTable";
import Loader from "../layout/Loader";
import { addUserForm, editUserForm } from "../../description/user.description";
import CommonButton from "../../shared/CommonButton";
import AdminLayoutContainer from "../layout/AdminLayoutContainer";
import CommonForm from "../../shared/CommonForm";
import CommonModal from "../../shared/CommonModal";

const AdminUsersComponent = () => {
  const {
    finalUserData,
    handleAction,
    handleClose,
    userData,
    openUserModal,
    handleFormSubmit,
    handleShowAdd,
    hasChanges,
    modalMode,
    handleOnChange,
    errors,
    buttonLoading,
  } = userContainer();

  return (
    <AdminLayoutContainer>
      <div className="d-flex flex-column justify-content-end align-items-end mb-3">
        <CommonButton
          disabled={false}
          onClick={handleShowAdd}
          value="Add User"
          className="btn btn-primary"
          type={"submit"}
        />
      </div>
      {modalMode && (
        <CommonModal
          modalProps={{
            title: modalMode === "Add" ? "Add New User" : "Edit New User",
            showModal: openUserModal,
            handleClose: handleClose,
          }}
        >
          <CommonForm
            formAttributes={modalMode === "Add" ? addUserForm : editUserForm}
            formData={userData}
            onChange={handleOnChange}
            onSubmit={handleFormSubmit}
            buttonText={modalMode === "Add" ? "Add User" : "Update User"}
            errors={errors}
            disabled={!hasChanges}
            buttonLoading={buttonLoading}
          />
        </CommonModal>
      )}
      {finalUserData?.length > 0 && (
        <DataTable
          data={finalUserData}
          onAction={handleAction}
          hasActions={true}
        />
      )}
    </AdminLayoutContainer>
  );
};

export default AdminUsersComponent;
