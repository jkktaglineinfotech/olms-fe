import {
  convertFirstLetterToLowerCase,
  length,
  trimmedVal,
} from "../utils/javaScript";

const notEmpty = (val) => {
  const regex = /[^\s]$/;
  // return val ? !regex.test(trimmedVal(val)) : true;
  return val ? !regex.test(val) : true;
};

const nameValidation = (val) => {
  const regex = /^[a-zA-z]+( [a-zA-z]+){0,}$/;
  return regex.test(trimmedVal(val));
};

const validName = (val) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(val);
};
export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email?.toLowerCase());
};

export const mobileValidation = (val) => {
  // const regex = /^\+[1-9]{1}[0-9]{3,14}$/;
  const regex = /^[0-9]{10}$/;

  return regex.test(val);
};

const confirmPassword = (confirmPass = "", pass = "") => {
  return confirmPass === pass ? false : "Password not matched";
};

const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#^!%*?&])[A-Za-z\d@$#^!%*?&]{8,16}$/;
  return regex.test(password);
};

export const checkValid = ({
  validateAs,
  value,
  isRequired,
  errorMessage,
  validationMeesage,
}) => {
  let error;
  let message;

  switch (validateAs) {
    case "required":
      error = notEmpty(value);
      message = "";
      break;
    case "name":
      isRequired && !value
        ? ((error = notEmpty(value)), (message = validationMeesage))
        : isRequired && value
        ? ((error = !nameValidation(value)), (message = errorMessage))
        : true;
      break;
    case "email":
      isRequired && !value
        ? ((error = notEmpty(value)), (message = validationMeesage))
        : isRequired && value
        ? ((error = !emailValidation(value)), (message = errorMessage))
        : true;
      break;
    case "mobile":
      isRequired && !value
        ? ((error = notEmpty(value)), (message = validationMeesage))
        : isRequired && value
        ? ((error = !mobileValidation(value)), (message = errorMessage))
        : true;
      // error = value ? !mobileValidation(value) : false;
      break;
    case "email_mobile":
      error = !(emailValidation(value) || mobileValidation(value));
      break;
    case "password":
      isRequired && !value
        ? ((error = notEmpty(value)), (message = validationMeesage))
        : isRequired && value
        ? ((error = !validatePassword(value)), (message = errorMessage))
        : true;
      break;
    case "loginPassword":
      isRequired && !value
        ? ((error = notEmpty(value)), (message = validationMeesage))
        : isRequired && value
        ? ((error = notEmpty(value)), (message = errorMessage))
        : true;
      break;
    default:
      return false;
  }
  return { error, message };
};
