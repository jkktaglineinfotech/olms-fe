import { useEffect, useState } from "react";
import { getTransactions } from "../api/transctions";

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

const formatTransactionData = (data) => {
  return {
    Book: data.book.name,
    Author: data.book.author,
    Transaction: data.transactionType,
    Name: data.user.name,
    Email: data.user.email,
    Due: data?.dueDate.slice(0, 10),
  };
};
