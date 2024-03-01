import { authApiEndpoints } from "../utils/apiEndPoints";
import { catchError } from "../utils/errorHandler";
import client from "./baseClient";

export const signIn = async (authInfo) => {
  try {
    const { data } = await client.post(
      authApiEndpoints.signInUserAdmin,
      authInfo
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};
