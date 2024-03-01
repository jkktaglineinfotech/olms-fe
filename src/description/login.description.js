export const loginAttributes = [
  {
    id: 1,
    control: "input",
    label: "Email",
    type: "email",
    name: "email",
    value: "",
    isRequired: true,
    validateAs: "email",
    errorMessage: "Please enter valid email",
    validationMeesage: "Email name is required",
  },
  {
    id: 2,
    control: "input",
    label: "Password",
    type: "password",
    name: "password",
    value: "",
    isRequired: true,
    validateAs: "loginPassword",
    errorMessage: "Please enter valid password",
    validationMeesage: "Password is required",
  },
];

export const defaultUserData = {
  email: "",
  password: "",
};
