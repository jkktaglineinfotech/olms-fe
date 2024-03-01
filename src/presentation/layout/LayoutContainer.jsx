import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 150px)" }}>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutContainer;
