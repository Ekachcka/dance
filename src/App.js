import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ManPage from "./pages/ManPage/ManPage";

import peopleData from "./components/people/people.json";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home peopleData={peopleData} />} />
          <Route path="/:p/:id" element={<ManPage peopleData={peopleData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
