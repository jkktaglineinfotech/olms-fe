import React from "react";
import Book from "./Book";
import { userBookSectionTitle } from "../../../description/book.description";

const BookList = ({ data }) => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">{userBookSectionTitle}</h1>
      <div className="row">
        {data.map((book) => (
          <div key={book._id} className="col-md-6">
            <Book {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
