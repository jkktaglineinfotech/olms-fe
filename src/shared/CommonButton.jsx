import React from "react";
import { Spinner } from "react-bootstrap";

const CommonButton = ({ onClick, value, loading, disabled, ...rest }) => {
  return (
    <button onClick={onClick} disabled={loading || disabled} {...rest}>
      {loading ? (
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "2px" }}
        >
          <Spinner
            animation="border"
            size="sm"
            role="status"
            style={{ width: "1.25em", height: "1.25em" }}
          />
          {value}
        </div>
      ) : (
        value
      )}
    </button>
  );
};

export default CommonButton;
