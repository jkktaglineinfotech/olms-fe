import React from "react";
import { projectName } from "../../description/project.description";
import {
  adminUser,
  loginUser,
  newUser,
} from "../../description/header.description";
import { useDispatch, useSelector } from "react-redux";
import { userLength } from "../../utils/commonFunctions";
import { logout } from "../../redux/actions/authAction";
import CommonButton from "../../shared/CommonButton";
import { NavLink } from "react-router-dom";
import CommonHeadingText from "../../shared/CommonHeadingText";

const Header = () => {
  const userData = useSelector((state) => state?.userRegisterLogin?.userInfo);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <CommonHeadingText className="navbar-brand" value={projectName} />
        <HeaderItems
          handleLogout={handleLogout}
          items={
            !userLength(userData)
              ? newUser
              : userData.role === "ADMIN"
              ? adminUser
              : loginUser
          }
        />
      </div>
    </nav>
  );
};

export default Header;

const HeaderItems = ({ items, handleLogout }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      {items.map((item, index) => (
        <ul className="navbar-nav d-flex flex-column mx-2" key={index}>
          {item.name !== "Logout" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={item.route}
                activeclassname="active"
              >
                {item.name}
              </NavLink>
            </li>
          ) : (
            <CommonButton
              onClick={handleLogout}
              value="Logout"
              className="btn btn-dark"
              type={"submit"}
            />
          )}
        </ul>
      ))}
    </div>
  );
};
