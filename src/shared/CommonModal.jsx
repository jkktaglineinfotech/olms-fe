import React from "react";
import { Modal } from "react-bootstrap";

const CommonModal = ({ modalProps, children }) => {
  const { title, showModal, handleClose } = modalProps;
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          {/* {React.cloneElement(children, { formProps: formProps })} */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CommonModal;
