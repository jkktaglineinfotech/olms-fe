import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import { formatBookData } from "../utils/commonFunctions";

export const homeContainer = () => {
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

  return {
    loading,
    finalBooksData: booksData,
  };
};