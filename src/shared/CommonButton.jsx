import React from "react";

const CommonButton = ({ onClick, value, className, type, busy = false }) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={busy}>
      {value}
    </button>
  );
};

export default CommonButton;
