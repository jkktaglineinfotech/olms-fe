import React from "react";
import DataTable from "../../shared/DataTable";
import { transactionsContainer } from "../../container/transactions.container";
import Loader from "../layout/Loader";
import AdminLayoutContainer from "../layout/AdminLayoutContainer";

const AdminTransactionsComponent = () => {
  const { loading, finalTransactionsData } = transactionsContainer();

  return (
    <AdminLayoutContainer>
      <Loader visible={loading} />
      {finalTransactionsData?.length > 0 && (
        <DataTable
          data={finalTransactionsData}
          loading={loading}
          hasActions={false}
        />
      )}
    </AdminLayoutContainer>
  );
};

export default AdminTransactionsComponent;
