export const booksData = [
  {
    _id: "65d46f70e7193f9d2d6799c9",
    name: "Shivbacha Chhava DDs",
    author: "Ambika Author",
    currentAvailability: false,
    createdAt: "2024-02-20T09:22:56.786Z",
    updatedAt: "2024-02-21T13:10:24.258Z",
  },
  {
    _id: "6585aaff8cea534679e126b7",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    currentAvailability: false,
    createdAt: "2023-12-22T15:27:59.430Z",
    updatedAt: "2024-02-20T09:27:29.169Z",
  },
];

export const bookActions = ["Edit", "Delete"];

export const bookActionsIssue = ["Edit", "Delete", "Issue"];

export const bookActionsReturn = ["Edit", "Delete", "Return"];

export const commonBookForm = [
  {
    id: 1,
    control: "input",
    label: "Book Name",
    type: "text",
    name: "name",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid book name",
  },
  {
    id: 2,
    control: "input",
    label: "Author",
    type: "text",
    name: "author",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid author name",
  },
];

export const userBookSectionTitle = "Featured Books";

export const defaultBookData = {
  author: "",
  name: "",
};
