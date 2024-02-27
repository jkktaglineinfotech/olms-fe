import React from "react";
import AllRoutes from "./routes";
import LayoutContainer from "./presentation/layout/LayoutContainer";

const App = () => {
  return (
    <LayoutContainer>
      <AllRoutes />
    </LayoutContainer>
  );
};

export default App;
