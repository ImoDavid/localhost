import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

function App() {

  return (
    <>
    {/* <Routes>
    <Route path="/nav" element={<Navbar />} />
    </Routes> */}
    <Navbar/>
     <Header/>
    </>
  )
}

export default App;
