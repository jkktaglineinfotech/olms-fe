import { issueBook } from "../api/books";
import { calculateDueDate } from "../utils/commonFunctions";

export const bookCardContainer = () => {
  const handleIusse = (bookId) => {
    console.log(bookId);
    const dueDate = calculateDueDate();
    console.log(dueDate);
    issueNewBook(bookId, dueDate);
  };

  const issueNewBook = async (bookId, dueDate) => {
    const data = await issueBook(bookId, dueDate);
    console.log(data);
  };
  return {
    handleIusse,
  };
};
