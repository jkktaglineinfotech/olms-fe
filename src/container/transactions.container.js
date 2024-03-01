import { useEffect, useState } from "react";
import { getTransactions } from "../api/transctions";
import { formatTransactionData } from "../utils/commonFunctions";
import { getDashboardData } from "../api/books";

export const transactionsContainer = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    const data = await getTransactions();
    setLoading(false);
    setTransactionsData(data?.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const finalTransactionsData = transactionsData.map((data) =>
    formatTransactionData(data)
  );
  return { loading, finalTransactionsData };
};
