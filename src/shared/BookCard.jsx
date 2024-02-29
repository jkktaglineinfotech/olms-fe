import React from "react";
import CommonButton from "./CommonButton";
import { bookCardContainer } from "../container/bookCard.container";

const BookCard = ({ name, author, currentAvailability }) => {
  const { handleIusse } = bookCardContainer();
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Book : {name}</h5>
        <p className="card-text">Author: {author}</p>
        <p
          className={`card-text ${
            currentAvailability ? "text-success" : "text-danger"
          }`}
        >
          {currentAvailability ? "Available" : "Not Available"}
        </p>
        {/*currentAvailability && (
          <CommonButton
            onClick={() => handleIusse(_id)}
            className="btn btn-primary"
            value="Issue"
            type={"button"}
          />
        )*/}
      </div>
    </div>
  );
};

export default BookCard;
