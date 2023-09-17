import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ManPage from "./pages/ManPage/ManPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:p/:id" element={<ManPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
