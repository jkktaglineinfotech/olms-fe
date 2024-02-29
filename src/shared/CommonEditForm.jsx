import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import CommonLabel from "./CommonLabel";
import CommonInput from "./CommonInput";
import CommonErrorMessageBox from "./CommonErrorMessageBox";
import CommonButton from "./CommonButton";

const CommonEditForm = ({
  showModal,
  handleClose,
  onSubmit,
  initialValues,
  formData,
  formAttributes,
  className = "",
  onChange,
  buttonText = "Update",
  title = "Edit Data",
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional validation here if needed
    onSubmit(formData);
    // handleClose();
  };

  console.log(formData);
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mx-auto" style={{ maxWidth: "400px" }}>
          {formAttributes.map((item) => (
            <div className="mb-3 row" key={item.id}>
              <CommonLabel
                label={item.label}
                //className="col-sm-4 col-form-label"
                className="form-label"
              />
              <div className="">
                <CommonInput
                  type={item.type}
                  //className="form-control"
                  name={item.name}
                  value={formData[item.name]}
                  onChange={onChange}
                  //required={item.isRequired}
                  required={item.isRequired}
                  className={`form-control ${
                    formData[item.name]?.length > 0 &&
                    formData[item.name]?.length < 6
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {/*item.isRequired && !formData[item.name]?.trim() && (
                  <CommonErrorMessageBox
                    message={item.errorMessage}
                    className="invalid-feedback"
                  />
                )*/}
              </div>
            </div>
          ))}

          <div>
            <CommonButton
              onClick={handleSubmit}
              value={buttonText}
              className="btn btn-primary"
              type={"submit"}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CommonEditForm;
