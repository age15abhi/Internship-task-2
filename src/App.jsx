import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import NewSignUps from "./pages/NewSignUps";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="new" element={<NewSignUps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
