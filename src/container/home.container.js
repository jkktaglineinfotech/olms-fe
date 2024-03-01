import { useEffect, useState } from "react";
import { getBooks } from "../api/books";

export const homeContainer = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    const data = await getBooks();
    setLoading(false);
    setBooksData(data?.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    loading,
    finalBooksData: booksData,
  };
};
