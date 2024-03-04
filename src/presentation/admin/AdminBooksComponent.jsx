import React from "react";
import DataTable from "../../shared/DataTable";
import { bookContainer } from "../../container/books.container";
import Loader from "../layout/Loader";
import { commonBookForm } from "../../description/book.description";
import AdminLayoutContainer from "../layout/AdminLayoutContainer";
import CommonButton from "../../shared/CommonButton";
import CommonForm from "../../shared/CommonForm";
import CommonModal from "../../shared/CommonModal";

const AdminBooksComponent = () => {
  const {
    finalBooksData,
    handleOnChange,
    handleFormSubmit,
    bookData,
    handleAction,
    handleClose,
    handleShowAdd,
    modalMode,
    errors,
    openBookModal,
    hasChanges,
    buttonLoading,
  } = bookContainer();

  return (
    <AdminLayoutContainer>
      <div className="d-flex flex-column justify-content-end align-items-end mb-3">
        <CommonButton
          disabled={false}
          onClick={handleShowAdd}
          value="Add Book"
          className="btn btn-primary"
          type={"submit"}
        />
      </div>
      {modalMode && (
        <CommonModal
          modalProps={{
            title: modalMode === "Add" ? "Add New Book" : "Edit New Book",
            showModal: openBookModal,
            handleClose: handleClose,
          }}
        >
          <CommonForm
            formAttributes={commonBookForm}
            formData={bookData}
            onChange={handleOnChange}
            onSubmit={handleFormSubmit}
            buttonText={modalMode === "Add" ? "Add Book" : "Update Book"}
            errors={errors}
            disabled={!hasChanges}
            buttonLoading={buttonLoading}
          />
        </CommonModal>
      )}

      {finalBooksData?.length > 0 && (
        <DataTable
          data={finalBooksData}
          onAction={handleAction}
          hasActions={true}
        />
      )}
    </AdminLayoutContainer>
  );
};

export default AdminBooksComponent;
