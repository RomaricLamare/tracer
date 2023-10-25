/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import Graph from "../pages/Graph";
// import Test from "../pages/Test";

function Router() {
  console.warn("Coucou");

  return (
    <ReactFlowProvider>
      <Routes>
        <Route path="/" element={<Graph />} />
        {/* // <Route path="/test" element={<Test />} /> */}
      </Routes>
    </ReactFlowProvider>
  );
}

export default Router;
