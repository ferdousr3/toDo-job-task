import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import EditTask from "./Pages/EditTask/EditTask";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Tasks from "./Pages/Tasks/Tasks";

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
          <Route path="/" element={<Home  />} />

          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            }
          />
          <Route
            path="/editTask/:id"
            element={
              <RequireAuth>
                <EditTask />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
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
