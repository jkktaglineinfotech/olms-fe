import React from "react";

const BookCard = ({ name, author, currentAvailability }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Author: {author}</p>
        <p
          className={`card-text ${
            currentAvailability ? "text-success" : "text-danger"
          }`}
        >
          {currentAvailability ? "Available" : "Not Available"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
