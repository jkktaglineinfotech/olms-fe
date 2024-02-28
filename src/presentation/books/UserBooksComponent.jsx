import React from "react";
import BookList from "./components/BookList";
import { homeContainer } from "../../container/home.container";
import Loader from "../layout/Loader";

const UserBooksComponent = () => {
  const { loading, finalBooksData } = homeContainer();

  return (
    <div>
      <Loader visible={loading} />

      <BookList data={finalBooksData} />
    </div>
  );
};

export default UserBooksComponent;
