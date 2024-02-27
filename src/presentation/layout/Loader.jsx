import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 9999,
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
