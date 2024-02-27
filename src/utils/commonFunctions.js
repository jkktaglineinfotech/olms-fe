import Swal from "sweetalert2";

export const userLength = (data) => Object.keys(data).length;

export const confirmDelete = ({ title, text, ...rest }) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      ...rest,
    }).then(({ value }) => {
      resolve(value);
    });
  });
};

export const showSuccessMessage = ({ title, text, ...rest }) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
      ...rest,
    }).then(() => {
      resolve();
    });
  });
};
