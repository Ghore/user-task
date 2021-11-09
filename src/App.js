import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
      </Routes>
    </>
  );
}

export default App;
