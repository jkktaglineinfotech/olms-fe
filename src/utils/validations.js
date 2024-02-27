export const isValidEmail = (email) => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return isValid.test(email);
};

export const validateUserInfo = ({
  email,
  // password,
  userName,
  name,
  contact,
}) => {
  const isValid = /^[0-9]{10}$/;

  if (!name) return { ok: false, error: "Name is missing !" };
  if (name.length < 2)
    return { ok: false, error: "Name must be 2 characters long !" };

  if (!email) return { ok: false, error: "Email is missing !" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email !" };

  // if (!password) return { ok: false, error: "Password is missing !" };
  // if (password.length < 8)
  //   return { ok: false, error: "Password must be 8 characters long !" };

  if (!userName) return { ok: false, error: "User Name is missing !" };
  if (userName.length < 2)
    return { ok: false, error: "User Name must be 2 characters long !" };

  if (!contact) return { ok: false, error: "Contact is missing !" };
  if (!isValid.test(contact))
    return { ok: false, error: "Contact must be valid 10 digit number !" };
  return { ok: true };
};

export const validateLoginInfo = ({ email, password }) => {
  if (!email) return { ok: false, error: "Email is missing !" };
  if (!isValidEmail(email)) return { ok: false, error: "Invalid email !" };

  if (!password) return { ok: false, error: "Password is missing !" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long !" };

  return { ok: true };
};
