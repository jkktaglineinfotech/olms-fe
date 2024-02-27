import { transactionEndpoints } from "../utils/apiEndPoints";
import { catchError } from "../utils/errorHandler";
import client from "./baseClient";

export const getTransactions = async () => {
  try {
    const { data } = await client.get(transactionEndpoints.getTransactions);
    return data;
  } catch (error) {
    catchError(error);
  }
};
