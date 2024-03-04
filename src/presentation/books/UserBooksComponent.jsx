import React from "react";
import BookList from "./components/BookList";
import { homeContainer } from "../../container/home.container";

const UserBooksComponent = () => {
  const { finalBooksData } = homeContainer();

  return (
    <div>
      <BookList data={finalBooksData} />
    </div>
  );
};

export default UserBooksComponent;
