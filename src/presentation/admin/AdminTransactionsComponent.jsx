import React from "react";
import DataTable from "../../shared/DataTable";
import { transactionsContainer } from "../../container/transactions.container";
import Loader from "../layout/Loader";
import AdminLayoutContainer from "../layout/AdminLayoutContainer";

const AdminTransactionsComponent = () => {
  const { finalTransactionsData } = transactionsContainer();

  return (
    <AdminLayoutContainer>
      {finalTransactionsData?.length > 0 && (
        <DataTable data={finalTransactionsData} hasActions={false} />
      )}
    </AdminLayoutContainer>
  );
};

export default AdminTransactionsComponent;
