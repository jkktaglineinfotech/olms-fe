import React from "react";
import AllRoutes from "./routes";
import LayoutContainer from "./presentation/layout/LayoutContainer";
import Loader from "./presentation/layout/Loader";

const App = () => {
  return (
    <LayoutContainer>
      <Loader />
      <AllRoutes />
    </LayoutContainer>
  );
};

export default App;
