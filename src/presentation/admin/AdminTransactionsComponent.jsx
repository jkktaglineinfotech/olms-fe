import React from "react";
import DataTable from "../../shared/DataTable";
import { transactionsContainer } from "../../container/transactions.container";
import Loader from "../layout/Loader";

const AdminTransactionsComponent = () => {
  const { loading, finalTransactionsData } = transactionsContainer();

  return (
    <>
      <Loader visible={loading} />
      {finalTransactionsData.length && (
        <DataTable data={finalTransactionsData} loading={loading} />
      )}
    </>
  );
};

export default AdminTransactionsComponent;
