// import { showToast } from "./toastService";

export const equal = (obj1, obj2 = 0) => obj1 === obj2;

export const length = (array) => array?.length || 0;

export const upperCase = (value) => value?.toUpperCase();

export const lowerCase = (value) => value?.toLowerCase();

export const typeOf = (val, type) => equal(typeof val, type);

export const isBool = (value) => typeOf(value, "boolean");

export const entries = (obj) => (obj ? Object.entries(obj) : []);

export const values = (object) => (object ? Object.values(object) : []);

export const keys = (object) => (object ? Object.keys(object) : []);

export const isArray = (obj) => Array.isArray(obj);

export const checkVal = (val) => val ?? "";

export const checkUndefined = (obj) => obj === undefined;

export const notNull = (value) => !equal(value, null);

export const gt = (param1, param2 = 0) => param1 > param2;

export const lt = (param1, param2 = 0) => param1 < param2;

export const gte = (param1, param2 = 0) => param1 >= param2;

export const lte = (param1, param2 = 0) => param1 <= param2;

export const includes = (str1, str2) => str1?.includes(str2);

export const charAt = (str, index) => str.charAt(index);

export const replace = (string, from = " ", to = "-") =>
  string?.replaceAll(from, to);

export const findPer = (itemScore, totalScore) =>
  (itemScore / totalScore) * 100;

export const getInt = (value, method) => Math[method](value);

export const copyToClipboard = (toBeCopied) => {
  navigator.clipboard.writeText(toBeCopied);
  showToast("Copied to clipboard", "success");
};

export const trimmedVal = (val) => val?.trim()?.replace(/\s+/g, " ");

export const convertFirstLetterToLowerCase = (str) => {
  const words = str?.split(" ");
  const [firstWord, ...wordsToBeConverted] = words;
  const convertedWords = wordsToBeConverted.map((word) => word?.toLowerCase());

  return [firstWord, ...convertedWords]?.join(" ");
};

export const getBase64 = (str) => `data:image/jpg;base64,${str}`;
