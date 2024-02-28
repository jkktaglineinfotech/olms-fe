import { useEffect, useState } from "react";
import { getTransactions } from "../api/transctions";
import { formatTransactionData } from "../utils/commonFunctions";

export const transactionsContainer = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    setLoading(true);
    const data = await getTransactions();
    setLoading(false);
    console.log(data.data);
    setTransactionsData(data?.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const finalTransactionsData = transactionsData.map((data) =>
    formatTransactionData(data)
  );
  console.log(finalTransactionsData);
  return { loading, finalTransactionsData };
};
