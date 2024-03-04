import { useEffect, useState } from "react";
import { getTransactions } from "../api/transctions";
import { formatTransactionData } from "../utils/commonFunctions";
import { getDashboardData } from "../api/books";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";

export const transactionsContainer = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchTransactions = async () => {
    dispatch(startLoading());

    // setLoading(true);
    const data = await getTransactions();
    dispatch(stopLoadingSuccess());

    // setLoading(false);
    setTransactionsData(data?.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const finalTransactionsData = transactionsData.map((data) =>
    formatTransactionData(data)
  );
  return { finalTransactionsData };
};
