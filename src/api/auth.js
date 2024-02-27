// import { api } from "./baseAxios";

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

// export const signIn = async ({
//   userInfo,
//   showToastMessage,
//   setUserSession,
//   endPoint,
//   ...rest
// }) => {
//   const data = await api({
//     method: "POST",
//     endPoint,
//     data: {
//       ...userInfo,
//     },
//     urlencoded: false,
//     ...rest,
//   });
//   if (data?.message == "Login Successful") {
//     localStorage.setItem("accessToken", data?.data?.accessToken);
//     dispatch({ type: LOGIN_USER, payload: data?.data });
//   }
//   return data;
// };
