import React from "react";
import Book from "./Book";
import { booksData } from "../../../description/book.description";

const BookList = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Featured Books</h1>
      <div className="row">
        {booksData.map((book) => (
          <div key={book._id} className="col-md-6">
            <Book {...book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
