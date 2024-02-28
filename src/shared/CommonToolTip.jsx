import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

const CommonToolTip = ({ message, children }) => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="info-icon-tooltip">{message}</Tooltip>}
    >
      <>
        <InfoCircle size={20} />
        {children}
      </>
    </OverlayTrigger>
  );
};

export default CommonToolTip;
