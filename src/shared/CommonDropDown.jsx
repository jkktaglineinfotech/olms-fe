import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const CommonDropDown = ({ data, onSelect, selectedValue, placeholder }) => {
  const [selectedItem, setSelectedItem] = useState(selectedValue);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedItem ? selectedItem : placeholder || "Select"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map((item, index) => (
          <Dropdown.Item key={index} eventKey={item}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CommonDropDown;
