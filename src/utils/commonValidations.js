import {
  convertFirstLetterToLowerCase,
  length,
  trimmedVal,
} from "../utils/javaScript";

const notEmpty = (val) => {
  const regex = /[^\s]$/;
  return val ? !regex.test(trimmedVal(val)) : true;
};

const nameValidation = (val) => {
  const regex = /^[a-zA-z]+( [a-zA-z]+){0,}$/;
  return regex.test(trimmedVal(val));
};

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email?.toLowerCase());
};

export const mobileValidation = (val) => {
  const regex = /^\+[1-9]{1}[0-9]{3,14}$/;
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

export const checkValid = ({ validateAs, value, passwordValue, label }) => {
  let error;

  switch (validateAs) {
    case "required":
      error = notEmpty(value);
      break;
    case "name":
      error = length(value)
        ? nameValidation(value)
          ? false
          : `${convertFirstLetterToLowerCase(
              label
            )} should only consist of alphabets`
        : true;
      break;
    case "email":
      error = !emailValidation(value);
      break;
    case "mobile":
      error = notEmpty(value) || value ? !mobileValidation(value) : false;
      // error = value ? !mobileValidation(value) : false;
      break;
    case "email_mobile":
      error = !(emailValidation(value) || mobileValidation(value));
      break;
    case "password":
      error = !validatePassword(value);
      break;

    default:
      return false;
  }
  return error;
};
