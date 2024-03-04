import React from "react";
import { profileAttributes } from "../../description/profile.description";
import { profileContainer } from "../../container/profile.container";
import CommonInput from "../../shared/CommonInput";
import CommonLabel from "../../shared/CommonLabel";
import CommonHeadingText from "../../shared/CommonHeadingText";
import CommonForm from "../../shared/CommonForm";

const Profile = () => {
  const { profileData } = profileContainer();
  return (
    <>
      <div className="container text-center mt-5">
        <CommonHeadingText value={"My Profile"} />
        <div className="mx-auto" style={{ maxWidth: "400px" }}>
          {profileAttributes.map(
            (
              { name, validateAs, isRequired, errorMessage, value, ...rest },
              index
            ) => (
              <div className="mb-3 row" key={index}>
                <CommonLabel {...rest} className="form-label" />
                <div className="">
                  <CommonInput
                    {...{
                      name,
                      disabled: true,
                      value: profileData[name],
                      ...rest,
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
