import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import {
  startLoading,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";
import { useDispatch } from "react-redux";

export const homeContainer = () => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchBooks = async () => {
    // setLoading(true);
    dispatch(startLoading());
    const data = await getBooks();
    dispatch(stopLoadingSuccess());
    // setLoading(false);
    setBooksData(data?.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    finalBooksData: booksData,
  };
};
