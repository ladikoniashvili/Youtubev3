import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import { AppContext } from "./context/fetchContext/contextApi";
import AppRoutes from "./routes";

const App = () => {
  return (
    <AppContext>
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </AppContext>
  );
};

export default App;
