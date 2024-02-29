import React from "react";
import CommonLabel from "./CommonLabel";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";
import CommonErrorMessageBox from "./CommonErrorMessageBox";

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

  // console.log(formAttributes);
  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      {formAttributes?.map(
        (
          { name, validateAs, isRequired, value, errorMessage, ...rest },
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
                // type={item.type}
                // name={item.name}
                // value={formData[name]}
                // onChange={onChange}
                // required={item.isRequired}
              />
              {errors[name] && (
                <CommonErrorMessageBox
                  message={errorMessage}
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
