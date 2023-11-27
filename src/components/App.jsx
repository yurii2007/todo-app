import React from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import HomePage from "../pages/HomePage";

const TodosPage = React.lazy(() => import("../pages/TodosPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
};

export default App;
