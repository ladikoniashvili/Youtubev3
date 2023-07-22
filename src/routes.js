import routes from "../src/config/routes";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Error from "../src/components/Error/Error";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.Guard>
                  <route.Component></route.Component>
                </route.Guard>
              }
            ></Route>
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            Component={route.Component}
          ></Route>
        );
      })}
      <Route path="*" Component={Error}></Route>
    </Routes>
  );
};

export default AppRoutes;
