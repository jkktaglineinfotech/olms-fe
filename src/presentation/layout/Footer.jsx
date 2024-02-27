import React from "react";
import { projectName } from "../../description/project.description";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} {projectName}
      </div>
    </footer>
  );
};

export default Footer;
