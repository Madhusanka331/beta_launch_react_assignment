import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboards from "../components/dashboard"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboards />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
