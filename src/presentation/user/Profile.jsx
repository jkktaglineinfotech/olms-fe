import React from "react";
import { profileAttributes } from "../../description/profile.description";
import { profileContainer } from "../../container/profile.container";
import CommonInput from "../../shared/CommonInput";
import CommonLabel from "../../shared/CommonLabel";
import CommonErrorMessageBox from "../../shared/CommonErrorMessageBox";
import CommonButton from "../../shared/CommonButton";

const Profile = () => {
  const {
    loading,
    userData,
    profileData,
    handleInputChange,
    handleUpdateUserInfo,
  } = profileContainer();
  console.log(userData);
  return (
    <>
      <div className="container text-center mt-5">
        <h2>My Profile</h2>
        <div className="mx-auto" style={{ maxWidth: "400px" }}>
          {profileAttributes.map((item, index) => (
            <div className="mb-3 row" key={index}>
              <CommonLabel
                value={item.label}
                //className="col-sm-4 col-form-label"
                className="form-label"
              />
              <div className="">
                <CommonInput
                  disabled={true}
                  type={item.type}
                  //className="form-control"
                  name={item.name}
                  value={profileData[item.name]}
                  onChange={handleInputChange}
                  //required={item.isRequired}
                  required={item.isRequired}
                  className={`form-control ${
                    profileData[item.name].length > 0 &&
                    profileData[item.name].length < 6
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {item.isRequired && !profileData[item.name].trim() && (
                  <CommonErrorMessageBox
                    message={item.errorMessage}
                    className="invalid-feedback"
                  />
                )}
              </div>
            </div>
          ))}

          {/* <div>
            <CommonButton
              busy={false}
              onClick={handleUpdateUserInfo}
              value="Update"
              className="btn btn-primary"
              type={"submit"}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
