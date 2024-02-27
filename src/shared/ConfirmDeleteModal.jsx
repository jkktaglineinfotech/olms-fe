import React from "react";
import Swal from "sweetalert2";

const ConfirmDeleteButton = ({
  visible,
  onDelete,
  buttonText = "Delete",
  ...props
}) => {
  const confirmDelete = () => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: confirmButtonText,
    }).then(({ value }) => {
      return value;
    });
  };

  if (!visible) return null;
  return (
    <button className="btn btn-danger" onClick={confirmDelete} {...props}>
      {buttonText}
    </button>
  );
};

export default ConfirmDeleteButton;
