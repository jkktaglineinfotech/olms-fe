import { useEffect, useState } from "react";
import { createBook, deleteBook, getBooks, updateBook } from "../api/books";
import {
  commonBookForm,
  defaultBookData,
} from "../description/book.description";
import {
  calculateDueDate,
  confirmDelete,
  formatBookData,
  showSuccessMessage,
} from "../utils/commonFunctions";
import { checkValid } from "../utils/commonValidations";

export const bookContainer = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [modalMode, setModalMode] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    const data = await getBooks();
    setLoading(false);
    // console.log(data.data);
    setBooksData(data?.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  let finalBooksData = booksData?.map((data) => formatBookData(data));

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDropDownModal, setOpenDropDownModal] = useState(false);

  const handleShowAdd = () => {
    setModalMode("Add");
    setOpenAddModal(true);
  };
  const handleCloseAdd = () => setOpenAddModal(false);

  const handleShowDropDown = () => setOpenDropDownModal(true);
  const handleCloseDropDown = () => setOpenDropDownModal(false);

  const [selectedData, setSelectedData] = useState(null);
  const [bookData, setBookData] = useState({
    ...defaultBookData,
  });
  const handleShow = () => setOpenEditModal(true);
  const handleClose = () => {
    setBookData({ ...defaultBookData });
    setOpenEditModal(false);
  };

  const handleAction = async (row, option) => {
    console.log(`${option} clicked for row:`, row);
    setSelectedData(row);
    if (option === "Edit") {
      setModalMode("Edit");
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
    // if (option === "Issue") {
    //   console.log(row.id);
    //   const dueDate = calculateDueDate();
    //   openDropDownModal();
    //   const data = await issueBook(row.id, dueDate);
    //   console.log(data);
    // }
  };

  const handleDeleteBook = async (bookId) => {
    setLoading(true);
    const data = await deleteBook(bookId);
    if (!data) {
      setLoading(false);
      return;
    }
    const updatedBooks = booksData.filter((book) => book._id !== bookId);
    setBooksData([...updatedBooks]);
    setSelectedData(null);
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
    const errorObj = {};
    const error = commonBookForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: bookData[item.name],
        }))
    );
    setErrors(errorObj);
    console.log(errorObj);
    if (Object.values(errorObj).some((val) => val)) return;
    // const { ok, error } = validateBookDetails(bookData);
    // if (!ok) {
    //   toast.error(error);
    //   return;
    // }
    setLoading(true);
    const data = await updateBook(selectedData.id, bookData);
    console.log("Submit", data);
    if (!data) {
      setLoading(false);
      return;
    }
    const updatedBooks = booksData.map((book) =>
      book._id === selectedData?.id ? data?.data : book
    );

    console.log(updatedBooks);
    setBooksData([...updatedBooks]);
    setSelectedData(null);
    handleClose();
    setLoading(false);
    await showSuccessMessage({
      title: "Updated",
      text: "Book details updated successfully !",
    });
  };

  const handleOnChange = (e) => {
    console.log(e);
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateBook = async (bookInfo) => {
    console.log(bookInfo);
    const errorObj = {};
    const error = commonBookForm.map(
      (item) =>
        (errorObj[item.name] = checkValid({
          ...item,
          value: bookInfo[item.name],
        }))
    );
    setErrors(error);
    console.log(errorObj);

    if (Object.values(errorObj).some((val) => val)) return;
    setLoading(true);

    // const { ok, error } = validateBookDetails(bookInfo);
    // if (!ok) {
    //   toast.error(error);
    //   return;
    // }
    const data = await createBook(bookInfo);
    if (!data) {
      setLoading(false);
      return;
    }
    setBooksData([data.data, ...booksData]);
    setLoading(false);

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
    console.log("Searching for:", searchTerm, searchResult);
    setBooksData([...searchResult]);
  };

  const handleClear = () => {
    fetchBooks();
  };
  // useEffect(() => {
  //   finalBooksData = booksData?.map((data) => formatBookData(data));
  // }, [booksData]);

  return {
    loading,
    finalBooksData,
    handleOnChange,
    handleFormSubmit,
    bookData,
    setBookData,
    handleAction,
    handleClose,
    openEditModal,
    selectedData,
    handleShowAdd,
    handleCloseAdd,
    openAddModal,
    handleSearch,
    handleClear,
    handleShowDropDown,
    modalMode,
    errors,
  };
};
