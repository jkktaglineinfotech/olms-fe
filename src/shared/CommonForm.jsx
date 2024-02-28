import React from "react";
import CommonLabel from "./CommonLabel";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";
import CommonModal from "./CommonModal";
import CommonErrorMessageBox from "./CommonErrorMessageBox";

const CommonForm = ({
  modalProps,
  onSubmit,
  initialValues,
  formData,
  formAttributes,
  className = "",
  onChange,
  buttonText = "Add",
  errors,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  console.log(formData);
  return (
    <CommonModal {...modalProps}>
      <div className="mx-auto" style={{ maxWidth: "400px" }}>
        {formAttributes.map((item, index) => (
          <div className="mb-3 row" key={index}>
            <CommonLabel value={item.label} className="form-label" />
            <div className="">
              <CommonInput
                type={item.type}
                name={item.name}
                value={formData[item.name]}
                onChange={onChange}
                required={item.isRequired}
              />
              {errors[item.name] && (
                <CommonErrorMessageBox
                  message={item.errorMessage}
                  variant="danger"
                  className="mt-1 small"
                />
              )}
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
    </CommonModal>
  );
};

export default CommonForm;
