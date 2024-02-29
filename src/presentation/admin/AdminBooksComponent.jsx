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
    loading,
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
      <Loader visible={loading} />
      <div className="d-flex flex-column justify-content-end align-items-end mb-3">
        {/* <CommonSearchBox
            onSearch={handleSearch}
            onClear={handleClear}
            className="w-50 h-50"
          /> */}
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

      {/* <CommonAddForm
        title={"Add New Book"}
        formAttributes={commonBookForm}
        showModal={openAddModal}
        handleClose={handleCloseAdd}
        formData={bookData}
        onChange={handleOnChange}
        onSubmit={handleCreateBook}
        buttonText={"Add Book"}
      />
      <CommonEditForm
        title={"Edit Book Details"}
        formAttributes={commonBookForm}
        showModal={openEditModal}
        formData={bookData}
        handleClose={handleClose}
        onSubmit={handleFormSubmit}
        initialValues={selectedData}
        onChange={handleOnChange}
        buttonText={"Update Book"}
      /> */}
      {finalBooksData?.length > 0 && (
        <DataTable
          loading={loading}
          data={finalBooksData}
          onAction={handleAction}
          hasActions={true}
        />
      )}
    </AdminLayoutContainer>
  );
};

export default AdminBooksComponent;
