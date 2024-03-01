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
    validationMeesage: "Book name is required",
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
    validationMeesage: "Author name is required",
  },
];

export const userBookSectionTitle = "Featured Books";

export const defaultBookData = {
  author: "",
  name: "",
};
