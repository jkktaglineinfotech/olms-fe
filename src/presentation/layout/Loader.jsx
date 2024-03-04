import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const Loader = ({ visible = false }) => {
  const isLoading = useSelector((state) => state?.loading?.isLoading);

  if (!isLoading) return null;

  return (
    <>
      {isLoading && (
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
      )}
    </>
  );
};

export default Loader;
