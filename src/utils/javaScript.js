export const length = (array) => array?.length || 0;

export const trimmedVal = (val) => val?.trim()?.replace(/\s+/g, " ");

export const equal = (obj1, obj2 = 0) => obj1 === obj2;

export const typeOf = (val, type) => equal(typeof val, type);

export const isBool = (value) => typeOf(value, "boolean");

export const isString = (value) => typeOf(value, "string");

export const convertFirstLetterToLowerCase = (str) => {
  const words = str?.split(" ");
  const [firstWord, ...wordsToBeConverted] = words;
  const convertedWords = wordsToBeConverted.map((word) => word?.toLowerCase());

  return [firstWord, ...convertedWords]?.join(" ");
};

export const trimObjectValues = (obj) => {
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "string") {
          obj[key] = obj[key].trim();
        } else if (typeof obj[key] === "object") {
          // Recursively trim values if the property is an object
          trimObjectValues(obj[key]);
        }
      }
    }
  }
  return obj;
};
