import React from "react";

const ToastMessageBox = ({
  showToast,
  toastVariant,
  toastMessage,
  onClose,
}) => {
  return (
    <div
      className={`position-fixed bottom-0 end-0 p-3 toast show bg-${toastVariant}`}
      style={{ zIndex: 9999 }}
    >
      <div className={`toast-header text-${toastVariant}`}>
        <strong className="me-auto">{toastVariant.toUpperCase()}</strong>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="toast-body">{toastMessage}</div>
    </div>
  );
};

export default ToastMessageBox;
