import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  })

  if (loading){
    return (
      <Loader/>
      )
  }else{
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
  

  
}

export default App;
