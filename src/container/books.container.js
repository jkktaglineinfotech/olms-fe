import { useEffect, useState } from "react";
import { deleteBook, getBooks, updateBook } from "../api/books";
import { bookActions } from "../description/book.description";
import { confirmDelete, showSuccessMessage } from "../utils/commonFunctions";

export const bookContainer = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchBooks = async () => {
    setLoading(true);
    const data = await getBooks();
    setLoading(false);
    console.log(data.data);
    setBooksData(data?.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  let finalBooksData = booksData?.map((data) => formatBookData(data));

  const [openEditModal, setOpenEditModal] = useState(false);

  const [selectedData, setSelectedData] = useState(null);
  const [bookData, setBookData] = useState({
    author: "",
    name: "",
  });
  const handleShow = () => setOpenEditModal(true);
  const handleClose = () => setOpenEditModal(false);

  const handleAction = async (row, option) => {
    console.log(`${option} clicked for row:`, row);
    setSelectedData(row);
    if (option === "Edit") {
      setBookData({
        ...bookData,
        author: row.Author,
        name: row.Name,
      });
      handleShow();
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
    }
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
  const handleFormSubmit = async (bookData) => {
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
    setLoading(false);
    await showSuccessMessage({
      title: "Updated",
      text: "Book details updated successfully !",
    });
  };

  const handleOnEditChange = (e) => {
    console.log(e);
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   finalBooksData = booksData?.map((data) => formatBookData(data));
  // }, [booksData]);

  return {
    loading,
    finalBooksData,
    handleOnEditChange,
    handleFormSubmit,
    bookData,
    setBookData,
    handleAction,
    handleClose,
    openEditModal,
    selectedData,
  };
};

const formatBookData = (data) => {
  return {
    Name: data.name,
    Author: data.author,
    id: data._id,
    CurrentAvailability: data.currentAvailability
      ? "Available"
      : "Not Available",
    UpdatedAt: data?.updatedAt?.slice(0, 10),
    CreatedAt: data?.createdAt?.slice(0, 10),
    Actions: bookActions,
  };
};
