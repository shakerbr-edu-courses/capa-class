import { BrowserRouter, Routes, Route } from "react-router-dom";
import { removeToken } from "./services/auth";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
