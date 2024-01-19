import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="flex">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex-1 p-4">
              <div className="flex items-center justify-center">
                <img src="toolbox.png" alt="Logo" className="w-20" />
              </div>
            </div>
          }
        />
        <Route
          path="/hashes"
          element={
            <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                Hashes
              </h1>
            </div>
          }
        />
        <Route
          path="/unix-time"
          element={
            <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                Unix Time
              </h1>
            </div>
          }
        />
        <Route
          path="/json"
          element={
            <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                JSON
              </h1>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                NOT FOUND 😢
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
