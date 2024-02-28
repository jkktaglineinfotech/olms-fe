import React from "react";
import { Modal } from "react-bootstrap";

const CommonModal = ({ showModal, handleClose, title, children }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default CommonModal;
