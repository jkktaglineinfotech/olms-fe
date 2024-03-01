import React from "react";
import CommonLabel from "./CommonLabel";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";
import CommonErrorMessageBox from "./CommonErrorMessageBox";
import { checkIsError } from "../utils/commonFunctions";

const CommonForm = ({
  onSubmit,
  initialValues,
  formData,
  formAttributes,
  className = "",
  onChange,
  buttonText = "Add",
  errors,
  disabled,
  buttonLoading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      {formAttributes?.map(
        (
          {
            name,
            validateAs,
            isRequired,
            value,
            validationMeesage,
            errorMessage,
            ...rest
          },
          index
        ) => (
          <div className="mb-3 row" key={index}>
            <CommonLabel
              className="form-label"
              isRequired={isRequired}
              {...rest}
            />
            <div className="">
              <CommonInput
                {...{
                  name,
                  value: formData[name],
                  required: isRequired,
                  onChange,
                  ...rest,
                }}
              />
              {errors[name]?.error && (
                <CommonErrorMessageBox
                  message={errors[name].message}
                  variant="danger"
                  className="mt-1 p-2 small"
                />
              )}
            </div>
          </div>
        )
      )}

      <div>
        <CommonButton
          disabled={disabled}
          loading={buttonLoading}
          onClick={handleSubmit}
          value={buttonText}
          className="btn btn-primary"
          type={"submit"}
        />
      </div>
    </div>
  );
};

export default CommonForm;

/**
 *       {...{
                  name,
                  value: formData[name],
                  required: isRequired,
                  ...rest,
                }}
 */
