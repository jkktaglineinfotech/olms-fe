import React from "react";
import { Modal } from "react-bootstrap";
import CommonDropDown from "../../../shared/CommonDropDown";

const UserSelector = ({ showModal, handleClose, title }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommonDropDown />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserSelector;
