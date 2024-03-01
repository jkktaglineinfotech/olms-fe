import React from "react";

const CommonHeadingText = ({ value, ...rest }) => {
  return <h2 {...rest}>{value}</h2>;
};

export default CommonHeadingText;
