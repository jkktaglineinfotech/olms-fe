import { booksApiEndpoints } from "../utils/apiEndPoints";
import { catchError } from "../utils/errorHandler";
import client from "./baseClient";

export const getBooks = async () => {
  try {
    const { data } = await client.get(booksApiEndpoints.getBooksUser);
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const updateBook = async (bookId, bookData) => {
  try {
    const { data } = await client.put(
      `${booksApiEndpoints.getBooksUser}/${bookId}`,
      bookData
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const deleteBook = async (bookId, bookData) => {
  try {
    const { data } = await client.delete(
      `${booksApiEndpoints.deleteBook}/${bookId}`,
      bookData
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const createBook = async (bookData) => {
  try {
    const { data } = await client.post(booksApiEndpoints.createBook, bookData);
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const issueBook = async (bookId, dueDate) => {
  try {
    const { data } = await client.post(
      `${booksApiEndpoints.issueBook}/${bookId}`,
      dueDate
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};

export const getDashboardData = async () => {
  try {
    const { data } = await client.get(booksApiEndpoints.getBookDashboardData);
    return data;
  } catch (error) {
    catchError(error);
  }
};
