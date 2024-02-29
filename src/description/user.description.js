export const userActions = ["Edit", "Delete"];

export const editUserForm = [
  {
    id: 1,
    control: "input",
    label: "Name",
    type: "text",
    name: "name",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid name",
  },
  {
    id: 2,
    control: "input",
    label: "User Name",
    type: "text",
    name: "userName",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid User name",
  },
  {
    id: 4,
    control: "input",
    label: "Email",
    type: "email",
    name: "email",
    value: "",
    isRequired: true,
    validateAs: "email",
    errorMessage: "Please enter valid Email",
  },
  //   {
  //     id: 4,
  //     control: "input",
  //     label: "Password",
  //     type: "password",
  //     name: "password",
  //     value: "",
  //     isRequired: true,
  //     validateAs: "password",
  //     errorMessage: "Please enter valid password",
  //   },
  {
    id: 5,
    control: "input",
    label: "Contact",
    type: "tel",
    name: "contact",
    value: "",
    isRequired: true,
    validateAs: "mobile",
    errorMessage: "Please enter valid contact",
  },
];

export const addUserForm = [
  {
    id: 1,
    control: "input",
    label: "Name",
    type: "text",
    name: "name",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid name",
  },
  {
    id: 2,
    control: "input",
    label: "User Name",
    type: "text",
    name: "userName",
    value: "",
    isRequired: true,
    validateAs: "name",
    errorMessage: "Please enter valid User name",
  },
  {
    id: 4,
    control: "input",
    label: "Email",
    type: "email",
    name: "email",
    value: "",
    isRequired: true,
    validateAs: "email",
    errorMessage: "Please enter valid Email",
  },
  {
    id: 4,
    control: "input",
    label: "Password",
    type: "password",
    name: "password",
    value: "",
    isRequired: true,
    validateAs: "password",
    errorMessage:
      "Please enter valid 8 characters password with one Uppercase,one Lowercase,one Digit and one Special Character",
  },
  {
    id: 5,
    control: "input",
    label: "Contact",
    type: "tel",
    name: "contact",
    value: "",
    isRequired: true,
    validateAs: "mobile",
    errorMessage: "Please enter valid contact number.",
  },
];

export const defaultUserData = {
  name: "",
  userName: "",
  email: "",
  password: "",
  contact: "",
};

export const defaultAddUserData = {
  name: "",
  userName: "",
  email: "",
  password: "",
  contact: "",
};

export const defaultEditUserData = {
  name: "",
  userName: "",
  email: "",
  contact: "",
};

export const modalMode = {
  Edit: "Edit",
  Add: "Add",
};
