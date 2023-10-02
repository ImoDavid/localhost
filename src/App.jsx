import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </>
    );
  }
}

export default App;
