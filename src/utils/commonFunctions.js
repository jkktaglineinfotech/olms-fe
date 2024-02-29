import Swal from "sweetalert2";
import {
  bookActions,
  bookActionsIssue,
  bookActionsReturn,
} from "../description/book.description";
import { userActions } from "../description/user.description";

export const userLength = (data) => data && Object.keys(data).length;

export const confirmDelete = ({ title, text, ...rest }) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      ...rest,
    }).then(({ value }) => {
      resolve(value);
    });
  });
};

export const showSuccessMessage = ({ title, text, ...rest }) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
      ...rest,
    }).then(() => {
      resolve();
    });
  });
};

export const formatBookData = (data) => {
  return {
    Name: data.name,
    Author: data.author,
    id: data._id,
    CurrentAvailability: data.currentAvailability
      ? "Available"
      : "Not Available",
    UpdatedAt: data?.updatedAt?.slice(0, 10),
    CreatedAt: data?.createdAt?.slice(0, 10),
    Actions: bookActions,
    // Actions: data.currentAvailability ? bookActionsIssue : bookActionsReturn,
  };
};

export const formatUserData = (data) => {
  return {
    Name: data.name,
    Contact: data.contact,
    id: data._id,
    Email: data.email,
    // Password: data?.password || "",
    UserName: data.userName,
    Actions: userActions,
  };
};

export const calculateDueDate = (daysToAdd = 15) => {
  const currentDate = new Date();
  const issueDate = currentDate.toISOString();

  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() + daysToAdd);

  const formattedDueDate = dueDate.toISOString();

  return {
    dueDate: formattedDueDate,
  };
};

export const formatTransactionData = (data) => {
  return {
    Book: data.book.name,
    Author: data.book.author,
    Transaction: data.transactionType,
    Name: data.user.name,
    Email: data.user.email,
    Due: data?.dueDate.slice(0, 10),
  };
};

export const checkIsError = (errorObj) =>
  Object.values(errorObj).some((val) => val);
