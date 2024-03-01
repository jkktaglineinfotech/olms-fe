import React from "react";
import Book from "./Book";
import { userBookSectionTitle } from "../../../description/book.description";
import CommonHeadingText from "../../../shared/CommonHeadingText";

const BookList = ({ data }) => {
  return (
    <div className="container mt-5">
      <CommonHeadingText className="mb-4" value={userBookSectionTitle} />
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
