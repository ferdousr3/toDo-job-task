import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <div className="container mx-auto">
        {/* main header */}
        <header>
          <Header />
        </header>
        {/* pages and components route section */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        {/* main footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
