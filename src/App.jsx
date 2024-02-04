import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import JsonValidator from "./Tools/JsonValidator";
import Hashes from "./Tools/Hashes";
import AsciiConverter from "./Tools/AsciiConverter";
import Base64 from "./Tools/Base64";
import Base64Image from "./Tools/Base64Image";
import UUIDGenerator from "./Tools/UUIDGenerator";
import UrlParser from "./Tools/UrlParser";
import QRCodeGenerator from "./Tools/QRCodeGenerator";

const App = () => {
  return (
    <div className="flex">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex-1 m-5 flex-column">
              <div className="flex items-center justify-center">
                <img src="toolbox.png" alt="Logo" className="w-20" />
              </div>
              <h1 className="text-2xl font-bold flex items-center justify-center">
                Welcome to Lil Tools!
              </h1>
              <p className="text-center text-xl">
                A collection of small tools to help you with your daily software
                engineering tasks.
              </p>
            </div>
          }
        />
        <Route path="/hashes" element={<Hashes />} />
        <Route
          path="/unix-time"
          element={
            <div className="flex-1 m-5 flex-column">
              <h1 className="text-2xl font-bold flex items-center justify-center">
                Coming soon!
              </h1>
            </div>
          }
        />
        <Route path="/json" element={<JsonValidator />} />
        <Route path="/ascii" element={<AsciiConverter />} />
        <Route path="/base64" element={<Base64 />} />
        <Route path="/base64-image" element={<Base64Image />} />
        <Route path="/uuid" element={<UUIDGenerator />} />
        <Route path="/url-parser" element={<UrlParser />} />
        <Route path="/qr-code" element={<QRCodeGenerator />} />
        <Route
          path="*"
          element={
            <div className="flex-1 p-4 m-5">
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
