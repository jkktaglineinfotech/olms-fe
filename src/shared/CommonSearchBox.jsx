import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const CommonSearchBox = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.toLowerCase());
  };

  const handleClear = () => {
    onClear();
  };
  return (
    <div className="container mt-4">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline-primary" onClick={handleClear}>
          Clear
        </Button>
      </InputGroup>
    </div>
  );
};

export default CommonSearchBox;
