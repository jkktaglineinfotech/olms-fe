import React, { useState } from "react";
import DataTable from "../../shared/DataTable";
import { bookContainer } from "../../container/books.container";
import Loader from "../layout/Loader";
import CommonEditForm from "../../shared/CommonEditForm";
import { editBookForm } from "../../description/book.description";

const AdminBooksComponent = () => {
  const {
    loading,
    finalBooksData,
    handleOnEditChange,
    handleFormSubmit,
    bookData,
    handleAction,
    handleClose,
    openEditModal,
    selectedData,
  } = bookContainer();

  return (
    <>
      <Loader visible={loading} />
      <CommonEditForm
        formAttributes={editBookForm}
        showModal={openEditModal}
        formData={bookData}
        handleClose={handleClose}
        onSubmit={handleFormSubmit}
        initialValues={selectedData}
        onChange={handleOnEditChange}
        buttonText={"Update Book"}
      />
      {finalBooksData?.length && (
        <DataTable
          loading={loading}
          data={finalBooksData}
          onAction={handleAction}
          hasActions={true}
        />
      )}
    </>
  );
};

export default AdminBooksComponent;
