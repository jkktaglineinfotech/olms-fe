import { useEffect, useState } from "react";
import { createBook, deleteBook, getBooks, updateBook } from "../api/books";
import {
  commonBookForm,
  defaultBookData,
} from "../description/book.description";
import {
  checkIsError,
  confirmDelete,
  formatBookData,
  showSuccessMessage,
} from "../utils/commonFunctions";
import { checkValid } from "../utils/commonValidations";
import { trimObjectValues } from "../utils/javaScript";

export const bookContainer = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [modalMode, setModalMode] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    const data = await getBooks();
    setLoading(false);
    setBooksData(data?.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  let finalBooksData = booksData?.map((data) => formatBookData(data));

  const [openBookModal, setOpenBookModal] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleShowAdd = () => {
    setModalMode("Add");
    setErrors([]);
    setHasChanges(false);
    setOpenBookModal(true);
  };
  const handleCloseAdd = () => {
    setErrors([]);
    setModalMode(null);
    setOpenBookModal(false);
  };

  const [selectedData, setSelectedData] = useState(null);
  const [bookData, setBookData] = useState({
    ...defaultBookData,
  });
  const handleShow = () => {
    setErrors([]);
    setOpenBookModal(true);
  };
  const handleClose = () => {
    setBookData({ ...defaultBookData });
    setErrors([]);
    setOpenBookModal(false);
  };

  const handleAction = async (row, option) => {
    setSelectedData(row);
    if (option === "Edit") {
      setModalMode("Edit");
      setHasChanges(false);
      setBookData({
        ...bookData,
        author: row.Author,
        name: row.Name,
      });
      handleShow();
      return;
    }
    if (option === "Delete") {
      const choice = await confirmDelete({
        title: "Delete",
        text: "Are you sure, you want to delete this book",
        icon: "warning",
        confirmButtonText: "Delete",
      });
      if (!choice) return;
      handleDeleteBook(row.id);
      return;
    }
  };

  const handleDeleteBook = async (bookId) => {
    setButtonLoading(true);
    setLoading(true);
    const data = await deleteBook(bookId);
    if (!data) {
      setLoading(false);
      return;
    }
    const updatedBooks = booksData.filter((book) => book._id !== bookId);
    setBooksData([...updatedBooks]);
    setSelectedData(null);
    setButtonLoading(false);
    setLoading(false);
    await showSuccessMessage({
      title: "Deleted",
      text: "Book deleted successfully !",
    });
  };

  const handleFormSubmit = (bookData) => {
    if (modalMode === "Add") handleCreateBook(bookData);
    else handleUpdateBook(bookData);
  };

  const handleUpdateBook = async (bookData) => {
    setButtonLoading(true);
    const finalBookInfo = trimObjectValues(bookData);

    const errorObj = {};
    const error = commonBookForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: finalBookInfo[item.name],
        }))
    );
    setErrors(errorObj);

    if (checkIsError(errorObj)) {
      setButtonLoading(false);
      return;
    }
    const data = await updateBook(selectedData.id, finalBookInfo);
    if (!data) {
      setButtonLoading(false);
      return;
    }
    const updatedBooks = booksData.map((book) =>
      book._id === selectedData?.id ? data?.data : book
    );

    setBooksData([...updatedBooks]);
    setSelectedData(null);
    setErrors([]);
    handleClose();
    setButtonLoading(false);
    await showSuccessMessage({
      title: "Updated",
      text: "Book details updated successfully !",
    });
  };

  const handleOnChange = (e) => {
    setHasChanges(true);
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateBook = async (bookInfo) => {
    setButtonLoading(true);
    const finalBookInfo = trimObjectValues(bookInfo);

    const errorObj = {};
    const error = commonBookForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: finalBookInfo[item.name],
        }))
    );

    setErrors(errorObj);
    if (checkIsError(errorObj)) {
      setButtonLoading(false);
      return;
    }
    const data = await createBook(finalBookInfo);
    if (!data) {
      setButtonLoading(false);
      return;
    }
    setBooksData([data.data, ...booksData]);
    setButtonLoading(false);
    setErrors([]);

    handleCloseAdd();
    await showSuccessMessage({
      title: "Created",
      text: "Book created successfully !",
    });
  };

  const handleSearch = (searchTerm) => {
    const searchResult = booksData.filter((book) => {
      const bookName = book.name.toLowerCase();
      const bookAuthor = book.author.toLowerCase();
      return bookName.includes(searchTerm) || bookAuthor.includes(searchTerm);
    });
    setBooksData([...searchResult]);
  };

  const handleClear = () => {
    fetchBooks();
  };

  return {
    loading,
    finalBooksData,
    handleOnChange,
    handleFormSubmit,
    bookData,
    setBookData,
    handleAction,
    handleClose,
    selectedData,
    handleShowAdd,
    handleCloseAdd,
    openBookModal,
    handleSearch,
    handleClear,
    modalMode,
    errors,
    hasChanges,
    buttonLoading,
  };
};
