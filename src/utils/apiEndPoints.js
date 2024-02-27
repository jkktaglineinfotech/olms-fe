export const authApiEndpoints = { signInUserAdmin: "auth/sign-in" };

export const booksApiEndpoints = {
  getBooksUser: "book",
  updateBook: "book",
  createBook: "book",
  deleteBook: "book",
  issueBook: "book/issus",
  returnBook: "book/return",
  getBookDashboardData: "book/dashboard",
};

export const usersApiEndpoints = {
  getUser: "user",
  createUser: "user",
  editUser: "user",
  deleteUser: "user",
};

export const transactionEndpoints = {
  getTransactions: "transaction",
};
