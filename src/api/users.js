import { usersApiEndpoints } from "../utils/apiEndPoints";
import { catchError } from "../utils/errorHandler";
import client from "./baseClient";

export const getUsers = async () => {
  try {
    const { data } = await client.get(usersApiEndpoints.getUser);
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await client.delete(
      `${usersApiEndpoints.deleteUser}/${userId}`
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const editUser = async (userId, userInfo) => {
  try {
    const { data } = await client.put(
      `${usersApiEndpoints.editUser}/${userId}`,
      { updateUser: userInfo }
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const createUser = async (userInfo) => {
  try {
    const { data } = await client.post(usersApiEndpoints.createUser, userInfo);
    return data;
  } catch (error) {
    catchError(error);
  }
};
