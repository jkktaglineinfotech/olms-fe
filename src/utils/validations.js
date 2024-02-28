export const isValidEmail = (email) => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return isValid.test(email);
};

export const isValidContact = (contact) => {
  const isValid = /^[0-9]{10}$/;

  return isValid.test(contact);
};

export const isValidPassword = (password) => {
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  return isValid.test(password);
};

export const validateCreateUserInfo = ({
  email,
  userName,
  password,
  name,
  contact,
}) => {
  if (!name.trim()) return { ok: false, error: "Name is missing !" };
  if (name.length < 2)
    return { ok: false, error: "Name must be 2 characters long !" };

  if (!email) return { ok: false, error: "Email is missing !" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email !" };

  if (!password) return { ok: false, error: "Password is missing !" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long !" };
  if (!isValidPassword(password)) {
    return {
      ok: false,
      error:
        "Password Must contain one Uppercase,one Lowercase,one Digit and one Special Character !",
    };
  }

  if (!userName) return { ok: false, error: "User Name is missing !" };
  if (userName.length < 2)
    return { ok: false, error: "User Name must be 2 characters long !" };

  if (!contact) return { ok: false, error: "Contact is missing !" };
  if (!isValidContact(contact))
    return { ok: false, error: "Contact must be valid 10 digit number !" };
  return { ok: true };
};

export const validateLoginInfo = ({ email, password }) => {
  if (!email) return { ok: false, error: "Email is missing !" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email !" };

  if (!password) return { ok: false, error: "Password is missing !" };

  return { ok: true };
};

export const validateEditUserInfo = ({ email, userName, name, contact }) => {
  if (!name) return { ok: false, error: "Name is missing !" };
  if (name.length < 2)
    return { ok: false, error: "Name must be 2 characters long !" };

  if (!email) return { ok: false, error: "Email is missing !" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email !" };

  if (!userName) return { ok: false, error: "User Name is missing !" };
  if (userName.length < 2)
    return { ok: false, error: "User Name must be 2 characters long !" };

  if (!contact) return { ok: false, error: "Contact is missing !" };
  if (!isValidContact(contact))
    return { ok: false, error: "Contact must be valid 10 digit number !" };
  return { ok: true };
};

export const validateBookDetails = ({ author, name }) => {
  if (!name) return { ok: false, error: "Book is missing !" };
  if (name.length < 2)
    return { ok: false, error: "Book Name must be 2 characters long !" };

  if (!author) return { ok: false, error: "author is missing !" };
  if (author.length < 2)
    return { ok: false, error: "Author Name must be 2 characters long !" };

  return { ok: true };
};
