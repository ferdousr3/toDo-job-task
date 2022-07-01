import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTask from "./Pages/EditTask/EditTask";

function App() {
  return (
    <>
      {/* main header */}
      <header>
        <Header />
      </header>
      {/* pages and components route section */}
      <main className="container mx-auto py-28 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editTask/:id" element={<EditTask />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* main footer */}
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
